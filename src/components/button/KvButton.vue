<template>
  <button
    type="button"
    v-on="$listeners"
    v-bind="$attrs"
    class="kv-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'KvButton',
  inheritAttrs: false
}
</script>

<style scoped>

</style>
