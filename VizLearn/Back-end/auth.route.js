'use strict'
// Never take constants here
module.exports = {
  plugin: {
    async register(server, options) {
      const API = require('./../api/auth.api')
      server.route([
        {
          method: 'POST',
          path: '/signup',
          config: {
            auth: null,
            plugins: {
              policies: ['log.policy']
            },
            tags: ['api', 'Authentication'],
            description: 'Signup User',
            notes: 'Signup User',
            validate: API.signup.validate,
            pre: API.signup.pre,
            handler: API.signup.handler
          }
        },
        {
          method: 'POST',
          path: '/login',
          config: {
            auth: null,
            plugins: {
              policies: ['log.policy']
            },
            tags: ['api', 'Authentication'],
            description: 'Login',
            notes: 'Login',
            validate: API.login.validate,
            pre: API.login.pre,
            handler: API.login.handler
          }
        },
        {
          method: 'GET',
          path: '/me',
          config: {
            auth: 'auth',
            plugins: {
              policies: ['log.policy'],
              'hapi-swagger': {
                security: [
                  {
                    jwt: []
                  }
                ]
              }
            },
            tags: ['api', 'Authentication'],
            description: 'Me',
            notes: 'Me',
            validate: API.me.validate,
            pre: API.me.pre,
            handler: API.me.handler
          }
        },
        
        {
          method: 'GET',
          path: '/user-details/{userId}',
          config: {
            auth: 'auth', // This route requires authentication. Adjust the strategy if needed.
            plugins: {
              policies: ['log.policy'],
              'hapi-swagger': {
                security: [
                  {
                    jwt: [] // Adjust if your authentication strategy uses a different token name.
                  }
                ]
              }
            },
            tags: ['api', 'Users'],
            description: 'Get User Details',
            notes: 'Get User Details',
            validate: API.getUserDetails.validate,
            pre: API.getUserDetails.pre,
            handler: API.getUserDetails.handler
          }
        },

      ])
    },
    version: require('../../package.json').version,
    name: 'users-route'
  }
}
