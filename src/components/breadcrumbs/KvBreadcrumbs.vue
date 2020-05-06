<template>
  <kv-flex>
    <template
      v-for="(item, index) in items"
    >

      <!--Link-->
      <router-link
        v-if="item.to"
        :key="`link-${index}`"
        :to="item.to"
      >
        {{ item.text }}
      </router-link>
      <span
        v-else
        :key="`text-${index}`"
      >
        {{ item.text }}
      </span>

      <!--Divider-->
      <span
        v-if="index < (items.length - 1)"
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
