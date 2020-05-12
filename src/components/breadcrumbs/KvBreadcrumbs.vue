<template>
  <kv-flex class="kv-breadcrumbs" :wrap="wrap">
    <kv-flex-item
      v-for="(item, index) in items"
      :key="index"
      :width="width"
      class="kv-breadcrumbs-item"
    >

      <!--Link-->
      <router-link
        v-if="item.to && !item.isActivePage && !item.disabled"
        :to="item.to"
        :style="{
          color: $kebavue.link
        }"
      >
        <span>{{ item.text }}</span>
      </router-link>
      <span
        v-else
        :key="`text-${index}`"
        :class="{ 'kv-breadcrumbs-active-page': item.isActivePage }"
        :style="{
          color: $kebavue.secondaryTextDisabled
        }"
      >{{ item.text }}</span>

      <!--Divider-->
      <span
        v-if="index < (items.length - 1)"
        class="kv-breadcrumbs-divider"
        :style="{
          color: $kebavue.secondaryText
        }"
      >{{ divider }}</span>

    </kv-flex-item>
  </kv-flex>
</template>

<script>
import KvFlex from '../flex/KvFlex'
import KvFlexItem from '../flex/KvFlexItem'

export default {
  name: 'KvBreadcrumbs',
  components: {
    KvFlex,
    KvFlexItem
  },
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
    divider: { type: String, default: '/' },
    width: { type: String, default: 'fit-content' },
    wrap: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
  .kv-breadcrumbs {
    white-space: nowrap;

    a {
      text-decoration: none;
    }
  }

  .kv-breadcrumbs-divider {
    padding: 0 3px;
  }
</style>
