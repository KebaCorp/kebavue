<template>
  <kv-flex
    :shadow="shadow"
    :border-radius="3"
    class="kv-tab"
  >

    <!--Left tabs-->
    <kv-flex-item
      v-if="position === 'left'"
      class="kv-tab-left-container"
      align-self="stretch"
      :grow="1"
      :style="{ background: this.$kebavue.secondary }"
    >
      <kv-tab-vertical
        :items="items"
      />
    </kv-flex-item>

    <!--Content-->
    <kv-flex-item
      class="kv-tab-content"
      align-self="stretch"
      :grow="1"
    >
      <slot></slot>
    </kv-flex-item>

    <!--Right tabs-->
    <kv-flex-item
      v-if="position === 'right'"
      class="kv-tab-right-container"
      align-self="stretch"
      :style="{ background: this.$kebavue.secondary }"
    >
      <kv-tab-vertical
        :items="items"
      />
    </kv-flex-item>

  </kv-flex>
</template>

<script>
export default {
  name: 'KvTab',
  props: {
    items: { type: [Array, Object], default: () => ([]) },
    shadow: { type: Number, default: 12 },
    position: { type: String, default: 'left' }
  }
}
</script>

<style lang="scss" scoped>
  .kv-tab-left-container, .kv-tab-right-container {
    max-width: 300px;
  }
</style>
