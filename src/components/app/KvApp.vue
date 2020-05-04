<template>
  <div class="kv-app">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvApp'
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  .kv-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }
</style>
