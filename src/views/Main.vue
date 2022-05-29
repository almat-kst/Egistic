<template>
  <div class="template">
    <div class="main">

      <NavHeader></NavHeader>

      <div class="main_content">
        <MainFilter></MainFilter>

        <MainResult
          @getDataFromMainSearch="dataFromMainSearch"
          :mainQuery="mainQuery"

        ></MainResult>
      </div>

    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/main/NavHeader.vue'
import MainFilter from '@/components/main/MainFilter.vue'
import MainResult from '@/components/main/MainResult.vue'

export default {
  name: 'Main',
  components:{
    NavHeader,
    MainFilter,
    MainResult
  },
  data: () => ({
    mainQuery: ''
  }),
  methods: {
    dataFromMainSearch(data){
      console.log(data)
      this.mainQuery = data
    }
  }
}
</script>

<style scoped>
.template{
  background-color: #E5E5E5;
}

.main{
  padding-top: 20px;
  margin: 0px 36px 0px 36px; /**bottom -109 */
  width: 1269px;
  height: 1465px; /* height: 1557px; */ /**1465 */
}

.main_content{
  display: flex;
}
</style>