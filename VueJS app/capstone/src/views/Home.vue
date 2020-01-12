<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="I changed the prop"/>
    <HomeButtons />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeButtons from '@/components/HomeButtons.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    HomeButtons
  }
}
</script>
