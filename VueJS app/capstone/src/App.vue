<template>
  <div id="app">
    <div id="nav" >
      <ProfileButton />
      <router-link to="/">Home</router-link> 
      <router-link to="/HealthInsurance">HealthInsurance</router-link>
      <router-link to="/login">Login</router-link>
      <h3 @click="$router.push('/')">Care Compare</h3>
    </div>
    <router-view/>
  </div>
</template>



<script>

import ProfileButton from '@/components/ProfileButton.vue'


export default {
  name: 'app',
  components: {

    ProfileButton
  }

}
</script>







<style>


#app {
height: 100%;
text-align: center;
}


#nav {
  height: 10%;
  background-image: url(assets/croppedBanner.png);
  background-size: cover;
  overflow: hidden;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

#nav a {
  font-weight: bold;
  color: #1e5fa0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h3 {

font-size: 1.8vw;
cursor: pointer;
}


</style>
