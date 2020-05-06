<template>
  <thead
    class="kv-table-head"
    :style="{ background: $kebavue.secondary }"
  >
  <slot></slot>
  </thead>
</template>

<script>
export default {
  name: 'KvTableHead'
}
</script>

<style scoped>

</style>
