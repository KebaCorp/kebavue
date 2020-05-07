<template>
  <kv-flex
    column
    class="kv-tab-vertical"
  >
    <kv-flex-item
      v-for="(item, index) in items"
      :key="index"
      class="kv-tab-vertical-item"
    >
      <router-link
        v-if="item.to"
        :to="item.to"
        active-class="kv-tab-vertical-item-link-active"
        class="kv-tab-vertical-item-link"
        :style="itemStyle"
      >
        {{ item.text }}
      </router-link>
      <span
        v-else
        class="kv-tab-vertical-item-text"
        :style="itemStyle"
      >
        {{ item.text }}
      </span>
    </kv-flex-item>
  </kv-flex>
</template>

<script>
export default {
  name: 'KvTabVertical',
  props: {
    items: { type: [Array, Object], default: () => ([]) }
  },
  computed: {
    itemStyle () {
      return {
        color: this.$kebavue.secondaryText
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .kv-tab-vertical-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
      opacity: 70%;
    }
  }

  .kv-tab-vertical-item-link {
    text-decoration: none;
  }

  .kv-tab-vertical-item-link, .kv-tab-vertical-item-text {
    display: block;
    padding: 15px 10px;
  }
</style>
