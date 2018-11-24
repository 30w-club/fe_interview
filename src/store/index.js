import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subject: {
      title: {},
      desc: []
    },
    grades: []
  },
  mutations: {
    setSubject (state, subject) {
      state.subject = {...subject}
    },
    setGrades (state, grades) {
      state.grades = [...grades]
    }
  }
})
