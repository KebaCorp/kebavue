import components from '../index'

// Options
const prototype = {
  primary: '#225465',
  primaryText: 'white',
  secondary: '#cccccc',
  secondaryText: '#222222'
}

export default {
  install: (Vue, options) => {
    // Set prototype
    Vue.prototype.$kebavue = Object.assign(prototype, options)

    // Register components
    for (const componentKey in components) {
      Vue.component(componentKey, components[componentKey])
    }
  }
}
