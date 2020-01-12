<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <HomeButtons />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomeButtons from '@/components/HomeButtons.vue'


export default {
  name: 'home',
  components: {
    
    HomeButtons
  }
}
</script>


<style>

.home {

background-image: url(../assets/main-background.jpeg);
background-size: 100%;
height: 100%;
text-align: center;
}


</style>
