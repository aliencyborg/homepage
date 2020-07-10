import Route from '@ember/routing/route'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class ApplicationRoute extends Route {
  @service visualState

  @action
  didTransition() {
    this.visualState.triggerDidTransition()
  }
}
