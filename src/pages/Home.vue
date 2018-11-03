<template lang="pug">
  .home_container
    .title {{ title }}
    .desc {{ desc }}
    .grade
      .grade_item(@click="clickGrade(0)") 0
      .grade_item(@click="clickGrade(1)") 1
      .grade_item(@click="clickGrade(2)") 2
      .grade_item(@click="clickGrade(3)") 3
</template>

<script>
import { questions } from '../bank'

export default {
  name: 'Home',
  data () {
    return {
      title: '',
      desc: '',
      randomId: ''
    }
  },
  created () {
    this.getQuestion()
  },
  methods: {
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    getIndexArr () {
      const gradeStore = JSON.parse(this.$cookie.get('grade_store')) || {}
      console.log('TCL: getIndexArr -> gradeStore', gradeStore)

      let indexArr = questions.map(question => question.id)
      for (let questionId in gradeStore) {
        const grade = gradeStore[questionId]
        for (let i = 0; i < grade; i++) {
          indexArr.push(parseInt(questionId))
        }
      }
      console.log('TCL: getIndexArr -> indexArr', indexArr)
      return indexArr
    },
    getQuestion () {
      const indexArr = this.getIndexArr()
      const randomIndex = this.getRandomInt(0, questions.length)
      this.randomId = indexArr[randomIndex]

      const question = questions.find(question => question.id === this.randomId)
      this.title = question.title
      this.desc = question.desc
    },
    clickGrade (grade) {
      console.log(grade)
      const originalGradeStore = JSON.parse(this.$cookie.get('grade_store'))
      let gradeStore = originalGradeStore || {}
      gradeStore[this.randomId] = grade
      this.$cookie.set('grade_store', JSON.stringify(gradeStore))
      this.getQuestion()
    }
  }
}
</script>

<style lang="scss" scoped>
.home_container {
  .grade {
    display: flex;
    justify-content: space-around;
    .grade_item {
      cursor: pointer;
    }
  }
}
</style>
