<template lang="pug">
  .create
    .click(@click="addItem") add
</template>

<script>
export default {
  name: 'Create',
  mounted () {
    console.log('mounted')
  },
  methods: {
    async addItem () {
      const resp = await this.$idb.add({
        title: {
          type: 'plain',
          val: 'test'
        },
        desc: [
          {
            type: 'plain',
            val: 'test'
          }
        ]
      })
      console.log(resp)
    }
  }
}
</script>
