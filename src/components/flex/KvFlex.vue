<template>
  <div
    class="kv-flex"
    :class="{ [`box-shadow-${shadow}`]: !!shadow, [`border-radius-${borderRadius}`]: !!borderRadius }"
    :style="{
      flexDirection: column ? 'column' : 'row',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      overflow,
      width,
      justifyContent
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
    width: { type: String, default: '100%' },
    wrap: { type: Boolean, default: false },
    justifyContent: { type: String, default: 'flex-start' },
    shadow: { type: Number, default: 0 },
    borderRadius: { type: Number, default: 0 },
    overflow: { type: String, default: 'visible' }
  }
}
</script>

<style scoped>
  .kv-flex {
    display: flex;
    box-sizing: border-box;
  }
</style>
