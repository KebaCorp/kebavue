<template>
  <kv-flex class="kv-breadcrumbs">
    <template
      v-for="(item, index) in items"
    >

      <!--Link-->
      <router-link
        v-if="item.to && !item.isActivePage && !item.disabled"
        :key="`link-${index}`"
        :to="item.to"
        :style="{
          color: $kebavue.link
        }"
      >
        {{ item.text }}
      </router-link>
      <span
        v-else
        :key="`text-${index}`"
        :class="{ 'kv-breadcrumbs-active-page': item.isActivePage }"
        :style="{
          color: $kebavue.secondaryTextDisabled
        }"
      >
        {{ item.text }}
      </span>

      <!--Divider-->
      <span
        v-if="index < (items.length - 1)"
        :key="`divider-${index}`"
        class="kv-breadcrumbs-divider"
        :style="{
          color: $kebavue.secondaryText
        }"
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
    /**
     * Breadcrumbs items.
     *
     * @example [
     *  {
     *    text: String,
     *    to: RouterView "to" props,
     *    isActivePage: Boolean,
     *    disabled: Boolean
     *  },
     *  ...
     * ]
     */
    items: { type: [Array, Object], default: () => ([]) },
    divider: { type: String, default: '/' }
  }
}
</script>

<style lang="scss" scoped>
  .kv-breadcrumbs {
    a {
      text-decoration: none;
    }
  }

  .kv-breadcrumbs-divider {
    padding: 0 3px;
  }
</style>
