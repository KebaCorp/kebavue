<template>
  <div
    class="kv-flex-item"
    :style="{ alignSelf, width: fullWidth ? '100%' : '' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlexItem',
  props: {
    alignSelf: { type: String, default: 'flex-start' },
    fullWidth: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
