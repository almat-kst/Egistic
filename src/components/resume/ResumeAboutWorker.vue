<template>
  <div class="template">
    <div class="main">

      <h2 class="resume_title">Создание резюме</h2>
      <h3 class="resume_subtitle">Ваше резюме</h3>
      <h4 class="resume_subtext">Шанс рассмотрения резюме:</h4>

      <div class="just_empty"></div>
      <p class="resume_text">Расскажите о себе и своих увлечениях в свободной форме</p>
      <div class="resume_inner">
        <div class="description">
          <textarea class="desc_input" type="text" v-model="text" placeholder="Расскажите о себе. Например, ваши достижения и навыки."></textarea>
          <input class="desc_video" type="text" v-model="aboutPerson" placeholder="Вставьте ссылку">
          <div class="desc_info">
            <h2 class="desc_text">Вы можете вставить ссылку на видео о себе. Видео будет добавлено к вашему резюме.</h2>
            <h2 class="desc_text">Требования:</h2>
            <ul>
              <li class="desc_text">длительность не больше 1-ой минуты</li>
              <li class="desc_text">видео должно быть загружено на YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="resume_buttons">
        <button class="button" @click="showModal">ОТМЕНА</button>
        <button class="button active" @click="nextPageResume">ДАЛЕЕ</button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'ResumeAboutWorker',
  data: () => ({
    text: '',
    aboutPerson: ''
  }),
  methods: {
    ...mapActions(['actionAboutWorkerResume']),
    nextPageResume(){
      const data = {
        text: this.text,
        aboutPerson: this.aboutPerson
      }
      this.actionAboutWorkerResume(data)
      this.$router.push({name: 'FinishResume'})
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
  left: 600px;

  background-color: #fff;
  border-radius: 50%;
  border: 2px solid red;
}

.just_empty:before{
  position: absolute;
  width: 610px;
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

.desc_input{
  display: block;
  width: 726px;
  height: 188px;
  /* padding-top: 20px; */
  padding-left: 15px;
  padding-top: 15px;

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 20px;
}

.desc_video{
  width: 725px;
  height: 48px;
  padding-left: 15px;

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 8px;
}

ul{
  padding-left: 15px;
}

.desc_text{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 8px;
}

.desc_text:last-child{
  margin-bottom: 1px;
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