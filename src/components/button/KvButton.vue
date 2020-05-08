<template>
  <button
    type="button"
    v-on="$listeners"
    v-bind="$attrs"
    class="kv-button"
    :class="{ [`box-shadow-${shadow}`]: !disabled }"
    :style="{
      cursor: disabled ? 'auto' : 'pointer',
      background,
      color: disabled ? $kebavue.secondaryTextDisabled : ''
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'KvButton',
  inheritAttrs: false,
  props: {
    disabled: { type: Boolean, default: false },
    shadow: { type: Number, default: 3 },
    color: { type: String, default: '' }
  },
  computed: {
    background () {
      if (this.disabled) {
        return this.$kebavue.secondaryDisabled
      }

      return this.$kebavue[this.color] || this.color || this.$kebavue.secondary
    }
  }
}
</script>

<style lang="scss" scoped>
  .kv-button {
    cursor: pointer;
    padding: 7px 15px;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.2s;
    border: 3px solid rgba(0, 0, 0, 0.1);

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.7);
    }
  }
</style>
