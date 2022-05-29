<template>
  <div class="app">

    <Navigation />
    <router-view/>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  overflow: show;
  /* overflow:hidden; */
}

.app{
  width: 1349px;
  /* height: 1406px; */
}

.container{
  width: 1050px;
  box-sizing: border-box;
  margin: 0 auto;
}


a{
  text-decoration: none;
  list-style: none;
  color: #303030;
  cursor: pointer;
}

button{
  cursor: pointer;
  border: none;
  background-color: #fff;
}

h1,h2,h3,h4,h5,h6, option{
  cursor: pointer;
}
</style>
