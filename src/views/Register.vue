<template>
  <div>
    <form action="/">
      <div class="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required v-model="email">

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required v-model="password">

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required v-model="password2">
        <hr>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a></p>

        <button type="submit" class="registerbtn" @click.prevent="submitForm">Register</button>
      </div>

      <div class="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data: () => ({
    email: '',
    password: '',
    password2: ''
  }),
  mounted(){
    if (localStorage.email && localStorage.password) {
      this.email = localStorage.email
      this.password = localStorage.password
      console.log(this.email, this.password)
    }
  },
  methods: {
    submitForm(){
      if(this.email === ''){
        console.log(`the email is empty`)
      }
      if(this.password === ''){
        console.log(`the password is empty`)
      }
      if(this.password !== this.password2){
        console.log(`the password is not same`)
      }

      const newData = {
        username: this.email,
        password: this.password
      }

      axios
      .post(`/auth/users/`, newData)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>