<template>
  <div
    class="kv-flex"
    :class="{ [`box-shadow-${shadow}`]: !!shadow, [`border-radius-${borderRadius}`]: !!borderRadius }"
    :style="{
      flexDirection: column ? 'column' : 'row',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      overflow
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlex',
  props: {
    column: { type: Boolean, default: false },
    wrap: { type: Boolean, default: false },
    shadow: { type: Number, default: 0 },
    borderRadius: { type: Number, default: 0 },
    overflow: { type: String, default: 'auto' }
  }
}
</script>

<style scoped>
  .kv-flex {
    display: flex;
    box-sizing: border-box;
  }
</style>
