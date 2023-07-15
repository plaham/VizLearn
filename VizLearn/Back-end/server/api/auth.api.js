'use strict'

const Joi = require('joi')
const config = require('config')
const Boom = require('@hapi/boom')
const errorHelper = require('@utilities/error-helper')
const Token = require('@utilities/create-token')
const User = require('@models/user.model').schema
Joi.objectId = require('joi-objectid')(Joi)
Joi.objectId = Joi.string

module.exports = {
  signup: {
    validate: {
      payload: Joi.object().keys({
        firstName: Joi.string()
          .trim()
          .label('FirstName'),
        middleName: Joi.string()
          .trim()
          .label('middleName'),
        lastName: Joi.string()
          .trim()
          .label('LastName'),
        email: Joi.string()
          .required()
          .trim()
          .label('Email'),
        password: Joi.string()
          .required()
          .trim()
          .label('Password'),
        age: Joi.number().label('Age'),
        mobileNumber: Joi.number().label('MobileNumbe'),
        gender : Joi.string().valid('MALE','FEMALE','OTHERS').label('Gender')
      })
    },
    pre: [
      {
        assign: 'signup',
        method: async (request, h) => {
          try {
            const { payload } = request
            console.log('payload: ', payload)
            delete payload.confirmPassword
            const existUser = await User.getByEmail(payload.email)
            console.log('existUser: ', existUser)
            if (existUser) {
              errorHelper.handleError({
                message : 'Email already exist'
              })
            } else {
              return await User.create(payload)
            }
          } catch (err) {
            errorHelper.handleError(err)
          }
        }
      }
    ],
    handler: async (request, h) => {
      return h.response(request.pre.signup)
    }
  },
  login: {
    validate: {
      payload: Joi.object().keys({
        email: Joi.string()
          .required()
          .trim()
          .label('Email'),
        password: Joi.string()
          .required()
          .trim()
          .label('Password')
      })
    },
    pre: [
      {
        assign: 'user',
        method: async (request, h) => {
          try {
            const email = request.payload.email
            const password = request.payload.password
            const user = await User.findByCredentials(email, password)
            if (user) {
                return user
            } else {
              errorHelper.handleError(
                Boom.badRequest('Wrong email or password')
              )
            }
          } catch (err) {
            errorHelper.handleError(err)
          }
          return h.continue
        }
      },
      {
        assign: 'accessToken',
        method: (request, h) => {
          return Token(request.pre.user, config.constants.EXPIRATION_PERIOD)
        }
      }
    ],
    handler: async (request, h) => {
      const accessToken = request.pre.accessToken
      let response = {}
      delete request.pre.user.password
      response = {
        user: request.pre.user,
        accessToken
      }
      return h.response(response).code(200)
    }
  },
  me: {
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
      }).options({
        allowUnknown: true
      })
    },
    pre: [],
    handler: async (request, h) => {
      const { userService } = request.server.services()
      const user = await userService.getUserById(
        request.auth.credentials.user._id
      )
      return h.response(user)
    }
  }
}
