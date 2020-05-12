<template>
  <kv-flex
    class="list-dotted"
    column
    :style="{
      background: $kebavue.contentBg
    }"
  >

    <!--Header-->
    <kv-flex-item class="list-dotted-header">
      <slot name="header"></slot>
    </kv-flex-item>

    <!--Items-->
    <slot></slot>

  </kv-flex>
</template>

<script>
export default {
  name: 'KvListDotted'
}
</script>

<style lang="scss" scoped>

</style>
