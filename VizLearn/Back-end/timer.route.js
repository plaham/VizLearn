'use strict'
// Never take constants here
module.exports = {
  plugin: {
    async register(server, options) {
      const API = require('./../api/timer.api')
      server.route([
        {
          method: 'POST',
          path: '/timer',
          config: {
            auth: 'auth',
            plugins: {
              policies: ['log.policy']
            },
            tags: ['api', 'Timer'],
            description: 'Create Timer User',
            notes: 'Create Timer User',
            validate: API.createTimer.validate,
            pre: API.createTimer.pre,
            handler: API.createTimer.handler
          }
        },
        {
          method: 'PUT',
          path: '/timer/{id}',
          config: {
            auth: 'auth',
            plugins: {
              policies: ['log.policy']
            },
            tags: ['api', 'Timer'],
            description: 'Update Timer User',
            notes: 'Update Timer User',
            validate: API.updateTimer.validate,
            pre: API.updateTimer.pre,
            handler: API.updateTimer.handler
          },
        },
      ])
    },
    version: require('../../package.json').version,
    name: 'timer-routes'
  }
}
