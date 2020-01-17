import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default class ApplicationController extends Controller {
  @service router

  get screenHeight() {
    switch (this.router.currentRouteName) {
      case 'home':
        return 'h-screen'
      default:
        return 'min-h-screen'
    }
  }
}
