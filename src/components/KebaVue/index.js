import components from '../index'
import prototype from './options'

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
