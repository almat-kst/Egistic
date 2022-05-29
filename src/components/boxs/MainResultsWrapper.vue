<template>
  <div class="advertise_wrapper">
    <div class="advertise_inner">

      <div class="advertise_main">
        <div class="advertise_left">
          <h2 class="advertise_title" @click="toDetailPage(vakansi.id)">{{vakansi.title}}</h2>
          <p class="advertise_price">от {{vakansi.salary_start}} до {{vakansi.salary_end}}</p>
        </div>
        <div class="advertise_date">{{vakansi.created}}</div>
      </div>

      <div class="advertise_place">
        <img src="@/assets/result/city1.png" alt="">
        <h2 class="advertise_subtitle">{{vakansi.city.city}}</h2>
      </div>

      <div class="advertise_place two">
        <img src="@/assets/result/company.png" alt="">
        <h2 class="advertise_subtitle">{{vakansi.company_name}}</h2>
      </div>

      <div class="advertise_results">
        <a class="advertise_result" href="#">
          <img class="advertise_img" src="@/assets/result/vek.png" alt="">
          <p class="advertise_text">{{vakansi.schedule.schedule}}</p>
        </a>
        <a class="advertise_result" href="#">
          <img class="advertise_img"  src="@/assets/result/vek.png" alt="">
          <p class="advertise_text">{{vakansi.time_work.time_work}}</p>
        </a>
        <a class="advertise_result" href="#">
          <img class="advertise_img"  src="@/assets/result/vek.png" alt="">
          <p class="advertise_text">{{vakansi.travel.removal}}</p>
        </a>
      </div>

      <p class="advertise_info">
        {{vakansi.obligations}}
      </p>

      <div class="advertise_buttons">
        <button class="advertise_button" >Откликнуться</button>
        <a class="advertise_save" href="">
          <img class="save_icon" src="@/assets/result/zak.png" alt="">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'MainResultsWrapper',
  props: {
    vakansi: Object
  },
  methods: {
    ...mapActions(['actionDetailVakansi']),
    toDetailPage(data){
      this.actionDetailVakansi(data)
      this.$router.push('/search_page')
    }
  }
}
</script>

<style scoped>
.advertise_wrapper{
  background: #FFFFFF;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 15px;
}

.advertise_wrapper:last-child{
  margin-bottom: 0px;
}

.advertise_inner{
  padding: 20px;
}

.advertise_left{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.advertise_title{
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4B970F;
}

.advertise_price{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #1C1C1C;
}

.advertise_date{
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #ABAEA3;
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
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 4px 8px;
  background: rgba(255, 199, 0, 0.5);
  border-radius: 6px;

  /* width: 123px;
  height: 24px; */
}

.advertise_text{
  margin-left: 6px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #1C1C1C;
}


.advertise_button{
  width: 175px;
  height: 40px;
  background: #4B970F;
  border-radius: 6px;
  color: #fff;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-right: 15px;
}

.advertise_save{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid #F6F7F3;
  position: relative;
  background-color: #F6F7F3;
}

.advertise_info{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #666666;
  margin-bottom: 15px;
}

.advertise_buttons{
  display: flex;
  align-items: center;
}

.save_icon{
  position: absolute;
  top: 25%;
  left: 35%;
}

</style>