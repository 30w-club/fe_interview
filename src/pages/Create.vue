<template lang="pug">
  .create
    .home(@click="goToHome") Home
    .title
      select(v-model='titleType')
        option(v-for='type in types') {{type}}
      input(type="text" v-model='titleVal' placeholder='Title')
    .desc
      .desc_item(v-for='item in desc')
        select(v-model='item.type')
          option(v-for='type in types') {{type}}
        textarea(placeholder='Desc' v-model="item.val")
      .add(@click="addDesc") +
    .click(@click="addItem") add
</template>

<script>
import types from '../bank/TYPES'

export default {
  name: 'Create',
  data () {
    return {
      titleVal: '',
      titleType: types.plain,
      types: {},
      desc: [
        {
          type: types.plain,
          val: ''
        }
      ]
    }
  },
  created () {
    this.types = {...types}
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    async addItem () {
      let bankItem = {
        title: {
          type: this.titleType,
          val: this.titleVal
        },
        desc: [...this.desc]
      }
      const desc = this.desc
        .filter(item => item.val)
        .map(item => ({type: item.type, val: item.val}))
      bankItem.desc = [...desc]
      if (bankItem.title.val && bankItem.desc[0].val) {
        const resp = await this.$idb.add(bankItem)
        console.log(resp)
      }
    },
    addDesc () {
      this.desc.push({
        type: types.plain,
        val: ''
      })
    },
    goToHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.create {
  .desc {
    .desc_item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
