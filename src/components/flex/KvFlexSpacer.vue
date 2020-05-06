<template>
  <div class="kv-flex-spacer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvFlexSpacer'
}
</script>

<style scoped>
  .kv-flex-spacer {
    flex-grow: 999;
  }
</style>
