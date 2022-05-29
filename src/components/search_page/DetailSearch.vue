<template>
  <div class="detail_search">
    <a class="back_vakansi" href="">
      <img class="back_img" src="@/assets/detail_search/back.png" alt="">
      <p class="back_text">Все вакансии</p>
    </a>

    <div class="detail_main">
      <h1 class="detail_title">{{getDetailVakansi.title}}</h1>

      <div class="detail_buttons">
        <a class="detail_saves" href="#">В избранные</a>
        <a class="detail_save" href="">
          <img class="save_icon" src="@/assets/detail_search/saves.png" alt="">
        </a>
      </div>
    </div>

    <div class="detail_price">{{getDetailVakansi.salary_start}} до {{getDetailVakansi.salary_end}}</div>

    <div class="detail_place">
      <img class="place_img" src="@/assets/detail_search/turgen.png" alt="">
      <div class="place_main">
        <h2 class="place_name">{{getDetailVakansi.company_name}}</h2>
        <p class="place_city">{{getDetailVakansi.city}}</p>
      </div>
    </div>

    <div class="detail_filters">
      <a class="detail_filter" href="">
        <img class="detail_filter_img" src="@/assets/result/vek.png" alt="">
        <p class="detail_filter_text">{{getDetailVakansi.time_work}}</p>
      </a>
      <a class="detail_filter" href="">
        <img class="detail_filter_img" src="@/assets/result/vek.png" alt="">
        <p class="detail_filter_text">{{getDetailVakansi.schedule}}</p>
      </a>
    </div>

    <div class="detail_content">
      <div class="content_text">
        АО «ГОЛД ПРОДУКТ»- работает на казахстанском рынке с 1998 года, и знакомо потребителю,
        как крупнейший производитель виноградных вин, известных каждому казахстанцу под маркой «Тургень».
        Для своих сотрудников, которые являются основной ценностью, компания предлагает профессиональный и
        карьерный рост, конкурентную зарплату, решение сложных, но интересных задач, систему обучения и
        повышение квалификации.
      </div>

      <div class="contents_items">
        <h2 class="content_subtitle">Обязанности</h2>
        <ul class="content_items">
          <li class="content_item">{{getDetailVakansi.obligations}}</li>
          <!-- <li class="content_item">консультации клиентов </li>
          <li class="content_item">Агро сопровождение проданной продукции </li>
          <li class="content_item">закладка производственных опытов</li>
          <li class="content_item">контроль за использованием проданных препаратов</li> -->
        </ul>
      </div>

      <div class="contents_items">
        <h2 class="content_subtitle">Требования</h2>
        <ul class="content_items">
          <li class="content_item">{{getDetailVakansi.requirements}}</li>
          <!-- <li class="content_item">Минимальный опыт работы 5 лет.</li>
          <li class="content_item">Готовность к командировкам.</li>
          <li class="content_item">высшее агрономическое образование</li> -->
        </ul>
      </div>

      <div class="contents_items">
        <h2 class="content_subtitle">Условия</h2>
        <ul class="content_items">
          <li class="content_item">{{getDetailVakansi.conditions}}</li>
          <!-- <li class="content_item">Оформление трудового договора согласно ТК РК</li>
          <li class="content_item">заработная плата согласно Положению по KPI</li>
          <li class="content_item">Размер заработной платы по результатам собеседования</li> -->
        </ul>
      </div>

      <div class="content_date">
        <img src="@/assets/detail_search/date.png" alt="">
        <p class="content_date_text">23 сентября 2021 в Алматы</p>
      </div>

      <button class="content_button">ОТКЛИКНУТЬСЯ</button>

    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'DetailSearch',
  computed: {
    ...mapGetters(['getDetailVakansi'])
  }
}
</script>

<style scoped>

.detail_search{
  background: #FFFFFF;
  border-radius: 6px;
  padding: 22px 40px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.back_vakansi{
  display: flex;
  align-items: center;
  margin-bottom: 22px;
}

.back_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #878882;
  margin-left: 5px;
}

.detail_main{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.detail_title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 25px;
}

.detail_buttons{
  display: flex;
  align-items: center;
}

.detail_buttons:hover{
  text-decoration: underline;
}

.detail_saves{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #4B970F;
  margin-right: 10px;
}

.detail_save{
  padding: 7px 12px;
  background: #F6F7F3;
  border-radius: 100%;
}

.detail_price{
  font-weight: 500;
  font-size: 22px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #333333;
  margin-bottom: 25px;
}

.detail_place{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.place_img{
  margin-right: 12px;
}

.place_name{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #4B970F;
}

.place_city{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
}

.detail_filters{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.detail_filter{
  display: flex;
  align-items: center;
  padding: 6px 17px;
  background: #FFE380;
  border-radius: 5px;
  margin-right: 10px;
}

.detail_filter_img{
  margin-right: 10px;
}

.detail_filter_text{
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
}

.contents_items{
  margin-bottom: 20px;
}

.content_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 10px;
}

.content_subtitle{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.content_items{
  padding-left: 25px;
}

.content_item{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
}

.content_date{
  display: flex;
  margin-bottom: 25px;
}

.content_date_text{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #ABAEA3;
  margin-left: 10px;
}

.content_button{
  width: 200px;
  height: 40px;
  background: #4B970F;
  border-radius: 6px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FFFFFF;

}
</style>