<template lang="pug">
  .home_container
    my-header
    .status
      .bar
        .grade_stage(v-for='i in gradeLength' :class="'stage_' + (i - 1)" :style='{ width: (stage[i - 1] || 0)/gradeValArr.length*100 + "%" }')
    .title
      pre(v-highlightjs='' :key="subject.title.val")
        code(:class='subject.title.type') {{subject.title.val}}
    my-desc(:val="subject.desc")
    .grade(v-if='!noSubject')
      .grade_item(v-for="i in gradeLength" @click="clickGrade(i - 1)" :class='{ active: subject.grade === (i - 1)}') {{i - 1}}
    .no_subject(v-if='noSubject')
      span  Found No Subject, 
      span.create_one(@click="goToCreate")  Create One
</template>

<script>
import MyDesc from './home/Desc'
import countBy from 'lodash.countby'
import MyHeader from './common/MyHeader'

export default {
  name: 'Home',
  components: {
    MyDesc,
    MyHeader
  },
  data () {
    return {
      gradeLength: 6
    }
  },
  computed: {
    subject () {
      return this.$store.state.subject
    },
    noSubject () {
      return this.subject.desc.length === 0
    },
    grades () {
      return this.$store.state.grades
    },
    gradeValArr () {
      return this.grades.map(grade => grade.val)
    },
    stage () {
      return countBy(this.gradeValArr)
    }
  },
  created () {
    this.$idb.getSubject()
  },
  methods: {
    clickGrade (grade) {
      this.$idb.updateGrade(this.subject.key, parseInt(grade))
        .then(() => {
          this.$idb.getSubject()
        })
    },
    goToCreate () {
      this.$router.push({ name: 'Create' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home_container {
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
  .no_subject {
    color: rgb(78, 78, 78);
    font-size: 16px;
    font-style: italic;
    .create_one {
      text-decoration: underline;
      color: rgb(0, 61, 97);
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
