<template>
  <div class="home">
    <div class="top-buffer">
    </div>
   <div id="top-row-button" >

     <HomeButtons 
     msg='Package deal' 
     class="middle"
     background='packageDealBG.jpg'
     @mouseover.native="hover = true" 
     @mouseleave.native="hover = false" 
     id="packageDeal"
     @click.native="$router.push('/about')"/>

   </div>
    
    <div id="left-side-buttons">
     <HomeButtons msg='Health Insurance' class="left" id="Health-Insurance"/>
     <HomeButtons msg='Presciption drugs insurance' class="left" id="Prescription"/>
    </div>
    
    <div id="right-side-buttons">
      <HomeButtons msg='Dental insurance' class="right" id="Dental-Insurance"/>
      <HomeButtons msg='vision insurance' class="right" id="Vision-Insurance"/>
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

      msg: '',
      background: '',
      hover: false
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


.top-buffer {
height: 20%;

}

.middle {
margin-left: 25%;
margin-bottom: 3%;

}


.left {
margin-left: 13%;
margin-bottom: 3%;

}

.right {
margin-bottom: 3%;
  
}


#top-row-button {
width: 30%;
height: 15%;
margin-left: 10%;
margin-bottom: 1%;

}


#left-side-buttons {
width: 30%;
height: 15%;
float:left;


}

#right-side-buttons {
  width: 30%;
  height: 15%;
  float:right;
  margin-right: 40%;
  
  
}


#packageDeal {
  background-image: url(../assets/packageDealBG.jpg);
  background-size: 100%;
  
}

#Health-Insurance {
  background-image: url(../assets/healthInsuranceBG.jpg);
  background-size: 100%;
}

#Prescription {
  background-image: url(../assets/drugsBG.png);
  background-size: 100%;
}

#Dental-Insurance {
  background-image: url(../assets/dentalBG.png);
  background-size: 100%;
}

#Vision-Insurance {
  background-image: url(../assets/visionBG.jpg);
  background-size: 100%;
}

</style>
