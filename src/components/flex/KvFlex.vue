<template>
  <div
    class="kv-flex"
    :style="{ flexDirection: column ? 'column' : 'row', flexWrap: wrap ? 'wrap' : 'nowrap' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlex',
  props: {
    column: { type: Boolean, default: false },
    wrap: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .kv-flex {
    display: flex;
    box-sizing: border-box;
  }
</style>
