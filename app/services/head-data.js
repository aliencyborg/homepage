import Service from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class HeadDataService extends Service {
  @tracked card
  @tracked path
  @tracked title

  get fullTitle() {
    return `${this.title} — AlienCyborg, LLC`
  }

  get url() {
    return `https://AlienCyb.org/${this.path}`
  }
}
