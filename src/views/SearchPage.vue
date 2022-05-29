<template>
  <div class="template">
    <div class="main">

      <MainNav></MainNav>
      <SearchVakansi></SearchVakansi>
      <DetailSearch></DetailSearch>
      <AllVakansi></AllVakansi>

    </div>
  </div>
</template>

<script>
import MainNav from '@/components/search_page/MainNav.vue'
import SearchVakansi from '@/components/search_page/SearchVakansi.vue'
import AllVakansi from '@/components/search_page/AllVakansi.vue'
import DetailSearch from '@/components/search_page/DetailSearch.vue'

export default {
  name: 'SearchPage',
  components: {
    MainNav,
    SearchVakansi,
    AllVakansi,
    DetailSearch
  }
}
</script>

<style scoped>
.template{
  background-color: #E5E5E5;
}

.main{
  /* width: 1148px; */
  margin: auto 146px;
  padding-top: 20px;
  padding-bottom: 146px;
}
</style>