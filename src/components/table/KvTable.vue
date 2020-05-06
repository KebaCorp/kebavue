<template>
  <div :style="{ 'overflow-y': overflowY }">
    <table
      v-on="$listeners"
      v-bind="$attrs"
      class="kv-table"
      :style="{ width, color: $kebavue.secondaryText }"
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
    overflowX: { type: String, default: 'hidden' },
    width: { type: String, default: '100%' }
  }
}
</script>

<style scoped>

</style>
