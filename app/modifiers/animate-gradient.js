import { modifier } from 'ember-modifier'

export default modifier(element =>
  element.animate(
    [
      { 'background-position': '0% 0%' },
      { 'background-position': '100% 100%' },
      { 'background-position': '0% 0%' }
    ],
    {
      duration: 10000,
      delay: 1000,
      easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      fill: 'backwards',
      iterations: 'Infinity'
    }
  )
)
