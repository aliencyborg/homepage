import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class HomeRoute extends Route {
  @service headData

  afterModel() {
    this.headData.card = ''
    this.headData.path = ''
    this.headData.title = 'We Build Websites — Get online for $500'
  }
}
