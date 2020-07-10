import Service from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class VisualStateService extends Service {
  @tracked navMenuIsExpanded = false

  toggleNavMenu() {
    this.navMenuIsExpanded = !this.navMenuIsExpanded
  }

  // reset the menu when a new page loads
  triggerDidTransition() {
    this.navMenuIsExpanded = false
  }
}
