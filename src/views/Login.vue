<template>
  <div>
    <h2 class="header">Login Form</h2>

    <form action="/" method="post">
      <div class="imgcontainer">
        <!-- <img src="img_avatar2.png" alt="Avatar" class="avatar"> -->
      </div>

      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required v-model="email">

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required v-model="password">

        <button type="submit" @click.prevent="submitForm">Login</button>
        <label>
          <input type="checkbox" name="remember"> Remember me <!--/checked="checked" -->
        </label>
      </div>

      <div class="container" >
        <button type="button" class="cancelbtn">Cancel</button>
        <router-link class="psw" :to="{name: 'Register'}">Register</router-link>
        <!-- <span class="psw"><a href="#">Forgot password?</a></span> -->
      </div>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    ...mapActions(['setToken']),
    async submitForm(){
      axios.defaults.headers.common['Authorization'] = ''

      localStorage.removeItem('token')

      const newData = {
        username: this.email,
        password: this.password
      }

      axios
      .post(`/auth/token/login`, newData)
      .then(response => {
        const token = response.data.auth_token

        this.setToken(token)
        axios.defaults.headers.common['Authorization'] = 'Token ' + token

        console.log(axios.defaults.headers.common['Authorization'])
        localStorage.setItem('token', token)
        console.log(localStorage.getItem('token'))

        this.$router.push('/')
      })
      .catch(err => console.log(err.response.data))
    }
  }
}
</script>

<style scoped>
/* body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;} */

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.header{
  align-items: center;
  justify-content: center;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
