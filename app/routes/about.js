import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class AboutRoute extends Route {
  @service headData

  afterModel() {
    this.headData.card = ''
    this.headData.path = 'about'
    this.headData.title = 'About'
  }
}
