import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class ContactRoute extends Route {
  @service headData

  afterModel() {
    this.headData.card = 'reach out to us hello@aliencyb.org'
    this.headData.path = 'contact'
    this.headData.title = 'Contact'
  }
}
