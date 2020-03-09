<template>
  <div class="mainDiv">
   
    <div class="center">

      <h1 class="selectCoverage">Select Coverage</h1>
    
      <h3 class="coreHealth"> Core Health Benefits (These are automatically included in all packages)</h3>
      <br>
      <label class="container" for="prescriptionDrugs">Prescription Drugs
        <input type="checkbox" id="prescriptionDrugs" value="prescriptionDrugs" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="dental">Dental
        <input type="checkbox" id="dental" value="dental" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="studentAccident">Student Accident
        <input type="checkbox" id="studentAccident" value="studentAccident" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="VIPtravel">VIP Travel
        <input type="checkbox" id="VIPtravel" value="VIPtravel" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="hospitalCash">Hospital Cash
        <input type="checkbox" id="hospitalCash" value="hospitalCash" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="criticalIllness">Critical Illness
        <input type="checkbox" id="criticalIllness" value="criticalIllness" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="termLife">Term Life Insurance
        <input type="checkbox" id="termLife" value="termLife" v-model="checkedNames">
        <span class="checkmark"></span>
      </label>
      <br>
      <button type="button" class="button" >Search Insurance Brokers</button>
    </div>


    <div class="insurerDivs"> 

      <div class="insurerLogo"></div>
      <div class="insurerName"></div>
      <div class="checkedAttributes">
        <p>Your Selected Coverage</p>
      </div>
      <div class="AttributePrescription">
        <p>Prescription Drugs</p>
      </div>
       <div class="AttributeDental">
        <p>Dental</p>
      </div>
       <div class="AttributeStudent">
        <p>Stident Accident</p>
      </div>
       <div class="AttributeTravel">
        <p>VIP Travel</p>
      </div>
       <div class="AttributeHospital">
        <p>Hospital Cash</p>
      </div>
       <div class="AttributeIllness">
        <p>Critical Illness</p>
      </div>
       <div class="AttributeLife">
        <p>Term Life Insurance</p>
      </div>


      <div class="OurQuoteText">
        <h2>Our Estimated Quote:</h2>
      </div>
      <div class="PeopleQuoteText">
        <h2>Other People's Estimated Quote:</h2>
      </div>

      <shareQuoteButton msg="Share your quote experience with this insurance provider here!"/>
      <externalButton msg="Go to this insurance providers website here"/>
    </div>




  </div>
</template>




<script>

import shareQuoteButton from '@/components/shareQuote.vue'
import externalButton from '@/components/external.vue'

export default {
  


 name: 'HealthInsurance',
  components: {
    shareQuoteButton,
    externalButton
    
  },

  data() {
    
    return {
      checkedNames: [],
      insurers: [],
      user_id: 0,
      msg: '',
      hover: false


    }

  },

  created() {

    this.user_id = this.$route.params.user_id;

  }

}
</script>



<style scoped>

.OurQuoteText {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -32%;
  margin-right: 12%;
  text-align: right;
  border: 1px solid black;

}

.PeopleQuoteText {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -26%;
  margin-right: 12%;
  text-align: right;
  border: 1px solid black;

}


.AttributePrescription {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -27.5%;
  margin-right: 42%;
  border: 1px solid black;

}

.AttributeDental {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -23.5%;
  margin-right: 42%;
  border: 1px solid black;

}

.AttributeStudent {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -19.5%;
  margin-right: 42%;
  border: 1px solid black;

}

.AttributeTravel {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -15.5%;
  margin-right: 42%;
  border: 1px solid black;

}

.AttributeHospital {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -11.5%;
  margin-right: 42%;
  border: 1px solid black;

}

.AttributeIllness {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -7.5%;
  margin-right: 42%;
  border: 1px solid black;

}

.AttributeLife {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -3.5%;
  margin-right: 42%;
  border: 1px solid black;

}


.checkedAttributes {


  width: 25%;
  height: 8%;
  float: right;
  margin-top: -31.5%;
  margin-right: 42%;
  border: 1px solid black;
  


}


.insurerName {

  width: 25%;
  height: 10%;
  margin-top: 2%;
  margin-left: 2%;
  border: 1px solid black;
  

}


.insurerLogo {

width: 25%;
height: 50%;
margin-top: 2%;
margin-left: 2%;
background-image: url(../assets/bluecross.png);
background-size:contain;
border: 1px solid black;
}


.insurerDivs {

width: 80%;
height: 80%;
margin-left: 10%;
margin-top: 4%;
margin-bottom: 2%;
background-image: url(../assets/InsureButtonBG.jpg);
background-size: cover;
border-radius: 5vh;
border: 1px solid black;

}



.coreHealth {
left: 0%;
font-size: 1.8vw;
text-align: center;
margin-left: 5%;
}

.selectCoverage {

  text-align: center;
  text-decoration: underline;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.center {

width: 80%;
height: 90%;
margin-left: 10%;
margin-top: 4%;
background-image: url(../assets/InsureButtonBG.jpg);
background-size: cover;
border-radius: 5vh;
border: 1px solid black;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 40%;
  height: 25px;
  width: 25px;
  background-color: rgb(54, 49, 49);
  border-radius: 50%;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

