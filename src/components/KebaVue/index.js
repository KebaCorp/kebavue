import components from '../index'

// Options
const prototype = {
  primary: '#7e57c2',
  primaryText: 'white',
  secondary: '#eeeeee',
  secondaryDisabled: '#fafafa',
  secondaryText: '#222222',
  secondaryTextDisabled: '#aaaaaa',
  link: '#a674fc'
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
