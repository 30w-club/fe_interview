<template lang="pug">
  .desc_container
    ul.desc
      li.desc_item(v-for='item in val' :key="item.val")
        pre(v-highlightjs='')
          code(:class='item.type') {{item.val}}
</template>

<script>
export default {
  name: 'MyDesc',
  props: {
    val: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.desc_container {
  .desc {
    text-align: left;
    margin: 24px 0;
    padding: 0;
    .desc_item {
      margin-bottom: 10px;
      list-style: none;
    }
  }
}
</style>
