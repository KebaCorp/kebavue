<template>
  <kv-flex
    column
    :class="{ [`box-shadow-${shadow}`]: !!shadow, [`border-radius-${borderRadius}`]: !!borderRadius }"
    :style="{ background: getColor(color).bg, color: getColor(color).color }"
    class="kv-message"
  >

    <!--Header-->
    <kv-flex-item
      class="kv-message-header"
      :class="{ 'pgh-1': !!header, 'pgt-1': !!header }"
    >
      <slot name="header">
        <h3>{{ header }}</h3>
      </slot>
    </kv-flex-item>

    <!--Content-->
    <kv-flex-item class="kv-message-content pg-1">
      <slot></slot>
    </kv-flex-item>

  </kv-flex>
</template>

<script>
import { getColor } from '../../mixins/colorMixin'

export default {
  name: 'KvMessage',
  mixins: [getColor],
  props: {
    header: { type: String, default: null },
    shadow: { type: Number, default: 12 },
    borderRadius: { type: Number, default: 0 },
    color: { type: String, default: 'error' }
  }
}
</script>

<style scoped>

</style>
