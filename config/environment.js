'use strict'

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'aliencyborg',
    environment,
    rootURL: '/',
    locationType: 'auto',
    // set to true when on the staging host
    staging: process.env.STAGING || false,
    fastboot: {
      hostWhitelist: [
        /^stage.aliencyb.org$/,
        /^(w+\.)?aliencyb.org$/,
        /^localhost:\d+$/
      ]
    },
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        // environments: ['development', 'production'],
        environments: ['production'],
        config: {
          id: 'UA-135499270-1',
          // Use `analytics_debug.js` in development
          debug: environment === 'development',
          // Use verbose tracing of GA events
          trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development'
          // Specify Google Analytics plugins
          // require: ['ecommerce']
        }
      },
      {
        name: 'HubSpot',
        environments: ['production'],
        config: {
          id: '6976625'
        }
      }
    ],
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    DS: {
      host: process.env.API_HOST || 'http://localhost:3000'
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
    ENV.APP.autoboot = false
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV
}
