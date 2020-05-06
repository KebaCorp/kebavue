<template>
  <kv-flex>
    <template
      v-for="(item, index) in items"
    >

      <!--Link-->
      <router-link
        :key="`link-${index}`"
        :to="item.href"
      >
        {{ item.text }}
      </router-link>

      <!--Divider-->
      <span
        v-if="index < items.length"
        :key="`divider-${index}`"
      >
        {{ divider }}
      </span>

    </template>
  </kv-flex>
</template>

<script>
export default {
  name: 'KvBreadcrumbs',
  props: {
    items: { type: [Array, Object], default: () => ([]) },
    divider: { type: String, default: '/' }
  }
}
</script>

<style scoped>

</style>
