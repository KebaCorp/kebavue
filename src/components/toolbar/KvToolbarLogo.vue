<template>
  <kv-toolbar-item class="kv-toolbar-logo">
    <kv-flex>

      <!--Text-->
      <kv-flex-item
        align-self="stretch"
        class="kv-toolbar-logo-text"
      >
        <router-link v-if="text" :to="to">
          <span v-bind="$attrs">{{ text }}</span>
        </router-link>
        <span v-else>{{ text }}</span>
      </kv-flex-item>

      <!--Image-->
      <kv-flex-item
        align-self="stretch"
        class="kv-toolbar-logo-image"
      >
        <router-link v-if="to" :to="to">
          <img :src="image" v-bind="$attrs">
        </router-link>
        <img v-else :src="image" alt="">
      </kv-flex-item>

    </kv-flex>
  </kv-toolbar-item>
</template>

<script>
import KvToolbarItem from '../toolbar/KvToolbarItem'
import KvFlex from '../flex/KvFlex'
import KvFlexItem from '../flex/KvFlexItem'

export default {
  name: 'KvToolbarLogo',
  components: {
    KvFlexItem,
    KvToolbarItem,
    KvFlex
  },
  inheritAttrs: false,
  props: {
    to: { default: null },
    text: { type: String, default: null },
    image: { type: String, default: null }
  }
}
</script>

<style lang="scss" scoped>
  .kv-toolbar-logo {
    height: inherit;

    div {
      height: inherit;
    }

    a {
      height: inherit;
      display: block;
      text-decoration: none;
    }

    img {
      box-sizing: border-box;
      padding: 10px;
      height: inherit;
    }
  }

  .kv-toolbar-logo-text {
  }

  .kv-toolbar-logo-image {
    height: inherit;
  }
</style>
