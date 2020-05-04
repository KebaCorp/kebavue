<template>
  <div
    class="kv-flex-item"
    :style="{ alignSelf }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlexItem',
  props: {
    alignSelf: { type: String, default: 'flex-start' }
  }
}
</script>

<style scoped>

</style>
