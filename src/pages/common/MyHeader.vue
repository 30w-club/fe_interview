<template lang="pug">
  .my_header
    .fa.fa-home(@click="goTo('Home')")
    .fa.fa-inbox(@click="goTo('Create')")
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    goTo (routerName) {
      return this.$router.push({ name: routerName })
    }
  }
}
</script>

<style lang="scss" scoped>
.my_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px;
  .fa {
    cursor: pointer;
    color: rgb(122, 122, 122);
  }
}
</style>
