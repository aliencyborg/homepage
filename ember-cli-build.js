'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const isProduction = EmberApp.env() === 'production'

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/components/**/*.hbs',
      './app/templates/**/*.hbs',
      './app/styles/components.css'
    ],
    whitelist: ['hidden', 'h-screen', 'min-h-screen'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    // https://github.com/chrism/emberjs-tailwind-purgecss
    postcssOptions: {
      compile: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss')('./app/tailwind/config.js'),
          ...(isProduction ? [purgeCSS] : []),
          require('postcss-preset-env')({ stage: 0 })
        ]
      }
    }
  })

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree()
}
