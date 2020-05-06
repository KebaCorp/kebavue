<template>
  <label>
    <input
      type="submit"
      v-on="$listeners"
      v-bind="$attrs"
    >
  </label>
</template>

<script>
export default {
  name: 'KvButton',
  inheritAttrs: false
}
</script>

<style scoped>

</style>
