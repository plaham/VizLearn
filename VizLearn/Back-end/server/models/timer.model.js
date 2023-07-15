'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Types = Schema.Types
const modelName = 'timer'
const dbConn = require('@plugins/mongoose.plugin').plugin.dbConn()

const TimerSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: 'user',
      required: true
    },
    courseName: {
      type: Types.String,
      default: null
    },
    startTime: {
      type: Types.String,
      default: null
    },
    endTime: {
      type: Types.String,
      default: null
    },
    differenceTimeHour: {
      type: Types.String,
      default: null
    },
    startTimeNumber: {
      type: Types.Number,
      default: 0
    },
    endTimmeNumber: {
      type: Types.Number,
      default: 0
    },
    differenceNumber: {
      type: Types.Number,
      default: 0
    },
    createdAt: {
      type: Types.Date,
      default: null
    },
    updatedAt: {
      type: Types.Date,
      default: null
    }
  },
  {
    versionKey: false,
    strict: false,
    timestamps: true
  }
)

exports.schema = dbConn.model(modelName, TimerSchema)
