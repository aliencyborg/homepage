import { modifier } from 'ember-modifier'

export default modifier(element =>
  element.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], {
    delay: 1000,
    duration: 10000,
    easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    fill: 'backwards',
    iterations: 'Infinity'
  })
)
