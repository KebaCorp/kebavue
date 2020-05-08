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

<style lang="scss" scoped>
  .kv-input {
    padding: 10px 5px;
    border-radius: 4px;
    border: 0;
    outline: none;
    transition-duration: .25s;
  }
</style>
