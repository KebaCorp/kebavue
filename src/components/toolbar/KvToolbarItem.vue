<template>
  <kv-flex-item
    class="kv-toolbar-item"
    align-self="stretch"
  >
    <slot></slot>
  </kv-flex-item>
</template>

<script>
import KvFlexItem from '../flex/KvFlexItem'

export default {
  name: 'KvToolbar',
  components: {
    KvFlexItem
  }
}
</script>

<style lang="scss" scoped>
  .kv-toolbar-item {
    align-items: center;
  }
</style>
