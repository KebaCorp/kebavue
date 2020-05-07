<template>
  <kv-flex
    class="kv-table-pagination"
    :wrap="wrap"
  >
    <kv-flex-item
      v-for="(page, index) in pages"
      :key="index"
      v-on="$listeners"
      width="auto"
      class="kv-table-pagination-item"
    >
      <div
        @click="page.disabled ? '' : onChange(page)"
        class="kv-table-pagination-page"
        :class="{ [page.class]: true, 'kv-table-pagination-page-disabled': page.disabled }"
        :style="{
          background: page.disabled ? $kebavue.secondaryDisabled : (page.isActivePage ? $kebavue.primary : $kebavue.secondary),
          color: page.disabled ? $kebavue.secondaryTextDisabled : (page.isActivePage ? $kebavue.primaryText : $kebavue.secondaryText),
          cursor: page.disabled ? 'auto' : 'pointer'
        }"
      >
        {{ page.text }}
      </div>
    </kv-flex-item>
  </kv-flex>
</template>

<script>
export default {
  name: 'KvPagination',
  props: {
    count: { type: Number, default: 0 },
    limit: { type: Number, default: 15 },
    activeClass: { type: String, default: 'kv-table-pagination-item-active' },
    maxPages: { type: Number, default: 10 },
    wrap: { type: Boolean, default: true }
  },
  data: () => ({
    offset: 0,
    pages: []
  }),
  methods: {
    onChange ({ value }) {
      this.offset = Math.floor(value * this.limit)
      this.setPages()

      this.$emit('change', {
        count: this.count,
        limit: this.limit,
        offset: this.offset
      })
    },
    setPages () {
      const pagesNumber = this.limit ? Math.ceil(this.count / this.limit) : 0
      const currentPage = this.limit ? Math.floor(this.offset / this.limit) : 0
      const maxPages = this.maxPages - 1
      const halfOfMaxPages = Math.floor(maxPages / 2)
      const pages = []

      // Set page start
      let start = 0
      if (currentPage > halfOfMaxPages) {
        start = currentPage - halfOfMaxPages
      }
      if ((start + maxPages) > pagesNumber) {
        start = pagesNumber - maxPages
      }
      if (start < 0) {
        start = 0
      }

      // Set page end
      let end = pagesNumber
      if ((start + maxPages) < pagesNumber) {
        end = start + maxPages
      }

      for (let p = start; p <= end; p++) {
        const isActive = p === currentPage
        pages.push({
          text: p + 1,
          value: p,
          isActivePage: isActive,
          disabled: false,
          isPage: true,
          class: isActive ? 'kv-table-pagination-item-active' : ''
        })
      }

      const startButton = {
        text: '<<',
        value: 0,
        disabled: true,
        isPage: false,
        class: 'kv-table-pagination-start-button'
      }

      const leftButton = {
        text: '<',
        value: ((currentPage - 1) > 0) ? currentPage - 1 : 0,
        disabled: true,
        isPage: false,
        class: ''
      }

      const rightButton = {
        text: '>',
        value: ((currentPage + 1) <= pagesNumber) ? currentPage + 1 : pagesNumber,
        disabled: true,
        isPage: false,
        class: ''
      }

      const endButton = {
        text: '>>',
        value: pagesNumber,
        disabled: true,
        isPage: false,
        class: 'kv-table-pagination-end-button'
      }

      if (currentPage > 0) {
        startButton.disabled = false
        leftButton.disabled = false
      }

      if (currentPage < pagesNumber) {
        rightButton.disabled = false
        endButton.disabled = false
      }

      pages.unshift(leftButton)
      pages.unshift(startButton)
      pages.push(rightButton)
      pages.push(endButton)

      this.pages = pages
    }
  },
  mounted () {
    this.setPages()
  }
}
</script>

<style lang="scss" scoped>
  .kv-table-pagination-page {
    text-align: center;
    padding: 10px 10px;
    min-width: 25px;
    border-right: 1px solid white;
    cursor: pointer;
    user-select: none;

    &:active {
      -webkit-box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
      -moz-box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .kv-table-pagination-item-active {
    font-weight: bold;
    z-index: 100;
    -webkit-box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .kv-table-pagination-start-button {
    border-radius: 5px 0 0 5px;
  }

  .kv-table-pagination-end-button {
    border-radius: 0 5px 5px 0;
  }
</style>
