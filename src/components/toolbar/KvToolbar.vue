<template>
  <div :style="{ height }">
    <kv-flex
      class="kv-toolbar"
      :style="{
        height,
        position: fixed ? 'fixed' : 'static',
        zIndex: fixed ? '1' : 'auto',
        background: $kebavue.primary
      }"
    >
      <slot></slot>
    </kv-flex>
  </div>
</template>

<script>
import KvFlex from '../flex/KvFlex'

export default {
  name: 'KvToolbar',
  components: {
    KvFlex
  },
  props: {
    height: { default: '50px' },
    fixed: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
  .kv-toolbar {
    padding: 0 15px;
    background: #42A85F;
    width: 100%;
  }
</style>
