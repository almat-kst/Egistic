<template>
  <div class="nav">
    <router-link :to="{name: 'Home'}" class="branding">
      <img class="logo" src="../assets/navigation/green_logo.png">
    </router-link>

    <div class="options">

      <div class="option">
        <router-link class="option_link" :to="{name: 'Home'}">
          <img src="../assets/navigation/main.png" class="icon">
          <p class="option_text">Главная</p>
        </router-link>
      </div>

      <div class="option">
        <router-link class="option_link" to="#">
          <img src="../assets/navigation/hoz.png" class="icon" >
          <p class="option_text">Хозяйство</p>
        </router-link>
      </div>

      <div class="option">
        <router-link class="option_link" to="#">
          <img src="../assets/navigation/market.png" class="icon">
          <p class="option_text">Маркет</p>
        </router-link>
      </div>

      <div class="option">
        <router-link class="option_link" to="#">
          <img src="../assets/navigation/arenda.png" class="icon">
          <p class="option_text">Аренда</p>
        </router-link>
      </div>

      <div class="option">
        <router-link class="option_link" to="#">
          <img src="../assets/navigation/cons.png" class="icon">
          <p class="option_text">Консультация</p>
        </router-link>
      </div>

      <div class="option">
        <router-link class="option_link" :to="{name: 'Main'}">
          <img src="../assets/navigation/agro.png" class="icon">
          <p class="option_text"><span class="text_active">AgroHR</span></p>
        </router-link>
      </div>

    </div>

    <div class="resume">
      <button class="ru">RU</button>
      <img class="znak" src="../assets/navigation/ru.png" alt="">
    </div>     <!-- <router-link class="button" :to="{name: 'Resume'}">Создать Резюме</router-link> -->

    <router-link :to="{name: 'MyAccount'}" v-if="$store.getters.isAuth" class="button">My account</router-link>

    <button class="button" @click.prevent="checkMethods">{{check}}</button>

    <!-- <button v-if="$store.state.isAuthenticated" class="button" @click.prevent="checkMethods">Выход</button>
    <button v-else class="button" @click.prevent="checkMethods">Вход</button> -->

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Navigation',
  data: () => ({
    authData: ''
  }),
  computed: {
    ...mapGetters(['isAuth']),
    check(){
      if(this.isAuth === false){
        return this.authData = 'Вход'
      }
      if(this.isAuth === true) {
        return this.authData = 'Выход'
      }
    }
  },
  methods: {
    checkMethods(){
      if(this.isAuth === false){
        return this.login()
      }
      if(this.isAuth === true) {
        return this.logout()
      }
    },
    login(){
      this.$router.push('/login')
    },
    logout(){
      axios.defaults.headers.common['Authorization'] = ''

      localStorage.removeItem('token')
      // localStorage.removeItem('username')
      // localStorage.removeItem('userid')

      this.$store.commit('removeToken')

      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.nav{
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(171, 174, 163, 0.1);
}

.branding{
  margin-left: 19px;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  align-items: center;
}

.options{
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  align-items: center;
  padding: 0px;
}

.option{
  display: flex;
  margin: 0px 20px; /*0 40px */
}

.option_link{
  display:flex;
}

.icon{
  width: 24px;
  height: 24px;
  margin-right: 6px; /*16px */
}

.option_text{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;

  text-decoration: none;
  list-style: none;

  color: #1C1C1C;
}

.option_text:hover{
  color: #4B970F;
}

a{
  text-decoration: none;
}

.text_active{
  color: #4B970F;
}

.resume{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  height: 50px;
  left: 1137px;
  top: 5px;
}

.ru{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #000000;
  margin-right: 5px;

  border: none;
  background-color: #fff;
  cursor: pointer;
}

.znak{
  margin: 7.5px 13px;
}

.button{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;

  color: #fff;
  background: #4B970F;
  border: 0px solid #4B970F;
  border-radius: 6px;

  margin: 7.5px 30px;
  padding: 12px 32px;

  cursor: pointer;
}

</style>

