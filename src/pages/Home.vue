<template lang="pug">
  .home_container
    .status
      .bar
        .grade_stage(v-for='i in gradeLength' :class="'stage_' + (i - 1)" :style='{ width: (stage[i - 1] || 0)/stageLength*100 + "%" }')
    .title
      pre(v-highlightjs='' :key="titleVal")
        code(:class='titleType') {{titleVal}}
    my-desc(:val="desc")
    .grade
      .grade_item(v-for="i in gradeLength" @click="clickGrade(i - 1)" :class='{ active: grade === (i - 1)}') {{i - 1}}
</template>

<script>
import { questions } from '../bank'
import MyDesc from './home/Desc'
import countBy from 'lodash.countby'

export default {
  name: 'Home',
  components: {
    MyDesc
  },
  data () {
    return {
      title: {},
      desc: '',
      questionIndex: '',
      grade: 0,
      gradeLength: 6,
      gradeVals: [],
      stage: {}
    }
  },
  computed: {
    stageLength () {
      return this.gradeVals.length
    },
    titleType () {
      return this.title.type
    },
    titleVal () {
      return this.title.val
    }
  },
  created () {
    console.log('TCL: created -> questions.length', questions.length)
    this.getQuestion()
    this.initStatus()
  },
  methods: {
    initStatus () {
      const gradeStore = this.getGradeStore()
      this.gradeVals = Object.values(gradeStore)
      this.stage = countBy(this.gradeVals)
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    getGradeStore () {
      return JSON.parse(this.$cookie.get('grade_store')) || {}
    },
    getIndexArr () {
      const gradeStore = this.getGradeStore()
      console.log('TCL: getIndexArr -> gradeStore', gradeStore)

      let indexArr = questions.map((question, idx) => idx)
      for (let questionIndex in gradeStore) {
        const grade = gradeStore[questionIndex]
        for (let i = 0; i < grade; i++) {
          indexArr.push(parseInt(questionIndex))
        }
      }
      console.log('TCL: getIndexArr -> indexArr', indexArr)
      return indexArr
    },
    getQuestion () {
      const gradeStore = this.getGradeStore()
      const indexArr = this.getIndexArr()
      const randomPos = this.getRandomInt(0, indexArr.length)
      this.questionIndex = indexArr[randomPos]

      const question = questions.find((question, idx) => idx === this.questionIndex)
      console.log('TCL: getQuestion -> question', question)
      this.title = {...question.title}
      this.desc = question.desc
      this.grade = gradeStore[this.questionIndex]
    },
    clickGrade (grade) {
      console.log(grade)
      const originalGradeStore = this.getGradeStore()
      let gradeStore = originalGradeStore || {}
      gradeStore[this.questionIndex] = grade
      this.$cookie.set('grade_store', JSON.stringify(gradeStore))
      this.getQuestion()
      this.initStatus()
    }
  }
}
</script>

<style lang="scss" scoped>
.home_container {
  padding: 20px;
  .status {
    .bar {
      display: flex;
      border-radius: 100px;
      .grade_stage {
        height: 3px;
        &.stage {
          &_0,
          &_1 {
            background-color: rgb(30, 167, 30);
          }
          &_2 {
            background-color: rgb(175, 185, 31);
          }
          &_3 {
            background-color: rgb(199, 149, 92);
          }
          &_4,
          &_5 {
            background-color: rgb(202, 77, 46);
          }
        }
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .grade {
    display: flex;
    justify-content: space-around;
    .grade_item {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 100px;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        background-color: rgb(175, 175, 175);
      }
    }
  }
}
</style>
