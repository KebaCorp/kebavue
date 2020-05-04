import components from '../index'

export default {
  install: (Vue, options) => {
    // Register components
    for (const componentKey in components) {
      Vue.component(componentKey, components[componentKey])
    }
  }
}
