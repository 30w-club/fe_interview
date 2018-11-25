<template lang="pug">
  .my_header
    <router-link to="/">
      .fa.fa-home
    </router-link>
    <router-link to="/create">
      .fa.fa-inbox
    </router-link>
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
  .router-link-exact-active {
    .fa {
      color: rgb(44, 44, 44);
    }
  }
  .fa {
    cursor: pointer;
    color: rgb(175, 175, 175);
  }
}
</style>
