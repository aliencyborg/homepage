import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'

export default class HomeController extends Controller {
  @tracked tagline = "It's probably fine."
}
