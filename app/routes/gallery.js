import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class GalleryRoute extends Route {
  @service headData

  afterModel() {
    this.headData.card = ''
    this.headData.path = 'gallery'
    this.headData.title = 'Gallery'
  }
}
