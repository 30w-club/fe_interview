<template lang="pug">
  .create
    my-header
    .title
      select(v-model='titleType')
        option(v-for='type in types') {{type}}
      textarea(v-model='titleVal' placeholder='Title')
    .desc
      .desc_item(v-for='item in desc')
        select(v-model='item.type')
          option(v-for='type in types') {{type}}
        textarea(placeholder='Desc' v-model="item.val")
      .add
        .fa.fa-plus(@click="addDesc")
    .confirm(@click="addItem")
      .confirm_main
        span Confirm
        i.fa.fa-check
</template>

<script>
import types from '../bank/TYPES'
import MyHeader from './common/MyHeader'

export default {
  name: 'Create',
  components: {
    MyHeader
  },
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
        if (resp.target) this.$router.push({name: 'Home'})
      }
    },
    addDesc () {
      this.desc.push({
        type: types.plain,
        val: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.create {
  .home {
    display: flex;
    justify-content: flex-start;
    .fa {
      cursor: pointer;
    }
  }
  select {
    border: none;
    color: rgb(153, 153, 153);
  }
  textarea {
    border: 1px solid rgb(224, 224, 224);
    border-radius: 5px;
    height: 18px;
    width: 300px;
    line-height: 24px;
    height: 24px;
    margin-left: 5px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .desc {
    margin-top: 20px;
    .desc_item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
    }
  }
  .add {
    margin-top: 10px;
    .fa {
      color: #ddd;
      cursor: pointer;
    }
  }
  .confirm {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    .confirm_main {
      cursor: pointer;
      font-weight: bold;
      .fa {
        margin-left: 5px;
        color: rgb(155, 69, 69);
      }
    }
  }
}
</style>
