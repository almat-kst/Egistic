<template>
  <div class="main_nav">
    <div class="nav_left">
      <a class="nav_vakansi active" href="#">
        <img src="@/assets/search_work/active.png" alt="">
        <p class="text_vakansi active">Все вакансии</p>
      </a>
      <a class="nav_vakansi" href="#">
        <img src="@/assets/search_work/2.png" alt="">
        <p class="text_vakansi">Избранное</p>
      </a>
      <a class="nav_vakansi" href="#">
        <img src="@/assets/search_work/3.png" alt="">
        <p class="text_vakansi">Отклики</p>
      </a>
    </div>
    <div class="nav_right">
      <button class="be_employee">стать работодателем</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style scoped>

.main_nav{
  /* width: 1148px; */
  height: 70px;

  background: #FFFFFF;
  box-shadow: 0px -2px 2px rgba(171, 174, 163, 0.1);
  border-radius: 6px;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.nav_left{
  display:flex;
}

.nav_vakansi{
  display: flex;
  margin: 0px 60px 0px 0px;
  padding: 23px 0;
  align-items: center;
}

.nav_vakansi:first-child{
  margin-left: 63px;
}

.nav_vakansi.active{
  color: #4B970F;
  border-bottom: 2px #4B9707 solid;
}

.nav_vakansi:hover{
  color: #4B970F;
  border-bottom: 2px #4B9707 solid;
}

.nav_vakansi:hover p{
  color: #4B970F;
}

.text_vakansi{
  margin-left: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #000000;
}

.text_vakansi.active{
  color: #4B970F;
}

.be_employee{
  width: 233px;
  height: 40px;
  align-items: center;

  background: #F1F8EC;
  color: #000000;
  border-radius: 6px;
  padding: 12px 37px;
  margin-left: 222px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #000000;
}
</style>