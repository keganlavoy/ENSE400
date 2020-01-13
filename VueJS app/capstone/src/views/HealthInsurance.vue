<template>
  <div class="HealthInsurance">
   
    <div class="center">

     <div class="left-side">

       <InsuranceButton msg="Basic Plans"/>
       <p>
         View basic plans that cover common health benefits
       </p>

     </div>

      <div class="divider">

      </div>

     <div class="right-side">
       <InsuranceButton msg="Custom Plans"/>

        <p>
          Create a custom plan with a variety of options to fit your needs
        </p>

     </div>
  
    </div>

  </div>
</template>




<script>
import InsuranceButton from '@/components/InsuranceButton.vue'


export default {
  
 name: 'HealthInsurance',
  components: {
    
    InsuranceButton
  },

  data() {

    return {

      msg: '',
      hover: false
    }

  }

}
</script>



<style scoped>

.HealthInsurance {
background-image: url(../assets/main-background.jpeg);
background-size: cover;
height: 100%;
overflow: hidden;
text-align: center;

}


.left-side {

width: 40%;
height: 100%;
margin-left: 6%;
margin-top: 3%;
float: left;

}

.right-side {

width: 40%;
height: 100%;
margin-right: 6%;
margin-top: 3%;
float: right;

}

.center {

width: 80%;
height: 40%;
margin-left: 10%;
margin-right: 10%;
margin-top: 4%;
background-image: url(../assets/InsureButtonBG.jpg);
background-size: cover;
border-radius: 5vh;
border: 1px solid black;


}

.divider {

width: 1px;
height: 95%;
border-left: 3px solid black;
float: left;
margin-left: 4.5%;
margin-top: 0.8%;

}


p {

font-size: 2.75em;
text-align: center;
}


</style>

