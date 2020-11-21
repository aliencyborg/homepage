import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class PricingRoute extends Route {
  @service headData

  afterModel() {
    this.headData.card = ''
    this.headData.path = 'pricing'
    this.headData.title = 'Get online for $500; Get hosted for $25'
  }
}
