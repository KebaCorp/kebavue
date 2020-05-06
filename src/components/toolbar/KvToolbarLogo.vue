<template>
  <kv-toolbar-item class="kv-toolbar-logo">
    <kv-flex>

      <!--Text-->
      <kv-flex-item
        v-if="text"
        align-self="stretch"
        class="kv-toolbar-logo-text"
      >
        <router-link :to="to">
          <span
            v-on="$listeners"
            v-bind="$attrs"
          >
            {{ text }}
          </span>
        </router-link>
      </kv-flex-item>

      <!--Image-->
      <kv-flex-item
        v-if="image"
        align-self="stretch"
        class="kv-toolbar-logo-image"
      >
        <router-link :to="to">
          <img
            :src="image"
            alt=""
            v-on="$listeners"
            v-bind="$attrs"
          >
        </router-link>
      </kv-flex-item>

    </kv-flex>
  </kv-toolbar-item>
</template>

<script>
import KvToolbarItem from './KvToolbarItem'
import KvFlex from '../flex/KvFlex'
import KvFlexItem from '../flex/KvFlexItem'

export default {
  name: 'KvToolbarLogo',
  inheritAttrs: false,
  components: {
    KvFlexItem,
    KvToolbarItem,
    KvFlex
  },
  props: {
    to: { default: null },
    text: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
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
