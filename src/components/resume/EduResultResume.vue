<template>
  <div class="template">
    <div class="main">

      <h2 class="resume_title">Создание резюме</h2>
      <h3 class="resume_subtitle">Ваше резюме</h3>
      <h4 class="resume_subtext">Шанс рассмотрения резюме:</h4>

      <div class="just_empty"></div>
      <div class="edu_resume">

        <div class="places_inner">
          <div class="place_box">
            <h2 class="place_proff">{{resultData.proffession}}, {{resultData.degree}}</h2>
            <h2 class="place_univ">{{resultData.educationPlace}}</h2>
            <p class="place_time">с {{resultData.start}} по {{resultData.end}}</p>
          </div>

          <div class="place_box">
            <h2 class="place_proff">Агрономия, Высшее</h2>
            <h2 class="place_univ">Назарбаев Университет</h2>
            <p class="place_time">с 08.2017 по 06.2021</p>
          </div>
        </div>

        <div class="resume_buttons">
          <button class="button" @click="showModal">ОТМЕНА</button>
          <button class="button active" @click="resumeWork">ДАЛЕЕ</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'EduResultResume',
  computed: {
    ...mapGetters(['getEducationResume']),
    resultData(){
      return this.getEducationResume[0] || ''// Что бы дал 1 элемент нужно просто вызвать геттер
    },
  },
  methods: {
    resumeWork(){
      this.$router.push({name: 'ResumeAboutWorker'})
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
  left: 420px;

  background-color: #fff;
  border-radius: 50%;
  border: 2px solid red;
}

.just_empty:before{
  position: absolute;
  width: 430px;
  height: 6px;
  content: "";
  background-color: red;
  border-radius: 9px;
}

/**Places Inner */
.places_inner{
  display: flex;
}

.place_box{
  width: 320px;
  height: 92px;
  background: #F6F7F3;
  border-radius: 6px;
  margin-right: 30px;
  margin-bottom: 28px;
  padding: 12px 20px;
}

.place_proff{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #4B970F;
  margin-bottom: 8px;
}

.place_univ{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.place_time{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
}

.place_box:last-child{
  margin-right: 0px;
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