import Component from '@glimmer/component'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class NavBarComponent extends Component {
  @service visualState

  get menuClass() {
    return this.visualState.navMenuIsExpanded
      ? 'lg:inline-block'
      : 'hidden lg:inline-block'
  }

  @action
  toggle() {
    this.visualState.toggleNavMenu()
  }
}
