<template>
  <div class="worker_wrapper">
    <img class="worker_logo" src="@/assets/detail_page/portfolio.png" alt="">

    <div class="worker_left">
      <div class="worker_to_detail" @click.prevent="goToDetail(worker.id)">
        <h2 class="worker_title" >{{worker.name}} {{worker.last_name}}</h2>
        <h2 class="worker_fakansi">{{worker.title}}</h2>
      </div>


      <div class="advertise_place">
        <img src="@/assets/result/city1.png" alt="">
        <!-- <img :src="worker.get_image" alt=""> -->
        <h2 class="advertise_subtitle">{{worker.city.city}}</h2>
      </div>

      <div class="advertise_place two">
        <img src="@/assets/result/company.png" alt="">
        <h2 class="advertise_subtitle">{{worker.salary}}</h2>
      </div>

      <div class="advertise_results">
        <a class="advertise_result" href="#">
          <img class="advertise_img" src="@/assets/result/vek.png" alt="">
          <p class="advertise_text">{{worker.time_work.time_work}}</p>
        </a>
        <a class="advertise_result" href="#">
          <img class="advertise_img"  src="@/assets/result/vek.png" alt="">
          <p class="advertise_text">{{worker.schedule.schedule}}</p>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'WorkerSearchBox',
  props: {
    worker: Object,
    workerValue: Array,
    query: String
  },
  data: () => ({
    workerId: null
  }),
  // mounted(){
  //   this.getDetailWorker()
  // },
  methods: {
    ...mapActions(['getDetailWorker']),
    toWorkerDetail(worker){
      console.log(worker)
      this.$emit('detailPeople', worker)
    },
    goToDetail(e){
      this.workerId = e
      this.getDetailWorker(e)
      this.$router.push('/detail_page')
    }
  },
}
</script>

<style scoped>
/*mounted(){
  allShow: {
    console.log(this.workerValue, 'inside')
    console.log(this.worker, 'box-inside')
  }
}*/
.worker_wrapper{
  height: 180px;
  display: flex;
  align-items: center;
  border: 1px solid #E0E2D8;
  border-radius: 6px 0px 0px 6px;
  margin-bottom: 15px;
  /* box-shadow: 0px -2px 2px rgba(171, 174, 163, 0.1); */
}

.worker_wrapper:last-child{
  margin-bottom: 0px;
}

.worker_logo{
  width: 180px;
  height: 180px;
}

.worker_left{
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.worker_title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #33333D;
  margin-bottom: 10px;
}

.worker_fakansi{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #4B970F;
  margin-bottom: 14px;
}

.advertise_place{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.advertise_place.two{
  margin-bottom: 15px;
}

.advertise_subtitle{
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  margin-left: 7px;
}

.advertise_results{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.advertise_result{
  justify-content: center;
  width: 170px;
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  background: rgba(255, 199, 0, 0.5);
  border-radius: 6px;
}

.advertise_text{
  margin-left: 6px;

  color: #1C1C1C;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}
</style>