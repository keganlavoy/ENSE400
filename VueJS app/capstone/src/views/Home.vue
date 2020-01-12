<template>
  <div class="home">
    <div id="top-buffer">
    </div>
   <div id="top-row-button"><HomeButtons msg='Package deal' class="middle"/></div>
    
    <div id="left-side-buttons">
     <HomeButtons msg='Health Insurance' class="left"/>
     <HomeButtons msg='Presciption drugs insurance' class="left"/>
    </div>
    
    <div id="right-side-buttons">
      <HomeButtons msg='Dental insurance' class="right"/>
      <HomeButtons msg='vision insurance' class="right"/>
    </div>
    
    
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
  },

  data() {

    return {

      msg: ''

    }

  }
}
</script>


<style>

.home {
background-image: url(../assets/main-background.jpeg);
background-size: cover;
height: 100%;
overflow: hidden;
text-align: center;

}


#top-buffer {
height: 200px;

}

.middle {
margin-left: 20%;
margin-bottom: 1.5%;

}


.left {
margin-left: 5%;
margin-bottom: 5%;

}

.right {
margin-bottom: 5%;
  
}


#left-side-buttons {
width: 30%;
float:left;

}

#right-side-buttons {
  width: 30%;
  float:right;
  margin-right: 35%;
  
}


</style>
