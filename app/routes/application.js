import Route from '@ember/routing/route'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class ApplicationRoute extends Route {
  @service headData
  @service visualState

  @action
  didTransition() {
    this.visualState.triggerDidTransition()
  }

  afterModel() {
    this.headData.card = ''
    this.headData.path = ''
    this.headData.title = 'We Build Websites — Get online for $500'
  }
}
