<template>
  <div id="app">
    <div id="nav">
      <ProfileButton class="sidenav"/>
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
  },
   data()  {
        return {
                         
        };
    }
}
</script>


<style>

.sidenav:hover {
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 100%;
  
}

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
position: relative;
left: 0%;
font-size: 1.8vw;
cursor: pointer;
}


</style>
