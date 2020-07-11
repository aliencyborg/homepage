import BaseAdapter from 'ember-metrics/metrics-adapters/base'

export default BaseAdapter.extend({
  toStringExtension() {
    return 'HubSpot'
  },

  init() {
    if (typeof document === 'undefined') {
      return // fastboot-safe
    }

    const { id: hubSpotID } = this.config
    const script = document.createElement('script')

    script.async = true
    script.defer = true
    script.id = 'hs-script-loader'
    script.src = `http://js.hs-scripts.com/${hubSpotID}.js`

    document.body.appendChild(script)
  },

  identify() {},

  trackEvent() {},

  trackPage() {},

  alias() {},

  willDestroy() {
    const script = document.getElementById('hs-script-loader')

    document.body.removeChild(script)
  }
})
