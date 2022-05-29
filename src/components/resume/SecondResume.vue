<template>
  <div class="template">
    <div class="main">

      <h2 class="resume_title">Создание резюме</h2>
      <h3 class="resume_subtitle">Ваше резюме</h3>
      <h4 class="resume_subtext">Шанс рассмотрения резюме:</h4>

      <div class="just_empty"></div>
      <p class="resume_text">Укажите ваш опыт работы или причину его отсутствия </p>
      <div class="second_resume">
        <h1 class="resume_title">У вас есть опыт работы? *</h1>
        <div class="experience">
          <div class="experience_box" v-for="item in getHasExperience" :key="item">
            <input class="input_exper" type="radio" :value="item.has_experience" v-model="hasExperience">
            <label class="exper_text">{{item.has_experience}}</label>
          </div>
          <!-- <div class="experience_box">
            <input class="input_exper" type="radio">
            <a class="exper_text">Да</a>
          </div>
          <div class="experience_box">
            <input class="input_exper" type="radio">
            <a class="exper_text">Нет</a>
          </div> -->
        </div>
      </div>

      <div class="resume_buttons">
        <button class="button" @click="showModal">ОТМЕНА</button>
        <button class="button active" @click.prevent="thirdResume">ДАЛЕЕ</button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'SecondResume',
  data: () => ({
    hasExperience: ''
  }),
  computed: {
    ...mapGetters(['getHasExperience'])
  },
  mounted(){
    this.actionGetHasExperience()
  },
  methods: {
    ...mapActions(['actionGetHasExperience', 'actionSecondResume']),
    thirdResume(){
      const data = {
        hasExperience: this.hasExperience
      }
      this.actionSecondResume(data)
      this.$router.push({name: 'EducationResume'})
    }
  }
}
</script>

<style scoped>

.template{
  height: 600px;
  background: #fff;
  padding: 40px 147px;
}

.main{
  position: relative;
}

.resume_title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 40px;
}

.resume_subtitle{
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 5px;
}

.resume_subtext{
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #D41900;
  margin-bottom: 15px;
}

.just_empty{
  margin-bottom: 35px;
}

.resume_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 20px;
}

.just_empty{
  position: relative;
  width: 1060px;
  height: 6px;
  background: #EBECE6;
  border-radius: 9px;
  margin-bottom: 35px;
  cursor: pointer;
}

.just_empty:after{
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;

  top: -4px;

  color: red;
  left: 180px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid red;
}

.just_empty:before{
  position: absolute;
  width: 189px;;
  height: 6px;
  content: "";
  background-color: red;
  border-radius: 9px;
}

.resume_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 20px;
}

.resume_title{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 15px;
}

.experience{
  display: flex;
}

.experience_box{
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.input_exper{
  margin-right: 12px;
}


.resume_buttons{
  position: absolute;
  right: 0;
  margin-bottom: 10px;
}

.button{
  width: 160px;
  height: 40px;

  border: 1px solid #878882;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 15px;
  color: #878882;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.button.active{
  color: #FFFFFF;
  background-color: #4B970F;;
}
</style>