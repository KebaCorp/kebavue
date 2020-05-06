<template>
  <label>
    <input
      type="text"
      @input="onInput"
      v-on="$listeners"
      v-bind="$attrs"
      class="kv-input"
    >
  </label>
</template>

<script>
export default {
  name: 'KvInput',
  inheritAttrs: false,
  props: {
    value: {}
  },
  methods: {
    onInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
