export const getColor = {
  methods: {
    getColor (colorName) {
      let color = null
      let bg = null

      switch (colorName) {
        case 'primary':
          color = this.$kebavue.primaryText
          bg = this.$kebavue.primary
          break

        case 'secondary':
          color = this.$kebavue.secondaryText
          bg = this.$kebavue.secondary
          break

        case 'success':
          color = this.$kebavue.successText
          bg = this.$kebavue.success
          break

        case 'error':
          color = this.$kebavue.errorText
          bg = this.$kebavue.error
          break

        case 'info':
          color = this.$kebavue.infoText
          bg = this.$kebavue.info
          break

        case 'warning':
          color = this.$kebavue.warningText
          bg = this.$kebavue.warning
          break
      }

      return { color, bg }
    }
  }
}
