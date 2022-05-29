<template>
  <div class="template">
    <div class="main">

      <h2 class="resume_title">Создание резюме</h2>
      <h3 class="resume_subtitle">Ваше резюме</h3>
      <h4 class="resume_subtext">Шанс рассмотрения резюме:</h4>


      <div class="just_empty"></div>
      <div class="edu_resume">

        <h1 class="edu_title">Укажите ваше образование</h1>
        <div class="experience">
          <div class="experience_box">
            <input class="input_exper" type="radio">
            <a class="exper_text">У меня нет образования</a>
          </div>
        </div>

        <div class="edu_years">
          <h2 class="edu_level">Начало - Конец</h2>
          <input class="edu_year" type="date" v-model="start" required>
          <input class="edu_year last" type="date" v-model="end" required>

          <label>Учебное Заведение</label>
          <input class="edu_place" placeholder="Введите название" type="text" v-model="educationPlace" required>
        </div>

        <div class="profession">
          <h2 class="edu_level">Уровень образования </h2>
          <select class="edu_select" name="" id="" v-model="degree" required>
            <option value="" checked>Выберите уровень образования</option>
            <option v-for="item in getDegree" :key="item">{{item.education}}</option>
          </select>

          <label>Учебная специальность</label>
          <input class="edu_place" type="text" placeholder="Введите специальность" v-model="proffession" required>

        </div>

        <div class="add_content">
          <a class="add_inner" href="#">
            <img class="add_plus" src="@/assets/resume/third/plus.png" alt="">
            <p class="add_text">Добавить информацию о себе</p>
          </a>
        </div>

      </div>

      <div class="resume_buttons">
        <button class="button" @click="showModal">ОТМЕНА</button>
        <button class="button active" @click.prevent="eduResultResume()">ДАЛЕЕ</button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'EducationResume',
  data: () => ({
    start: '',
    end: '',
    educationPlace: '',
    proffession: '',
    degree: '',
  }),
  computed: {
    ...mapGetters(['getDegree'])
  },
  mounted(){
    this.actionDegree()
  },
  methods: {
    ...mapActions(['actionDegree', 'actionEducationResume']),
    eduResultResume(){
      const newData = {
        start: this.start,
        end: this.end,
        educationPlace: this.educationPlace,
        proffession: this.proffession,
        degree: this.degree
      }
      this.actionEducationResume(newData)
      this.$router.push({name: 'EduResultResume'})
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


.resume_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 20px;
}

.edu_title{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 20px;
}

.experience{
  display: flex;
  margin-bottom: 30px;
}

.experience_box{
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.input_exper{
  margin-right: 12px;
}

.exper_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
}

/**Edu years */
.edu_years{
  margin-bottom: 15px;
}

.edu_year{
  position: relative;
  padding: 14px 16px;
  width: 151px;
  height: 48px;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 20px;
}

.edu_year.last{
  margin-right: 30px;
}
/* .edu_year:first-child:after{
  position: absolute;
  content: "";
  width: 10px;
  height: 0px;
  border: 1px solid #000;
} */

.edu_place{
  padding: 14px 16px;
  width: 320px;
  height: 48px;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
}

/**profession */
.profession{
  margin-bottom: 22px;
}
.edu_level{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 8px;
}

.edu_select{
  width: 320px;
  height: 48px;
  padding: 12px 14px;
  background: #F1F8EC;
  border-radius: 6px;
  border: none;
  outline: none;
  margin-right: 30px;
}

.content_title{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.add_content{
  align-items: center;
  margin-bottom: 18px;
}

.add_inner{
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #4B970F;
}

.add_plus{
  padding-left: 5px;
  margin-right: 15px;
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