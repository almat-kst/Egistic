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
              <a class="portfolio_img_border" href="#">
                <img class="portfolio_img_1" src="@/assets/resume/third/vektor.png" alt="">
                <img class="portfolio_img_2" src="@/assets/resume/third/icon.png" alt="">
                <p class="portfolio_img_text">Загрузить фото</p>
              </a>
              <div class="portfolio_header">
                <div class="title_redactor">
                  <h1 class="portfolio_title">Омаров Бектас Максатович</h1>
                  <a href="#"><img class="pen_redactor" src="@\assets\resume\third\pen.png" alt=""></a>
                </div>

                <p class="portfolio_info">43 года, Мужчина</p>

                <div class="portfolio_place">
                  <img class="portfolio_icon" src="@/assets/result/city1.png" alt="">
                  <p class="portfolio_city">Нур-Султан</p>
                </div>
                <p class="port_number_email">+7 778 003 00 00</p>
                <p class="port_number_email">ivanov.ivan@egistic.kz</p>

                <!-- <button class="portfolio_button">Редактировать резюме</button> -->
              </div>
            </div>

            <div class="portfolio_content">
              <div class="title_redactor">
                <h2 class="portfolio_subtitle">Желаемая позиция и зарплата</h2>
                <a href="#"><img class="pen_redactor" src="@\assets\resume\third\pen.png" alt=""></a>
              </div>

              <ul class="portfilio_salary">
                <li class="salary_item active">Агроном (стаж 18 лет 6 месяцев)</li>
                <li class="salary_item">от 300 000 до 500 000 тг </li>
              </ul>

              <h3 class="content_title">О себе</h3>
              <div class="add_content">
                <a class="add_inner" href="#">
                  <img class="add_plus" src="@/assets/resume/third/plus.png" alt="">
                  <p class="add_text">Добавить информацию о себе</p>
                </a>
              </div>

              <div class="conditions_boxs">
                <h2 class="portfolio_subtitle">Дополнительная информация</h2>
                <div class="conditions_inner">
                  <div class="conditions_box">
                    <input class="input_conditions" type="radio">
                    <a class="conditions_text">Удалённая работа</a>
                  </div>
                  <div class="conditions_box">
                    <input class="input_conditions" type="radio">
                    <a class="conditions_text">Работа в поле</a>
                  </div>
                  <div class="conditions_box">
                    <input class="input_conditions" type="radio">
                    <a class="conditions_text">Работа в офисе</a>
                  </div>
                  <div class="conditions_box">
                    <input class="input_conditions" type="radio">
                    <a class="conditions_text">Выездная работа</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="education">
            <h3 class="education_title">Образование</h3>

            <div class="add_content">
              <a class="add_inner" href="#">
                <img class="add_plus" src="@/assets/resume/third/plus.png" alt="">
                <p class="add_text">Добавить информацию об образовании</p>
              </a>
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
        <button class="button active" @click.prevent="secondResume(this.firstData)">ДАЛЕЕ</button>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'ThirdResume'
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
  left: 290px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid red;
}

.just_empty:before{
  position: absolute;
  width: 294px;
  height: 6px;
  content: "";
  background-color: red;
  border-radius: 9px;
}

.content{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
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

.portfolio_img_border{
  position: relative;
  width: 123px;
  height: 155px;
  margin-right: 30px;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
}

.portfolio_img_1{
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 30%;
  left: 27%;
}

.portfolio_img_2{
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 40%;
  left: 40%;
}

.portfolio_img_text{
  position: absolute;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  top: 55%;
  left: 10%;
}

.portfolio_header{
  margin-left: 15px;
}

.title_redactor{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portfolio_title{
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1C1C1C;
  margin-bottom: 12px;
  margin-right: 167px;
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
  margin-bottom: 15px;
}

.portfolio_city{
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #333333;
  margin-left: 8px;
}

.port_number_email{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}

.portfolio_subtitle{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 8px;
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

/** Add info */
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

/** Conditions  */

.conditions_box{
  display: inline-block;
  width: 30%;
  align-items: center;
  margin-right: 50px;
}

.input_conditions{
  margin-right: 10px;
  background: #FFFFFF;
  border: 1px solid #E0E2D8;
  /* box-sizing: border-box; */
}

.conditions_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
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

/** Education */

.education{
  height: 190px;
  margin-top: 10px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 6px;
  background: #FFFFFF;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
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