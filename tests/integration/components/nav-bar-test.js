import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import { getTextParts } from 'aliencyborg/tests/helpers/text-helper'

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const expected = ['AlienCyborg', 'Contact Us', 'Pricing', 'Services']

    await render(hbs`<NavBar />`)

    assert.deepEqual(getTextParts(this.element), expected)

    // Template block usage:
    await render(hbs`
      <NavBar>
        template block text
      </NavBar>
    `)

    assert.deepEqual(getTextParts(this.element), expected)
  })
})
