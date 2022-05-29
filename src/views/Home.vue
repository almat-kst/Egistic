<template>
  <div class="home">

    <div class="header">
      <div class="search">

        <h1 class="search_title">Ищете работу?</h1>
        <h2 class="search_subtitle">Воспользуйтесь поиском</h2>

        <div class="search_wrapper">
          <img class="logo" src="../assets/search.png" alt="">
          <input class="search_input" type="text" placeholder="Поиск вакансий" v-model="query">

          <button class="search_filter">
            <p class="filter_text">Фильтр</p>
            <img class="filter_logo" src="../assets/search-etc.png" alt="">
          </button>
        </div>

        <button class="search_button" @click="toSearch(query)">Хочу найти сотрудника</button>
        <!-- <router-link class="search_button" :to="{name: 'SearchPage'}">Хочу найти сотрудника</router-link> -->

      </div>
    </div>

    <div class="job">
      <div class="container">

        <h1 class="job_title">Вакансии дня</h1>
        <a href="/main" class="job_subtitle">Смотреть все</a>

        <div class="job_contents">

          <div class="content">
            <div class="content_inner">
              <router-link :to="{name: 'DetailPage'}" class="content_vakansi">Агроном</router-link>
              <p class="content_org">в ТОО “Агрохолдинг”</p>

              <div class="content_salary">
                <img src="../assets/tenge.png" alt="">
                <p class="salary_text">от 100 000 до 150 000 тг</p>
              </div>

              <div class="content_place">
                <img src="../assets/place.png" alt="">
                <p class="place_text">Зеренда, Акмолинская область</p>
              </div>

            </div>
          </div>

          <div class="content">
            <div class="content_inner">
              <router-link :to="{name: 'DetailPage'}" class="content_vakansi">Агроном</router-link>
              <p class="content_org">в ТОО “Агрохолдинг”</p>

              <div class="content_salary">
                <img src="../assets/tenge.png" alt="">
                <p class="salary_text">от 100 000 до 150 000 тг</p>
              </div>

              <div class="content_place">
                <img src="../assets/place.png" alt="">
                <p class="place_text">Зеренда, Акмолинская область</p>
              </div>

            </div>
          </div>

          <div class="content">
            <div class="content_inner">
              <router-link :to="{name: 'DetailPage'}" class="content_vakansi">Агроном</router-link>
              <p class="content_org">в ТОО “Агрохолдинг”</p>

              <div class="content_salary">
                <img src="../assets/tenge.png" alt="">
                <p class="salary_text">от 100 000 до 150 000 тг</p>
              </div>

              <div class="content_place">
                <img src="../assets/place.png" alt="">
                <p class="place_text">Зеренда, Акмолинская область</p>
              </div>

            </div>
          </div>

          <div class="content">
            <div class="content_inner">
              <router-link :to="{name: 'DetailPage'}" class="content_vakansi">Агроном</router-link>
              <p class="content_org">в ТОО “Агрохолдинг”</p>

              <div class="content_salary">
                <img src="../assets/tenge.png" alt="">
                <p class="salary_text">от 100 000 до 150 000 тг</p>
              </div>

              <div class="content_place">
                <img src="../assets/place.png" alt="">
                <p class="place_text">Зеренда, Акмолинская область</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="profession">
      <div class="container">

        <div class="profession_header">
          <h1 class="profession_title">Работа по профессиям в</h1>
          <select class="select_city" name="" id="">
            <option class="option_city" value="">Нурсултан</option>
          </select>
        </div>

        <div class="popular_request">
          <h1 class="request_text">Популярные запросы:</h1>
          <div class="popular_profession">
            <a href="#" class="popular_button">Работа из дома</a>
            <a href="#" class="popular_button">Агроном</a>
            <a href="#" class="popular_button">Директор</a>
            <a href="#" class="popular_button">Бухгалтер</a>
          </div>
        </div>

        <div class="profession_block">
          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>

          <a class="wrapper" href="#">
            <div class="wrapper_inner">
              <img class="wrapper_img" src="../assets/agronom-worker.png" alt="">
              <p class="wrapper_text">Агроном (35)</p>
            </div>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {},
  data: () => ({
    query: '',
  }),
  computed: {
    ...mapGetters(['getEmployers'])
  },
  methods: {
    ...mapActions(['actionGetSearch']),
    toSearch(data){
      this.$emit('getDataFromMainSearch', data)
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>
/*header */
.header{
  position: relative;
  height: 500px;
  background-image: url('../assets/baground.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.search{
  position: absolute;
  width: 670px; /**670 */
  height: 152px; /**152 */
  left: 385px;
  top: 190px;
}

.search_title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;

  display: flex;
  align-items: center;

  color: #FFFFFF;
  margin-bottom: 6px;
}

.search_subtitle{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 12px;

  display: flex;
  align-items: center;

  color: #FFFFFF;
  /* margin-bottom: 10px; */
}

.search_wrapper{
  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 6px;

  width: 670px;
  margin: 10px 0 10px 0;
  padding: 0 10px 0 10px;
}

.search_input{
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border-radius: 6px;
  border: none;
  outline: none;

  margin: 0 10px 0 10px;
}

.search_filter{
  border: none;
  list-style: none;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.filter_text{
  /* position: relative; */
  margin: 0 15px 0 15px;
}

.filter_text:before{
  content: "";
  border-left: 1px solid #ccc; /* Параметры линии */
  margin-left: 20px; /* Отступ слева */
  padding-left: 15px; /* Расстояние от линии до текста */
}

.filter_logo{
  margin-right: 10px;
}

.search_button{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  background: #4B970F;
  border-radius: 6px;
  border: none;

  padding: 16px 11px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  cursor: pointer;
  color: #FFFFFF;
}

/*job */
.job{
  margin: 20px 0;
}

.job_title{
  font-weight: 600;
  font-size: 20px;/**16 */
  line-height: 20px;
  margin-bottom: 5px;
}

.job_subtitle{
  font-style: normal;
  font-weight: 500;
  font-size: 14px; /**12 */
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #4B970F;
  margin-bottom: 10px;
}

.job_contents{
  display: flex;
  align-items: center;
}

.content{
  margin: 5px;
  justify-content: space-between;
  width: 300px; /**290 */
  height: 110px;
}

.content:first-child{
  margin-left: 0;
}

.content_inner{
  padding: 12px 34px 12px 14px; /**12 24 12 14 */
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  border-radius: 6px;

  position: relative;
}

/* .content_inner:after{
  content: ">";
  position: absolute;
  left: 220px;
  top: 40px;
  cursor: pointer;
  transform: rotate(90deg);
}*/

.content_vakansi{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px; /**14 */
  line-height: 20px;

  color: #4B970F;
  margin-bottom: 4px;
}

.content_org{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px; /**12 */
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 5px;

}

.content_salary,
.content_place{
  display: flex;
  align-items: center;
}

.place_text,
.salary_text{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11px; /**10 */
  line-height: 16px;  /**16 */
  letter-spacing: 0.02em;

  color: #1C1C1C;
  margin-left: 3px;
}

/*profession */
.profession{
  margin-top: 45px;
  margin-bottom: 200px;
  /* margin-right: 30px; */
}

.profession_header{
  display: flex;
  align-items: center;
}

.profession_title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #1C1C1C;
  margin-right: 10px;
}

.select_city{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  width: 208px;
  height: 40px;
  padding: 10px 70px 10px 10px;

  background: #F6F7F3;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  outline: none;
}

.popular_request{
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.request_text{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #1C1C1C;
  margin-right: 10px;
}

.popular_profession{
  display: flex;
  align-items: center;
}

.popular_button{
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #4B970F;
  margin-right: 11px;
  border: none;
  text-decoration: none;
  background-color: #fff;
  cursor: pointer;
}

/**profession_block */
.profession_block{
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 0.6fr);
  grid-gap: 15px;
}

.wrapper{
  position: relative;
  height: 170px;
  background: #F1F8EC;
  border-radius: 6px;
  align-items: center;
}

.wrapper_inner{
  /* position: absolute; */
  /* width: 50px;
  height: 64px; */
  /* left: 251px;
  top: 879px; */
  /* padding: 40px 75px 40px 71px;
  align-items: center; */
}

.wrapper_img{
  position: absolute;
  top: 40px;
  left: 92px;
}

.wrapper_text{
  position: absolute;
  top: 120px;
  left: 70px;
}

a{
  text-decoration: none;
  outline: none;
  color: #000;
  list-style: none;
}
</style>
