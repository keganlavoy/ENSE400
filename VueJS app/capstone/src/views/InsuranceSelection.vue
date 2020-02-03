<template>
  <div class="InsuranceSelection">




    <div class="left-gray"></div>
    <div class="right-gray"></div>


   <div id="top-row-button" >

     <HomeButtons msg='Package Deal' class="middle"  @mouseover.native="hover = true" @mouseleave.native="hover = false" id="packageDeal" @click.native="$router.push('/PackageInsurance')"/>

   </div>
    
    <div id="left-side-buttons">
     <HomeButtons msg='Health Insurance' class="left" id="Health-Insurance" @click.native="$router.push('/HealthInsurance')"/>
     <HomeButtons msg='Presciption Drugs Insurance' class="left" id="Prescription" @click.native="$router.push('/PrescriptionInsurance')"/>
    </div>
    
    <div id="right-side-buttons">
      <HomeButtons msg='Dental Insurance' class="right" id="Dental-Insurance" @click.native="$router.push('/DentalInsurance')"/>
      <HomeButtons msg='Vision Insurance' class="right" id="Vision-Insurance" @click.native="$router.push('/VisionInsurance')"/>
    </div>
   

    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomeButtons from '@/components/HomeButtons.vue'


export default {
  name: 'InsuranceSelection',
  components: {
    
    HomeButtons
  },

  data() {

    return {

      msg: '',
      hover: false
    }

  }
}
</script>


<style>

.InsuranceSelection {

background-size: cover;
height: 100%;
overflow: hidden;
text-align: center;


}


.top-buffer {
height: 20%;

}

.middle {

margin-bottom: 3%;

}


.left {

margin-bottom: 3%;

}

.right {
margin-bottom: 3%;
  
}


#top-row-button {
width: 24%;
height: 15%;
margin-left: 38%;
margin-top: 8%;
margin-bottom: 1%;

}


#left-side-buttons {
width: 24%;
height: 15%;
margin-left: 7%;
float:left;


}

#right-side-buttons {
  width: 24%;
  height: 15%;
  float:right;
  margin-right: 7%;
 
  
}

.left-gray {

width: 18%;
height: 100%;
float: left;
background-color: rgb(243, 243, 243);

}

.right-gray {

width: 18%;
height: 100%;
float: right;
background-color: rgb(243, 243, 243);
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
