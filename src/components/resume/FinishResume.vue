<template>
  <div class="template">
    <div class="main">

      <h2 class="resume_title">Создание резюме</h2>
      <h3 class="resume_subtitle">Ваше резюме</h3>
      <h4 class="resume_subtext">Шанс рассмотрения резюме:</h4>

      <div class="just_empty">
        <div class="just_empty_one"></div>
      </div>
      <div class="content">
        <div class="portfolio">
          <div class="portfolio_inner">
            <div class="portfolio_main">
              <img class="portfolio_img" src="@/assets/detail_page/portfolio.png" alt="">
              <div class="portfolio_header">
                <h1 class="portfolio_title">{{getFirstResume1.lastName}} {{getFirstResume1.name}}</h1>
                <p class="portfolio_info">{{getFirstResume1.date}}, {{getFirstResume1.gender}}</p>

                <div class="portfolio_place">
                  <img class="portfolio_icon" src="@/assets/result/city1.png" alt="">
                  <p class="portfolio_city">{{getFirstResume1.city}}</p>
                </div>

                <button class="portfolio_button">Редактировать резюме</button>
              </div>
            </div>

            <div class="portfolio_content">
              <h2 class="portfolio_subtitle">Желаемая позиция и зарплата</h2>
              <ul class="portfilio_salary">
                <li class="salary_item active">{{getFirstResume1.cetegory}} (стаж 18 лет 6 месяцев)</li>
                <li class="salary_item">от {{getFirstResume1.salary}}</li>
              </ul>

              <h3 class="content_title">О себе</h3>
              <p class="content_text">
                {{getAboutWorkerResume1.aboutPerson}}
              </p>

              <div class="content_items">
                <a class="content_item" href="#">
                  <img class="content_icon" src="@/assets/result/vek.png" alt="">
                  <p class="item_text">С опытом работы</p>
                </a>

                <a class="content_item" href="#">
                  <img class="content_icon" src="@/assets/result/vek.png" alt="">
                  <p class="item_text">Полная занятость</p>
                </a>

                <a class="content_item" href="#">
                  <img class="content_icon" src="@/assets/result/vek.png" alt="">
                  <p class="item_text">Выездная работа</p>
                </a>
              </div>

            </div>
          </div>

          <div class="education">
            <h3 class="education_title">Образование</h3>

            <div class="edu_inner">
              <p class="edu_year">{{getEducationResume1.start}} - {{getEducationResume1.end}}</p>
              <div class="edu_place">
                <h3 class="uni_prof">{{getEducationResume1.proffession}}, {{getEducationResume1.degree}}</h3>
                <h3 class="uni_name">{{getEducationResume1.educationPlace}}</h3>
              </div>
            </div>

            <div class="edu_inner">
              <p class="edu_year">08.2010 - 06.2012</p>
              <div class="edu_place">
                <h3 class="uni_prof">Агрономия, высшее</h3>
                <h3 class="uni_name">в КазАТУ</h3>
              </div>
            </div>

          </div>
        </div>

        <div class="experience">
          <h2 class="experience_title">Опыт работы (18 лет 6 месяцев)</h2>

          <div class="exper_inner">
            <div class="exper_content">
              <p class="experience_year">
                31.02.2021 -
                н.вр.(6 мес.)
              </p>
              <div class="experience_place">
                <h3 class="works_prof">Агроном-технолог</h3>
                <h3 class="works_name">в Egistic</h3>
                <p class="works_obligation">Обязанности:</p>
                <ul class="works_info">
                  <li>Разработка агротехнических мероприятий, направленных на повышение плодородия почв и увеличения урожайности сельскохозяйственных культур</li>
                  <li>Организация внедрения передовой технологии производства, передовых приемов возделывания высокоурожайных сортов сельскохозяйственных культур, научно обоснованной системы удобрения и орошения</li>
                  <li>Увеличение посевных площадей</li>
                </ul>
              </div>
            </div>

            <div class="exper_content">
              <p class="experience_year">
                31.02.2021 -
                н.вр.(6 мес.)
              </p>
              <div class="experience_place">
                <h3 class="works_prof">Агроном-технолог</h3>
                <h3 class="works_name">в Egistic</h3>
                <p class="works_obligation">Обязанности:</p>
                <ul class="works_info">
                  <li>Разработка агротехнических мероприятий, направленных на повышение плодородия почв и увеличения урожайности сельскохозяйственных культур</li>
                  <li>Организация внедрения передовой технологии производства, передовых приемов возделывания высокоурожайных сортов сельскохозяйственных культур, научно обоснованной системы удобрения и орошения</li>
                  <li>Увеличение посевных площадей</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="resume_buttons">
        <button class="button" @click="showModal">ОТМЕНА</button>
        <button class="button active" @click.prevent="publish">Опубликовать</button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'FinishResume',
  computed: {
    ...mapGetters(['getFirstResume', 'getSecondResume', 'getEducationResume', 'getAboutWorkerResume']),
    getFirstResume1(){
      console.log(this.getFirstResume)
      return this.getFirstResume[0] || ''
    },
    getSecondResume1(){
      console.log(this.getSecondResume)
      return this.getSecondResume[0] || ''
    },
    getEducationResume1(){
      console.log(this.getEducationResume)
      return this.getEducationResume[0] || ''
    },
    getAboutWorkerResume1(){
      console.log(this.getAboutWorkerResume)
      return this.getAboutWorkerResume[0] || ''
    }
  },
  methods: {
    ...mapActions(['actionPublishResume']),
    publish(){
      const publishResume = {
        name: this.getFirstResume1.name,
        lastName: this.getFirstResume1.lastName,
        date: this.getFirstResume1.date,
        gender: this.getFirstResume1.gender,
        city: this.getFirstResume1.city,
        category: this.getFirstResume1.cetegory,
        salary: this.getFirstResume1.salary,
        aboutPerson: this.getAboutWorkerResume1.aboutPerson,
        eduStart: this.getEducationResume1.start,
        eduEnd: this.getEducationResume1.end,
        proffession: this.getEducationResume1.proffession,
        degree: this.getEducationResume1.degree,
        eduPlace: this.getEducationResume1.educationPlace,
      }
      console.log(publishResume)
      this.actionPublishResume(publishResume)
      alert('Resume is published')
      this.$router.push({name: 'Home'})
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

  color: #4B970F;
  left: 1000px;

  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #4B970F;
}

.just_empty:before{
  position: absolute;
  width: 95%;
  height: 6px;
  content: "";
  background-color: #4B970F;
  border-radius: 9px;
}

.content{
  display: flex;
  justify-content: space-between;
}

.portfolio_inner{
  background: #FFFFFF;
  border-radius: 6px;
  padding: 20px;
  width: 620px; /**634 */

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
}

.portfolio_main{
  display: flex;
  margin-bottom: 10px;
}

.portfolio_img{
  width: 135px;
  height: 155px;
}

.portfolio_header{
  margin-left: 15px;
}

.portfolio_title{
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1C1C1C;
  margin-bottom: 12px;
}

.portfolio_info{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.02em;
  color: #1C1C1C;
  margin-bottom: 10px;
}

.portfolio_place{
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}

.portfolio_city{
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #333333;

  margin-left: 8px;
}

.portfolio_button{
  background: #4B970F;
  border-radius: 6px;
  padding: 12px 27px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #fff;
}

.portfolio_subtitle{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
}

.portfilio_salary{
  padding-left: 20px;
  margin-bottom: 10px;
}

.salary_item{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
}

.salary_item.active{
  color: #4B970F;
}

.content_title{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.content_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 20px;
}

.content_items{
  display: flex;
  margin-bottom: 40px;
}

.content_item{
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 4px 8px;

  background: rgba(255, 199, 0, 0.5);
  border-radius: 6px;
}

.item_text{
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #1C1C1C;
}

.education{
  margin-top: 10px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 6px;

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
}

.education_title{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 10px;
}

/** Experience */
.experience{
  height: 624px;
  width: 494px;

  margin-left: 10px;
  padding: 15px;

  background-color: #fff;
  box-shadow: 0px -2px 2px rgba(171, 174, 163, 0.1);

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
}

.experience_title{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.experience_inner{
  display: flex;
}

.experience_years:after{
  border-right: 2px solid green;
}

.experience_year:last-child{
  margin-top: 19px;
  height: 300px;
}

.experience_places{
  margin-left: 5px;
  align-items: center;
}

/**------------------------- */
.edu_inner{
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

}

.edu_inner:before{
  content: '';
  position: absolute;
  background: #FFC700;;

  top: 0px;
  left: 130px;
  bottom: 0px;
  width: 2px;
  height: 50px;
}

.edu_inner:last-child:before{
  height: 30px;
}

.edu_year{
  width: 26.2%;
  position: relative;

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  align-items: center;
}

.edu_year:before {
  content: '•';
  position: absolute;
  top: -2px;
  left: 124px;
  font-size: 25px;
  color: #FFC700;;
}

.uni_prof{
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #1C1C1C;
}

.uni_name{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #1C1C1C;
}

/*****exper */
.exper_content{
  position: relative;
  display: flex;
  margin-bottom: 24px;

}

.experience_year{
  width: 109px;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;

  margin-right: 19px;
}

.experience_year:before{
  content: "";
  position: absolute;
  /* background: #4B970F; */
  background: #74ED63;

  width: 2px;
  height: 270px;
  left: 120px;
}

.experience_place{
  position: relative;
}

.experience_place:after{
  content: "•";
  position: absolute;
  color: #4B970F;
  font-size: 24px;
  top: -8px;
  left: -13.5px;
}

.works_prof{
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #4B970F;
  margin-bottom: 4px;
}

.works_name{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.works_obligation{
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 4px;
}

.works_info{
  width: 270px;
  padding-left: 20px;
}

li{
  font-weight: 300;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
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