import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | services', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:services')
    assert.ok(route)
  })
})
