<template>
  <kv-flex-item
    class="kv-toolbar-item"
    align-self="center"
    width="auto"
  >
    <slot></slot>
  </kv-flex-item>
</template>

<script>
import KvFlexItem from '../flex/KvFlexItem'

export default {
  name: 'KvToolbarItem',
  components: {
    KvFlexItem
  }
}
</script>

<style lang="scss" scoped>
  .kv-toolbar-item {
    align-items: center;
    padding: 0 5px;
  }
</style>
