<template>
  <div class="result">
    <div class="result_inner">

      <h1 class="result_title">Результаты поиска (62)</h1>

      <form @submit.prevent="submitForm">
        <a class="search_wrapper">
          <input class="search_result" type="text" v-model="query">
          <img class="search_img" src="@/assets/result/result-search.png" alt="">
        </a>
      </form>

      <div class="selects_wrapper">
        <div class="select_top">
          <a class="result_select active" href="">ВСЕ</a>
          <a class="result_select" href="">С опытом работы</a>
          <a class="result_select" href="">Полная занятость</a>
          <a class="result_select" href="">Выездная работа</a>
          <a class="result_select" href="">С опытом работы</a>
          <a class="result_select" href="">Полная занятость</a>
          <a class="result_select" href="">С опытом работы</a>
          <a class="result_select" href="">Полная занятость</a>
        </div>

        <div class="select_bottom">
          <p class="select_text">Сортировать по: </p>
          <select class="select_date" name="" id="">
            <option value="">Дате публикации</option>
          </select>
        </div>
      </div>

      {{mainQuery}}

      <MainResultsWrapper
        v-for="vakansi in getEmployers"
        :key="vakansi"
        :vakansi="vakansi"
      />

      <div class="pagination">
        <a href="#" @click="prevPage">
          <img class="pag_page" src="@/assets/result/left.png" alt="">
        </a>
        <a class="pag_number" href="#">{{currPage}}</a>
        <a href="#" @click="nextPage">
          <img class="pag_page" src="@/assets/result/right.png" alt="">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import MainResultsWrapper from '@/components/boxs/MainResultsWrapper'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'MainResult',
  components: {
    MainResultsWrapper
  },
  props: {
    mainQuery: Object
  },
  data: () => ({
    currPage: 1,
    query: ''
  }),
  mounted(){
    this.actionGetPages(this.currPage)
    this.actionGetSearch(this.mainQuery)
  },
  computed: {
    ...mapGetters(['getEmployers']),
  },
  methods: {
    ...mapActions(['actionGetPages', 'actionGetSearch']),
    submitForm(){
      if(this.mainQuery === undefined){
        return this.actionGetSearch(this.mainQuery)
      }
      return this.actionGetSearch(this.query)
    },
    prevPage(){
      this.currPage -= 1
      this.actionGetPages(this.currPage)
    },
    nextPage(){
      this.currPage += 1
      this.actionGetPages(this.currPage)
    }
  }
}
</script>

<style scoped>
/**result */
.result{
  width: 1000px;
  height: 1281px;
  margin-left: 26px;
  background: #FFFFFF;
  border-radius: 6px;
}

.result_inner{
  padding: 25px 20px 105px 20px; /**25px 20px 125px 20px */
}

.result_title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 25px;
}

.search_wrapper{
  display: flex;
  align-items: center;
  width: 500px;
  height: 40px;
  margin-bottom: 25px;
}

.search_result{
  width: 100%;
  height: 100%;

  background: #FFFFFF;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;

  padding-left: 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
}

.select_top{
  margin-bottom: 20px;
}

.result_select{
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;

  padding: 8px 17px;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;

  margin-right: 15px;
  margin-bottom: 10px;
}

.result_select.active{
  text-transform: uppercase;
  color: #fff;
  background-color: #4B970F;
}

.select_bottom{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.select_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #808080;
  margin: 9px;
}

.select_date{
  width: 204px;
  height: 40px;
  padding: 10px;

  background: #F6F7F3;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px
}


.pagination{
  width: 100px;
  justify-content: space-between;
  display: flex;
  margin-top: 40px;
  align-items: center;
  margin-left: 400px;
}

.pag_number{
  background-color: #4B970F;
  color: #fff;
  border-radius: 100%;
  padding: 7px 12px 8px 12px;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}

.pag_page{
  padding: 6px 10px 6px 10px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px 1px rgba(171, 174, 163, 0.15);
  border-radius: 100%;
  border: 1px solid #fff;
}

.pag_page:hover{
  background-color: #F6F7F3;
  border: 1px solid #333333;
}




</style>