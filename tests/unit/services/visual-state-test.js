import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Service | visual-state', function (hooks) {
  setupTest(hooks)

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:visual-state')
    assert.ok(service)
  })
})
