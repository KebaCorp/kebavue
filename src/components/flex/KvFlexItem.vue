<template>
  <div
    class="kv-flex-item"
    :style="{ alignSelf, width, flexGrow: grow }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlexItem',
  props: {
    alignSelf: { type: String, default: 'flex-start' },
    width: { type: String, default: '100%' },
    grow: { type: Number, default: 0 }
  }
}
</script>

<style scoped>
  .kv-flex-item {
    box-sizing: border-box;
  }
</style>
