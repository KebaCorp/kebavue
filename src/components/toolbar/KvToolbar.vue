<template>
  <kv-flex
    class="kv-toolbar"
    :style="{ height }"
  >
    <slot></slot>
  </kv-flex>
</template>

<script>
import KvFlex from '../flex/KvFlex'

export default {
  name: 'KvToolbar',
  components: {
    KvFlex
  },
  props: {
    height: { default: '50px' }
  }
}
</script>

<style lang="scss" scoped>
  .kv-toolbar {
    border: 1px solid red;
  }
</style>
