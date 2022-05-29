import axios from 'axios'

export default {
  getters: {
    getEmployers(state){
      return state.employers
    },
    getDetailVakansi(state){
      return state.detailVakansi
    }
  },
  state: {
    employers: {},
    detailVakansi: {}
  },
  mutations: {
    GET_EMPLOYERS(state, payload){
      state.employers = payload
    },
    GET_DETAIL_VAKANSI(state, payload){
      state.detailVakansi = payload
    }
  },
  actions: {
    async actionGetPages(context, page=1){
      await axios
      .get(`employer1/vakansi_list/?page=${page}`)//&search=${query}
      .then(response => {
        const data = response.data.results
        context.commit('GET_EMPLOYERS', data)
      })
      .catch(err => console.log(err))
    },

    async actionGetSearch(context, query=''){
      await axios
      .get(`employer1/vakansi_list/?search=${query}`)//&page=${page}
      .then(response => {
        const data = response.data.results
        context.commit('GET_EMPLOYERS', data)
      })
      .catch(err => console.log(err))
    },

    async actionDetailVakansi(context, vakansiId){
      await axios
      .get(`employer1/vakansi_detail/${vakansiId}/`)
      .then(response => {
        const data = response.data
        console.log(data)
        context.commit('GET_DETAIL_VAKANSI', data)
      })
      .catch(err => console.log(err))
    }
  }
}