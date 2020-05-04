<template>
  <kv-flex>
    <kv-flex-item align-self="center">
      Main
    </kv-flex-item>
  </kv-flex>
</template>

<script>
import KvFlex from './flex/KvFlex'
import KvFlexItem from './flex/KvFlexItem'

export default {
  name: 'Main',
  components: {
    KvFlexItem,
    KvFlex
  }
}
</script>

<style scoped>

</style>
