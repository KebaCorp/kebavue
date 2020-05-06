<template>
  <kv-flex class="kv-table-pagination">
    <kv-flex-item
      v-for="page in pages"
      :key="page"
      v-on="$listeners"
      @click="onChange"
      class="kv-table-pagination-item"
    >
      <span :style="{ fontWeight: page === currentPage ? 'bold' : '' }">
        {{ page + 1 }}
      </span>
    </kv-flex-item>
  </kv-flex>
</template>

<script>
export default {
  name: 'KvPagination',
  props: {
    count: { type: Number, default: 0 },
    limit: { type: Number, default: 15 },
    offset: { type: Number, default: 0 }
  },
  computed: {
    pages () {
      return this.limit ? Math.ceil(this.count / this.limit) : 0
    },
    currentPage () {
      return this.limit ? Math.floor(this.offset / this.limit) : 0
    }
  },
  methods: {
    onChange () {
      this.$emit('change', {
        count: this.count,
        limit: this.limit,
        offset: this.offset
      })
    }
  }
}
</script>

<style scoped>

</style>
