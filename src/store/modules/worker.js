import axios from 'axios'

export default {
  getters: {
    isAuth(state){
      return state.isAuthendticated
    },
    getCount(state){
      return state.count
    },
    getWorkers(state){
      return state.workers
    },
    getScheduleTimes(state){
      return state.scheduleTimes
    },
    getTimeWorks(state){
      return state.timeWorks
    },
    getCities(state){
      return state.cities
    },
    getResultFilter(state){
      return state.resultFilter
    },
    getHasExperience(state){
      return state.hasExperience
    },
    getDegree(state){
      return state.degree
    },
    getWorkerValue(state){
      console.log(state.workerValue, 'we are here')
      return state.workerValue
    },
    getCategory(state){
      return state.category
    },
    getWorkerDetail(state){
      return state.workerDetail
    },
    getGender(state){
      return state.gender
    },
    getFirstResume(state){
      return state.firstResume
    },
    getSecondResume(state){
      return state.secondResume
    },
    getEducationResume(state){
      return state.educationResume
    },
    getAboutWorkerResume(state){
      console.log(state.aboutWorkerResume)
      return state.aboutWorkerResume
    },
    getPublishResume(state){
      return state.publishResume
    }
  },
  state: {
    isAuthendticated: false,
    token: '',
    count: 0,
    workers: {},
    scheduleTimes: [],
    timeWorks: [],
    cities: [],
    // Worker Search get Filter
    resultFilter: [],
    hasExperience: [],
    degree: [],
    workerValue: {},
    category: {},
    workerDetail: {},
    gender: [],
    firstResume: [],
    secondResume: [],
    educationResume: [],
    aboutWorkerResume: [],
    publishResume: [],
  },
  mutations: {
    GET_TOKEN(state, payload){
      state.token = payload
    },
    GET_AUTH(state, payload){
      state.isAuthendticated = payload
    },
    GET_COUNT(state, payload){
      state.count = payload
    },
    GET_WORKERS(state, payload){
      state.workers = payload
    },
    GET_SCHEDULE_TIME(state, payload){
      state.scheduleTimes = payload
    },
    GET_TIME_WORKS(state, payload){
      state.timeWorks = payload
    },
    GET_CITIES(state, payload){
      state.cities = payload
    },
    // GET_RESULT_FILTER
    GET_RESULT_FILTER(state, payload){
      state.resultFilter.push(payload)
    },
    GET_HAS_EXPERIENCE(state, payload){
      state.hasExperience = payload
    },
    GET_DEGREE(state, payload){
      state.degree = payload
    },
    GET_WORKER_VALUE(state, payload){
      console.log(payload, 'get worker value')
      state.workerValue = payload
    },
    GET_CATEGORYS(state, payload){
      state.category = payload
    },
    GET_WORKER_DETAIL(state, payload){
      state.workerDetail = payload
    },
    GET_GENDER(state, payload){
      state.gender = payload
    },
    GET_FIRST_RESUME(state, payload){
      state.firstResume.push(payload)
    },
    GET_SECOND_RESUME(state, payload){
      state.secondResume.push(payload)
    },
    GET_EDUCATION_RESUME(state, payload){
      state.educationResume.push(payload)
    },
    RESUME_ABOUT_WORKER(state, payload){
      state.aboutWorkerResume.push(payload)
    },
    RESUME_PUBLISH(state, payload){
      state.publishResume.push(payload)
    }
  },
  actions: {
    async actionCountResume(context){
      await axios
      .get(`worker1/resume_list/`)
      .then(response => {
        const countOfResume = response.data.count
        context.commit('GET_COUNT', countOfResume)
      })
      .catch(err => console.log(err))
    },
    async actionGetPages(context, page=1){
      await axios
      .get(`worker1/resume_list/?page=${page}`)//&search=${query}
      .then(response => {
        // console.log(response.data.results, 'get')
        const data = response.data.results
        context.commit('GET_WORKERS', data)
      })
      .catch(err => console.log(err))
    },

    async actionGetSearch(context, query=''){
      await axios
      .get(`worker1/resume_list/?search=${query}`)//&page=${page}
      .then(response => {
        // console.log(response.data.results, 'search')
        const data = response.data.results
        context.commit('GET_WORKERS', data)
      })
      .catch(err => console.log(err))
    },

    async actionScheduleTime(context, schedule=''){
      await axios
      .get(`/worker1/schedule_times/?schedule=${schedule}`)
      .then(response => {
        const data = response.data
        context.commit('GET_SCHEDULE_TIME', data)
      })
      .catch(err => console.log(err))
    },

    async actionTimeWorks(context, idTimeWork=''){
      await axios
      .get(`/worker1/time_works/?id=${idTimeWork}`)
      .then(response => {
        // console.log(response.data)
        const data = response.data
        context.commit('GET_TIME_WORKS', data)
      })
      .catch(err => console.log(err))
    },

    async actionCities(context, idCity=''){
      await axios
      .get(`/worker1/cities/?id=${idCity}`)
      .then(response => {
        // console.log(response.data)
        const data = response.data
        context.commit('GET_CITIES', data)
      })
      .catch(err => console.log(err))
    },

    async actionGetResultFilter(context, data){
      // console.log(Object.values(data)[0].cityOption, '1')
      const city = Object.values(data)[0].cityOption
      const time = Object.values(data)[0].timeOption
      await axios
      .get(`worker1/resume_list/?city=${city}&time_work=${time}`)
      .then(response => {
        const data = response.data.results
        console.log(data)
        context.commit('GET_RESULT_FILTER', data)
      })
      .catch(err => console.log(err))

    },

    async actionDegree(context){
      await axios
      .get(`worker1/educations/`)
      .then(response => {
        const data = response.data
        context.commit(`GET_DEGREE`, data)
      })
    },

    actionGetWorker(context, data){
      console.log(data.data.results, 'also')
      context.commit('GET_WORKER_VALUE', data.data.results)
    },

    async actionGetCategory(context){
      await axios
      .get(`/worker1/category_list/`)
      .then(response => {
        const data = response.data
        context.commit('GET_CATEGORYS', data)
      })
      .catch(error => console.log(error))
    },

    async actionGetHasExperience(context){
      await axios
      .get(`worker1/has_experience/`)
      .then(response => {
        const data = response.data
        context.commit('GET_HAS_EXPERIENCE', data)
      })
      .catch(error => console.log(error))
    },

    async getDetailWorker(context, id){
      await axios
      .get(`worker1/resume_detail/${id}/`)
      .then(response => {
        const data = response.data
        console.log(data)
        context.commit('GET_WORKER_DETAIL', data)
      })
    },

    setToken(context, token){
      context.commit('GET_TOKEN', token)
      context.commit('GET_AUTH', true)
    },

    removeToken(context, token){
      context.commit('GET_TOKEN', token)
      context.commit('GET_AUTH', false)
    },

    actionGetGender(context){
      axios
      .get(`/worker1/genders/`)
      .then(response => {
        const data = response.data
        context.commit('GET_GENDER', data)
      })
    },

    actionFirstResume(context, data){
      context.commit('GET_FIRST_RESUME', data)
    },

    actionSecondResume(context, data){
      context.commit('GET_SECOND_RESUME', data)
    },

    actionEducationResume(context, data){
      context.commit('GET_EDUCATION_RESUME', data)
    },

    actionAboutWorkerResume(context, data){
      context.commit('RESUME_ABOUT_WORKER', data)
    },

    actionPublishResume(context, data){
      console.log(data, 'data publish')
      context.commit('RESUME_PUBLISH', data)
    }

  },
}

// initializerStore(state){
//   if(localStorage.getItem('token')){
//     state.token = localStorage.getItem('token')
//   } else {
//     state.token = ''
//     state.isAuthendticated = true
//   }
// },