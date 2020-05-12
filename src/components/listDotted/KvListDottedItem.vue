<template>
  <kv-flex-item class="list-dotted-item">
    <kv-flex class="list-dotted-item-flex">

      <!--Left-->
      <kv-flex-item class="list-dotted-item-left" :shrink="leftShrink">
        <div class="list-dotted-item-left-item">
          <slot name="left"></slot>
        </div>
      </kv-flex-item>

      <!--Right-->
      <kv-flex-item class="list-dotted-item-right" :shrink="rightShrink">
        <slot name="right"></slot>
      </kv-flex-item>

    </kv-flex>
  </kv-flex-item>
</template>

<script>
export default {
  name: 'KvListDottedItem',
  props: {
    leftShrink: { type: Number, default: 1 },
    rightShrink: { type: Number, default: 2 }
  }
}
</script>

<style lang="scss" scoped>
  .list-dotted-item, .list-dotted-item-flex, .list-dotted-item-left {
    background: inherit;
  }

  .list-dotted-item-left-item {
    position: relative;
    background: inherit;
    z-index: 1;
    padding-right: 5px;
    display: inline-block;
  }

  .list-dotted-item-left {
    position: relative;
  }

  .list-dotted-item-left::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin-top: .85em;
    margin-right: 5px;
    height: 5px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAAAAAA+i0toAAAAAnRSTlMA/1uRIrUAAAAMSURBVHheY7j1/z8ABY8C2UtBe8oAAAAASUVORK5CYII=) 0 0 repeat-x;
  }
</style>
