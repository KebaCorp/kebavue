<template>
  <div
    class="kv-flex-item"
    :class="{ [`box-shadow-${shadow}`]: !!shadow }"
    :style="{ alignSelf, width, flexGrow: grow, flexShrink: shrink, textAlign }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlexItem',
  props: {
    alignSelf: { type: String, default: 'flex-start' },
    textAlign: { type: String, default: 'left' },
    width: { type: String, default: '100%' },
    grow: { type: Number, default: 0 },
    shrink: { type: Number, default: 1 },
    shadow: { type: Number, default: 0 }
  }
}
</script>

<style scoped>
  .kv-flex-item {
    box-sizing: border-box;
  }
</style>
