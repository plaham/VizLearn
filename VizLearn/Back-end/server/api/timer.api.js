'use strict'

const Joi = require('joi')
const config = require('config')
const Timer = require('@models/timer.model').schema
Joi.objectId = require('joi-objectid')(Joi)
Joi.objectId = Joi.string
const moment = require('moment');
const helper = require('@utilities/helper')

module.exports = {
  createTimer: {
    validate: {
      headers: helper.apiHeaders(),
      payload: Joi.object().keys({
        courseName: Joi.string().label('Course name'),
      })
    },
    pre: [
    ],
    handler: async (request, h) => {
      return await Timer.create({
        user: request.auth.credentials.user._id,
        courseName: request.payload.courseName,
        startTime: new Date(),
        startTimeNumber: new Date().getTime()
      })
    }
  },
  updateTimer: {
    validate: {
      headers: helper.apiHeaders(),
      params: Joi.object().keys({
        id: Joi.string().required().label('Id')
      }),
    },
    pre: [],
    handler: async (request, h) => {
      const timer = await Timer.findOne({ _id: request.params.id })
      if (timer) {
        timer.endTime = new Date()
        timer.endTimmeNumber = new Date().getTime()
        const date2 = moment(new Date())
        const date1 = moment(timer.startTime)
        timer.differenceNumber = date2.diff(date1, 'seconds');
        timer.differenceTimeHour = new Date(timer.differenceNumber * 1000).toISOString().substring(11, 16)
        return await timer.save()
      } else {
        errorHelper.handleError({
          message: 'Not found.'
        })
      }
    }
  }
}
