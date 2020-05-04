<template>
  <div
    class="kv-flex"
    :style="{ flexDirection: column ? 'column' : 'row' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlex',
  props: {
    column: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .kv-flex {
    display: flex;
  }
</style>
