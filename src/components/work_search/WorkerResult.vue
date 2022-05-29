<template>
  <div class="result">
    <div class="result_inner">

      <div class="select_center">
        <div class="selects_left">
          <h1 class="result_title">Все специалисты ({{getCount}})</h1>

          <form @submit.prevent="submitForm">
            <a class="search_wrapper">
              <input class="search_result" type="text" v-model="query">
              <img class="search_img" src="@/assets/result/result-search.png" alt="">
            </a>
          </form>
        </div>

        <div class="select_right">
          <button class="select_right_button">Создать вакансию</button>
        </div>
      </div>

      <div class="selects_wrapper">
        <div class="select_top">
          <a class="result_select active" href="">ВСЕ</a>
          <a class="result_select" v-for="category in getCategory" :key="category.id" @click="selectCategory(category.id)">{{category.category}}</a>
        </div>

        <div class="select_bottom">
          <p class="select_text">Сортировать по:</p>
          <select class="select_date" name="" id="">
            <!-- <option value="">Дате публикации</option> -->
          </select>
        </div>
      </div>

      <div>{{filterData}}</div>
      <WorkerSearchBox
        v-for="worker in this.dataToShow"
        :key="worker"
        :worker="worker"
        :workerValue="workerValue"
      />

      <div class="pagination">
        <a href="#" @click.prevent="getPrevPage()">
          <img class="pag_page" src="@/assets/result/left.png" alt="">
        </a>
        <a class="pag_number" href="#">{{currentPage}}</a>
        <a href="#" @click.prevent="getNextPage()">
          <img class="pag_page" src="@/assets/result/right.png" alt="">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import WorkerSearchBox from '@/components/boxs/WorkerSearchBox'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'WorkerResult',
  components: {
    WorkerSearchBox
  },
  props: {
    filterData: Object,
  },
  data: () => ({
    currentPage: 1,
    query: '',
    results: {},
    category: '',
    // workerValue: {},
  }),
  mounted(){
    this.actionGetPages(this.currentPage)
    this.actionGetSearch(this.query)
    this.actionGetCategory()
    this.actionCountResume()
  },
  computed: {
    ...mapGetters(['getWorkers', 'getCategory', 'getCount', 'getResultFilter']),
    dataToShow(){
      if(this.filterData.cityOption !== undefined && this.filterData.timeOption !== undefined){
        return this.getResultFilter
        // this.getFilteredData(this.category, this.filterData.cityOption, this.filterData.timeOption)
      }
      return this.getWorkers
    },
    countAllResume(){

    }
  },
  methods: {
    ...mapActions(["actionGetPages", 'actionGetSearch', 'actionGetWorker', 'actionGetCategory', 'actionCountResume']),
    getPrevPage(){
      this.currentPage -= 1
      this.actionGetPages(this.currentPage)
    },
    getNextPage(){
      this.currentPage += 1
      this.actionGetPages(this.currentPage)
    },
    submitForm(){
      this.query = this.query
      this.actionGetSearch(this.query) // === this.$store.dispatch('actionGetSearch', this.query)
    },
    // async getFilteredData(category='',cityOption='', timeOption=''){
    //   await axios
    //   .get(`worker1/resume_list/?category=${category}&city=${cityOption}&time_work=${timeOption}`)
    //   .then(response => {
    //     console.log(response.data.results)
    //   })
    //   .catch(err => console.log(err))
    // },
    selectCategory(e){
      this.category = e
      this.getFilteredData(this.category)
    }
  },
}
</script>

<style scoped>
/*<script>
import axios from 'axios'
import WorkerSearchBox from '@/components/boxs/WorkerSearchBox'
// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'WorkerResult',
  components: {
    WorkerSearchBox
  },
  data: () => ({
    workers: {},
    currentPage: 1,
    query: '',
  }),
  mounted() {
    this.getWorkers()
    // this.$store.dispatch('fetchNewData')
    // this.fetchNewData(this.currentPage, this.filteredData())
   },
  computed: {
    // ...mapGetters(['filterData']),
    // workersNew(){
    //   return this.$store.getters.filterData
    // },
  },
  methods: {
    // ...mapActions(["fetchNewData"]),
    getPrevPage(){
      this.currentPage -= 1
      // this.fetchNewData(this.currentPage)
      this.getWorkers()
    },
    getNextPage(){
      this.currentPage += 1
      // this.fetchNewData(this.currentPage)
      this.getWorkers()
    },
    async getWorkers(){
      await axios
      .get(`worker1/resume_list/?page=${this.currentPage}&search=${this.query}`)
      .then(response => {
        this.workers = response.data.results
      })
      .catch(error => {
        console.log(error)
      })
    },
    submitForm(){
      // this.fetchNewData(this.currentPage, this.filteredData)
      // console.log(this.currentPage, this.query, this.filteredData)
      this.getWorkers()
    }
  },
}
</script>**/

/**result */
.result{
  width: 1000px;
  height: 1380px;
  margin-left: 26px;
  background: #FFFFFF;
  border-radius: 6px;
}

.result_inner{
  padding: 25px 20px 105px 20px; /**25px 20px 125px 20px */
}

.result_title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 25px;
}

.select_center{
  display: flex;
  justify-content: space-between;
}

.select_right_button{
  padding: 10px 35px;
  background: #4B970F;
  border-radius: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #FFFFFF;
}

.search_wrapper{
  display: flex;
  align-items: center;
  width: 500px;
  height: 40px;
  margin-bottom: 25px;
}

.search_result{
  width: 100%;
  height: 100%;

  background: #FFFFFF;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;

  padding-left: 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
}

.select_top{
  /* margin-bottom: 20px; */
  /* display: flex; */
}

.result_select{
  /* display: flex; */
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;

  padding: 8px 17px;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;

  margin-right: 15px;
  margin-bottom: 10px;
}

.result_select.active{
  text-transform: uppercase;
  color: #fff;
  background-color: #4B970F;
}

.select_bottom{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.select_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #808080;
  margin: 9px;
}

.select_date{
  width: 204px;
  height: 40px;
  padding: 10px;

  background: #F6F7F3;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px
}

.pagination{
  width: 100px;
  justify-content: space-between;
  display: flex;
  margin-top: 40px;
  align-items: center;
  margin-left: 400px;
}

.pag_number{
  background-color: #4B970F;
  color: #fff;
  border-radius: 100%;
  padding: 7px 12px 8px 12px;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}

.pag_page{
  padding: 6px 10px 6px 10px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px 1px rgba(171, 174, 163, 0.15);
  border-radius: 100%;
  border: 1px solid #fff;
}

.pag_page:hover{
  background-color: #F6F7F3;
  border: 1px solid #333333;
}
</style>