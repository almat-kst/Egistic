<template>
  <div class="filter">
    <div class="filter_inner">

      <div class="filter_main">
        <h1 class="filter_title">Фильтр</h1>
        <a class="filter_reset" href="#" @click="resetData()">Сбросить</a>
      </div>

      <div class="filter_select_1">
        <h2 class="filter_subtitle">Местоположение - {{cityOption}}</h2>
        <select class="filter_select" name="" id="" v-model="cityOption">
          <option v-for="city in getCities" :key="city" :value="city.id" >{{city.city}}</option>
        </select>
      </div>

      <div class="filter_select_2">
        <h2 class="filter_subtitle">График работы - {{timeOption}}</h2>
        <select class="filter_select" name="" id="" v-model="timeOption">
          <option v-for="time in getTimeWorks" :key="time" :value="time.id">{{time.time_work}}</option>
        </select>
      </div>

      <div class="filter_salary">
        <h2 class="filter_subtitle">Заработная плата</h2>
        <div class="filter_inputs">
          <input class="filter_input" type="number" placeholder="от" v-model="salaryOption">
          <input class="filter_input" type="number" placeholder="до">
        </div>
      </div>

      <div class="filter_info">
        <h2 class="filter_subtitle">Дополнительно</h2>
        <div class="filter_checkboxs" v-for="schedule in getScheduleTimes" :key="schedule">
          <input type="checkbox" v-model="scheduleOption">
          <p class="checkbox_info">{{schedule.schedule}}</p>
        </div>
      </div>

      <button class="filter_button" @click.prevent="useButton">Применить</button>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default{
  name: 'MainFilter',
  data: () => ({
    cityOption: '', // Костанай
    timeOption: '', // вахтовый метод
    results: {},
  }),
  mounted(){
    this.actionScheduleTime()
    this.actionTimeWorks()
    this.actionCities()
  },
  computed: {
    ...mapGetters(['getScheduleTimes','getTimeWorks', 'getCities']),
  },
  methods: {
    ...mapActions(['actionScheduleTime', 'actionTimeWorks', 'actionCities', 'actionGetResultFilter']),
    useButton(){
      const data = {
        cityOption: this.cityOption,
        timeOption: this.timeOption
      }
      console.log(data)
      this.actionGetResultFilter({data})
    },
    resetData(){
      // this.scheduleOption = ''
      this.filterData.timeOption = ''
      this.filterData.cityOption = ''
    }
  },
}

</script>

<style scoped>
/*<script>
import axios from 'axios'
// import {mapGetters, mapActions}   from 'vuex'

export default {
  name: 'MainFilter',
  data: () => ({
    workers: {},
    workerDetail: {
      scheduleTimes: [],
      timeWorks: [],
      cities: []
    },
    scheduleOption: '',
    timeOption: '',
    cityOption: '',
    salaryOption: '',
  }),
  mounted(){
    this.getTimeWork()
    this.getCity()
    this.getSchedule()
    // this.getFilterData()
  },
  methods: {
    getTimeWork(){
      axios
      .get('worker1/schedule_times/')
      .then(response => this.workerDetail.scheduleTimes = response.data)
      .catch(error => console.log(error))
    },
    getCity(){
      axios
      .get('worker1/cities/')
      // .then(response => console.log(response.data))
      .then(response => this.workerDetail.cities = response.data)
      .catch(error => console.log(error))
    },
    getSchedule(){
      axios
      .get('worker1/time_works/')
      .then(response => this.workerDetail.timeWorks = response.data)
      .catch(error => console.log(error))
    },
    // ...mapActions(['getFilterData']),
    useButton(){
      // console.log(1)
      axios
      .get(`worker1/resume_list/?city=${this.cityOption}&schedule=${this.timeOption}&time_work=&salary=${this.salaryOption}`)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
    resetData(){
      this.scheduleOption = ''
      this.timeOption = ''
      this.cityOption = ''
      this.salaryOption = null
    }
  },
  computed:{
    // filterData(){
    //   mapGetters['getFilterWorks']
    // }
  }
}
</script>*/
/**Filter */
.filter{
  width: 325px;
  height: 444px;
  left: 32px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(171, 174, 163, 0.1);
  border-radius: 6px;
}

.filter_inner{
  padding: 15px 16px 31px 16px;
}

.filter_main{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.filter_title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
}

.filter_reset{
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: rgba(28, 28, 28, 0.7);
}

.filter_select_1{
  margin-bottom: 8px;
}

.filter_select_2{
  margin-bottom: 12px;
}

.filter_subtitle{
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 2px;
}

.filter_select{
  width: 292px;
  height: 40px;
  left: 16px;
  top: 72px;

  background: #F6F7F3;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 10px;
}

.filter_inputs{
  display: flex;
  align-items: center;
}

.filter_input{
  width: 138px;
  height: 40px;
  margin-bottom: 10px;

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 16px;
  padding-left: 15px;
  outline: none;
}

.filter_input:last-child{
  margin-right: 0px;
}

.filter_info{
  margin-bottom: 25px;
}

.filter_checkboxs{
  display: flex;
  align-items: center;
}

.checkbox{
  width: 20px;
  height: 20px;
  left: 16px;
  top: 294px;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 4px;
}

.checkbox_info{
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #1C1C1C;
  margin-left: 10px;
  cursor: pointer;
}

.filter_button{
  width: 292px;
  height: 40px;

  background: #4B970F;
  border: 1px solid #4B970F;
  box-sizing: border-box;
  border-radius: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  cursor: pointer;
}
</style>