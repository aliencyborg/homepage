import EmberRouter from '@ember/routing/router'
import { inject as service } from '@ember/service'
import config from './config/environment'

export default class Router extends EmberRouter {
  @service metrics

  location = config.locationType
  rootURL = config.rootURL

  constructor() {
    super(...arguments)

    this.on('routeDidChange', () => {
      const {
        currentRouteName: title = 'unknown',
        currentURL: page = 'unknown'
      } = this

      if (!config.staging) {
        this.metrics.trackPage({ page, title })
      }
    })
  }
}

Router.map(function() {
  this.route('home', { path: '/' })

  this.route('about')
  this.route('contact')
  this.route('gallery')
  this.route('pricing')
  this.route('services')
})
