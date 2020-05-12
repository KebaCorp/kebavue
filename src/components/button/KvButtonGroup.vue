<template>
  <div
    class="kv-button-group"
    :class="{
      [`box-shadow-${shadow}`]: !disabled && !separated,
      'kv-button-group-separated': separated,
      'kv-button-group-united': !separated
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KvButtonGroup',
  props: {
    separated: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    shadow: { type: Number, default: 3 }
  }
}
</script>

<style lang="scss" scoped>
  .kv-button-group {
    display: inline-block;
  }

  .kv-button-group-separated {
    .kv-button:not(:last-child) {
      margin-right: 10px;
    }
  }

  .kv-button-group-united {
    border-radius: 4px;
    overflow: hidden;

    .kv-button {
      padding: 10px 15px;
      border: none;
      border-radius: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      margin: 0;
    }

    .kv-button:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
</style>
