import Component from '@glimmer/component'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

export default class NavBarComponent extends Component {
  @tracked navMenuIsExpanded = false

  get menuClass() {
    return this.navMenuIsExpanded ? 'lg:inline-block' : 'hidden lg:inline-block'
  }

  @action
  toggle() {
    this.navMenuIsExpanded = !this.navMenuIsExpanded
  }
}
