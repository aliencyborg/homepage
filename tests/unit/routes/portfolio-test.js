import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | portfolio', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:portfolio')
    assert.ok(route)
  })
})
