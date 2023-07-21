'use strict'

// const DEVELOPMENT = 'development'
// const PRODUCTION = 'production'

const getArgument = argument => {
  return process.argv.indexOf(argument)
}

if (getArgument('--development') !== -1) {
  process.env.NODE_ENV = 'development'
}


if (getArgument('--development') !== -1 || getArgument('--prod') !== -1) {
  process.env.NODE_CONFIG_DIR = `${__dirname}`
}

const config = require('config')
const mongoose = require('mongoose')
const Config = JSON.parse(JSON.stringify(config))

const swaggerOptions = {
  info: {
    title: 'Buz',
    version: require('../package.json').version,
    description: 'Buz'
  },
  documentationPath: '/docs',
  basePath: '/api',
  tags: [],
  grouping: 'tags',
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    },
    Session: {
      type: 'apiKey',
      name: 'Session',
      in: 'header'
    }
  },
  security: [
    {
      Basic: []
    }
  ]
}

const DEFAULT = 'default'

let plugins = []
const ENV = config.util.getEnv('NODE_ENV').trim()

if (ENV !== DEFAULT) {
  swaggerOptions.schemes = ['http', 'https']
  swaggerOptions.host = 'localhost:1333'
  mongoose.set('debug', true)
}
// if (ENV !== PRODUCTION) {
plugins = [
  {
    plugin: '@hapi/vision'
  },
  {
    plugin: 'hapi-swagger',
    options: swaggerOptions
  },
  {
    plugin: 'hapi-dev-errors',
    options: {
      showErrors: process.env.NODE_ENV !== 'production',
      toTerminal: true
    }
  }
]
// }
plugins = plugins.concat([
  {
    plugin: '@hapi/inert'
  },
  {
    plugin: '@hapi/good',
    options: {
      ops: {
        interval: 1000
      },
      reporters: {
        myConsoleReporter: [
          {
            module: '@hapi/good-squeeze',
            name: 'Squeeze',
            args: [
              {
                log: '*',
                request: '*',
                response: '*',
                error: '*'
              }
            ]
          },
          {
            module: '@hapi/good-console'
          },
          'stdout'
        ]
      }
    }
  },
  {
    plugin: 'hapi-auth-jwt2'
  },
  {
    plugin: '@hapi/basic'
  },
  {
    plugin: 'schmervice'
  },
  {
    plugin: 'mrhorse',
    options: {
      policyDirectory: `${__dirname}/../server/policies`,
      defaultApplyPoint:
        'onPreHandler' /* optional.  Defaults to onPreHandler */
    }
  },
  {
    plugin: '@plugins/mongoose.plugin',
    options: {
      connections: Config.connections
    }
  },
  {
    // if you need authentication then uncomment this plugin, and remove "auth: false" below
    plugin: '@plugins/auth.plugin'
  },
  {
    plugin: '@routes/root.route'
  }
])

const routesAdminOb = {
  'auth.route': '',
  'timer.route': '',
}

const routesAdmin = Object.keys(routesAdminOb)
routesAdmin.forEach(r => {
  plugins = plugins.concat([
    {
      plugin: `@routes/${r}`,
      routes: {
        prefix: `/api/v1`
      }
    }
  ])
})

exports.manifest = {
  server: {
    router: {
      stripTrailingSlash: true,
      isCaseSensitive: false
    },
    routes: {
      security: {
        hsts: false,
        xss: true,
        noOpen: true,
        noSniff: true,
        xframe: false
      },
      cors: {
        origin: ['*'],
        // ref: https://github.com/hapijs/hapi/issues/2986
        headers: ['Accept', 'Authorization', 'Session', 'Content-Type']
      },
      validate: {
        failAction: async (request, h, err) => {
          request.server.log(
            ['validation', 'error'],
            'Joi throw validation error'
          )
          throw err
        }
      },
      jsonp: 'callback', // <3 Hapi,
      auth: false // remove this to enable authentication or set your authentication profile ie. auth: 'jwt'
    },
    debug: Config.debug,
    port: Config.port
  },
  register: {
    plugins
  }
}

exports.options = {}
