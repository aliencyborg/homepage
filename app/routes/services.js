import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class ServicesRoute extends Route {
  @service headData

  afterModel() {
    this.headData.card =
      'Web Page Design and Development | Single-Page Web Apps | CMS=SquareSpace, WordPress, Drupal | Hosting $25+/year'
    this.headData.path = 'services'
    this.headData.title = 'Services'
  }
}
