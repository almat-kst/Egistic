<template>
  <div class="template">
    <div class="main">

      <NavHeader></NavHeader>

      <div class="main_content">
        <MainFilter @filterDataMethods="onFilterData"></MainFilter>
        <WorkerResult :filterData="filterData"></WorkerResult>
      </div>

    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/main/NavHeader'
import MainFilter from '@/components/main/MainFilter'
import WorkerResult from '@/components/work_search/WorkerResult'

export default {
  name: 'WorkerSearch',
  components: {
    NavHeader,
    MainFilter,
    WorkerResult
  },
  data: () => ({
    filterData: {}
  }),
  methods: {
    onFilterData(data){
      this.filterData = data
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
  margin: 0px 36px 0px 36px;
  width: 1269px;
  height: 1570px;
}

.main_content{
  display: flex;
}
</style>