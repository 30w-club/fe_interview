import vueStore from '../store'

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

// const employeeData = [
// ]
console.log('connect db')
var db
var request = window.indexedDB.open('bank', 2)

request.onerror = function (event) {
  console.log('error: ')
}

request.onsuccess = function (event) {
  db = request.result
  console.log('success: ' + db)
}

request.onupgradeneeded = function (event) {
  var db = event.target.result
  let subjectStore
  if (!db.objectStoreNames.contains('subject')) {
    subjectStore = db.createObjectStore('subject', { autoIncrement: true })
  }
  subjectStore.createIndex('grade', 'grade', { unique: false })

  let gradeStore
  if (!db.objectStoreNames.contains('grade')) {
    gradeStore = db.createObjectStore('grade', { keyPath: 'subjectKey' })
  }
  gradeStore.createIndex('grade', 'grade', { unique: false })
}

const add = item => {
  return new Promise((resolve, reject) => {
    let request = db.transaction(['subject'], 'readwrite')
      .objectStore('subject')
      .add(item)
    request.onsuccess = function (event) {
      resolve(event)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}

const updateGrade = (subjectKey, grade) => {
  const targetGrade = { subjectKey, val: grade }
  return new Promise((resolve, reject) => {
    let store = db.transaction(['grade'], 'readwrite').objectStore('grade')
    store.get(subjectKey).onsuccess = event => {
      const result = event.target.result
      if (!result) {
        store.add(targetGrade).onsuccess = event => {
          resolve(event)
        }
      } else {
        store.put(targetGrade).onsuccess = event => {
          resolve(event)
        }
      }
    }
  })
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const getRandomSubjectKey = () => {
  let store = db.transaction('subject').objectStore('subject')

  return new Promise((resolve, reject) => {
    // Get all keys
    store.getAllKeys().onsuccess = event => {
      let keys = event.target.result
      if (keys && keys.length) {
        let gradeStore = db.transaction('grade').objectStore('grade')

        // Get all grades
        gradeStore.getAll().onsuccess = gradeEvent => {
          const grades = gradeEvent.target.result
          vueStore.commit('setGrades', grades)

          grades.forEach(grade => {
            let gradeVal = parseInt(grade.val)
            while (gradeVal--) {
              keys.push(parseInt(grade.subjectKey))
            }
          })
          const randomIndex = getRandomInt(0, keys.length)
          const targetSubjectKey = keys[randomIndex]
          let targetSubjectGrade = grades.find(grade => grade.subjectKey === targetSubjectKey)
          targetSubjectGrade = targetSubjectGrade ? targetSubjectGrade.val : 0
          resolve({targetSubjectKey, targetSubjectGrade})
        }
      } else {
        reject(new Error('No keys.'))
      }
    }
  })
}

const readSubject = (key, grade) => {
  let store = db.transaction('subject').objectStore('subject')
  store.get(key).onsuccess = event => {
    let subject = event.target.result
    if (subject) {
      subject.key = key
      subject.grade = grade
      vueStore.commit('setSubject', subject)
    }
  }
}

const getSubject = () => {
  if (db) {
    getRandomSubjectKey().then(({ targetSubjectKey: key, targetSubjectGrade: grade }) => {
      readSubject(key, grade)
    })
  } else {
    setTimeout(() => {
      console.log('settimeout read')
      getSubject()
    }, 200)
  }
}

let idb = {}
idb.install = function (Vue, options) {
  console.log('idb install')
  Vue.prototype.$idb = {
    add,
    getSubject,
    updateGrade
  }
}
export default idb
