<template>
  <div :style="{ overflowY, overflowX }">
    <table
      v-on="$listeners"
      v-bind="$attrs"
      class="kv-table"
    >
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'KvTable',
  inheritAttrs: false,
  props: {
    overflowY: { type: String, default: 'auto' },
    overflowX: { type: String, default: 'hidden' }
  }
}
</script>

<style scoped>

</style>
