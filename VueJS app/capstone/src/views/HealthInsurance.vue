<template>
  <div class="mainDiv">
   
    <div class="center">

      <h1 class="selectCoverage">Select Coverage</h1>
    
      <h3 class="coreHealth"> Core Health Benefits (These are automatically included in all packages)</h3>
      <br>
      <label class="container" for="prescriptionDrugs">Prescription Drugs
        <input type="checkbox" id="prescriptionDrugs" value="prescriptionDrugs" v-model="input.prescriptionCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="dental">Dental
        <input type="checkbox" id="dental" value="dental" v-model="input.dentalCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="studentAccident">Student Accident
        <input type="checkbox" id="studentAccident" value="studentAccident" v-model="input.studentCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="VIPtravel">VIP Travel
        <input type="checkbox" id="VIPtravel" value="VIPtravel" v-model="input.travelCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="hospitalCash">Hospital Cash
        <input type="checkbox" id="hospitalCash" value="hospitalCash" v-model="input.hospitalCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="criticalIllness">Critical Illness
        <input type="checkbox" id="criticalIllness" value="criticalIllness" v-model="input.illnessCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <label class="container" for="termLife">Term Life Insurance
        <input type="checkbox" id="termLife" value="termLife" v-model="input.lifeCheck">
        <span class="checkmark"></span>
      </label>
      <br>
      <button type="button" class="button" @click="getInsurers()">Search Insurance Brokers</button>
    </div>


    <div class="insurerDivs" v-bind:key="insurer.insurer_id" v-bind:index="index" v-for="(insurer, index) in insurers"> 

      <div v-bind:class="{insurerLogo: index == 0, insurerLogo2: index == 1, insurerLogo3: index == 2, insurerLogo4: index == 3}"></div>
      <div class="insurerName"><h1>insurer: {{insurer.insurer_name}}</h1></div>
      <div class="checkedAttributes">
        <h2>Your Selected Coverage</h2>
      </div>
      <div class="AttributePrescription">
        <h3>Prescription Drugs</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].prescriptionNull == true, hasInsurance: insurerClassBinds[index].prescriptionNull == false, notSelected: input.prescriptionCheck == false}"></div>
      </div>
       <div class="AttributeDental">
        <h3>Dental</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].dentalNull == true, hasInsurance: insurerClassBinds[index].dentalNull == false, notSelected: input.dentalCheck == false}"></div>
      </div>
       <div class="AttributeStudent">
        <h3>Student Accident</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].studentNull == true, hasInsurance: insurerClassBinds[index].studentNull == false, notSelected: input.studentCheck == false}"></div>
      </div>
       <div class="AttributeTravel">
        <h3>VIP Travel</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].travelNull == true, hasInsurance: insurerClassBinds[index].travelNull == false, notSelected: input.travelCheck == false}"></div>
      </div>
       <div class="AttributeHospital">
        <h3>Hospital Cash</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].hospitalNull == true, hasInsurance: insurerClassBinds[index].hospitalNull == false, notSelected: input.hospitalCheck == false}"></div>
      </div>
       <div class="AttributeIllness">
        <h3>Critical Illness</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].illnessNull == true, hasInsurance: insurerClassBinds[index].illnessNull == false, notSelected: input.illnessCheck == false}"></div>
      </div>
       <div class="AttributeLife">
        <h3>Term Life Insurance</h3>
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].lifeNull == true, hasInsurance: insurerClassBinds[index].lifeNull == false, notSelected: input.lifeCheck == false}"></div>
      </div>


      <div class="OurQuoteText">
        <h2>Our Estimated Quote:</h2> 
      </div>
      <div class="PeopleQuoteText">
        <h2>Average Estimate from the Community:</h2>
      </div>
      <div class="OurQuotePrice">
        <h2>${{quoteSums[index].sum}}</h2>
      </div>
      <div class="PeopleQuotePrice">
        <h2></h2>
      </div>


      <shareQuoteButton msg="Share your quote experience with this insurance provider here!"/>
      <externalButton msg="Go to this insurance providers website here"/>

      <div class="legendRedX">
        <h4> - means you selected this option, but the provider does not offer this coverage type.</h4>
      </div>

      <div class="legendGreenCheck">
        <h4> - means you selected this option and the provider offers this coverage type.</h4>
      </div>

       <div class="legendGreyDash">
        <h4> - means you did not select this coverage type to be searched for</h4>
      </div>

      <div class="legendRedXplaceholder">
        <div class="noInsurance"></div>
      </div>

      <div class="legendGreenCheckplaceholder">
        <div class="hasInsurance"></div>
      </div>

       <div class="legendGreyDashplaceholder">
        <div class="notSelected"></div>
      </div>


    </div>




  </div>
</template>




<script>

import shareQuoteButton from '@/components/shareQuote.vue'
import externalButton from '@/components/external.vue'
import axios from 'axios'

export default {
  


 name: 'HealthInsurance',
  components: {
    shareQuoteButton,
    externalButton
    
  },

  data() {
    
    return {
      input: {

        prescriptionCheck: false,
        dentalCheck: false,
        studentCheck: false,
        travelCheck: false,
        hospitalCheck: false,
        illnessCheck: false,
        lifeCheck: false

      },

      insurers: [],

      quoteSums: [

        {
          sum: 0.0
        },

        {
          sum: 0.0
        },

        {
          sum: 0.0
        },

        {
          sum: 0.0
        }
      ],


      insurerClassBinds: [

        {
          prescriptionNull: false,
          dentalNull: false,
          studentNull: false,
          travelNull: false,
          hospitalNull: false,
          illnessNull: false,
          lifeNull: false
        },
        
        {
          prescriptionNull: false,
          dentalNull: false,
          studentNull: false,
          travelNull: false,
          hospitalNull: false,
          illnessNull: false,
          lifeNull: false
        },


        { 
          prescriptionNull: false,
          dentalNull: false,
          studentNull: false,
          travelNull: false,
          hospitalNull: false,
          illnessNull: false,
          lifeNull: false
        },


        {
          prescriptionNull: false,
          dentalNull: false,
          studentNull: false,
          travelNull: false,
          hospitalNull: false,
          illnessNull: false,
          lifeNull: false
        },
      ],



      user_id: 0,
      msg: '',
      hover: false,

      bluecross_sum: 0.0,
      sunlife_sum: 0.0,
      insurer3_sum: 0.0,
      basic_insurance_sum: 0.0

    }

  },

  methods: {

    getInsurers() {

    axios.get(`http://162.253.11.179:3000/getInsurers`)
    .then((res) => {
    this.insurers = res.data;

    this.bluecross_sum = 0.0;
    this.sunlife_sum = 0.0;
    this.insurer3_sum = 0.0;
    this.basic_insurance_sum = 0.0;

    this.bluecross_sum = this.bluecross_sum + this.insurers[0].core_health;
    this.sunlife_sum = this.sunlife_sum + this.insurers[1].core_health;
    this.insurer3_sum = this.insurer3_sum + this.insurers[2].core_health;
    this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].core_health;


    if(this.input.prescriptionCheck) {
      if(this.insurers[0].prescription_drugs != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].prescription_drugs;
      this.insurerClassBinds[0].prescriptionNull = false;
      }
      else {
        this.insurerClassBinds[0].prescriptionNull = true;
      }

      if(this.insurers[1].prescription_drugs != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].prescription_drugs;
      this.insurerClassBinds[1].prescriptionNull = false;
      }
      else {
        this.insurerClassBinds[1].prescriptionNull = true;
      }

      if(this.insurers[2].prescription_drugs != null){
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].prescription_drugs;
      this.insurerClassBinds[2].prescriptionNull = false;
      }
      else {
        this.insurerClassBinds[2].prescriptionNull = true;
      }

      if(this.insurers[3].prescription_drugs != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].prescription_drugs;
      this.insurerClassBinds[3].prescriptionNull = false;
      }
      else {
        this.insurerClassBinds[3].prescriptionNull = true;
      }
    }









     if(this.input.dentalCheck) {
      if(this.insurers[0].dental != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].dental;
      this.insurerClassBinds[0].dentalNull = false;
      }
      else {
        this.insurerClassBinds[0].dentalNull = true;
      }


      if(this.insurers[1].dental != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].dental;
      this.insurerClassBinds[1].dentalNull = false;
      }
      else {
        this.insurerClassBinds[1].dentalNull = true;
      }


      if(this.insurers[2].dental != null) {
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].dental;
      this.insurerClassBinds[2].dentalNull = false;
      }
      else {
        this.insurerClassBinds[2].dentalNull = true;
      }


      if(this.insurers[3].dental != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].dental;
      this.insurerClassBinds[3].dentalNull = false;
      }
      else {
        this.insurerClassBinds[3].dentalNull = true;
      }
    }




     if(this.input.studentCheck) {
      if(this.insurers[0].student_accident != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].student_accident;
      this.insurerClassBinds[0].studentNull = false;
      }
      else {
        this.insurerClassBinds[0].studentNull = true;
      }


      if(this.insurers[1].student_accident != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].student_accident;
      this.insurerClassBinds[1].studentNull = false;
      }
      else {
        this.insurerClassBinds[1].studentNull = true;
      }


      if(this.insurers[2].student_accident != null) {
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].student_accident;
      this.insurerClassBinds[2].studentNull = false;
      }
      else {
        this.insurerClassBinds[2].studentNull = true;
      }


      if(this.insurers[3].student_accident != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].student_accident;
       this.insurerClassBinds[3].studentNull = false;
      }
      else {
         this.insurerClassBinds[3].studentNull = true;
      }
    }



    if(this.input.travelCheck) {
      if(this.insurers[0].vip_travel != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].vip_travel;
       this.insurerClassBinds[0].travelNull = false;
      }
      else {
        this.insurerClassBinds[0].travelNull = true;
      }


      if(this.insurers[1].vip_travel != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].vip_travel;
      this.insurerClassBinds[1].travelNull = false;
      }
      else {
        this.insurerClassBinds[1].travelNull = true;
      }


      if(this.insurers[2].vip_travel != null) {
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].vip_travel;
      this.insurerClassBinds[2].travelNull = false;
      }
      else {
        this.insurerClassBinds[2].travelNull = true;
      }


      if(this.insurers[3].vip_travel != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].vip_travel;
      this.insurerClassBinds[3].travelNull = false;
      }
      else {
        this.insurerClassBinds[3].travelNull = true;
      }
    }


     if(this.input.hospitalCheck) {
      if(this.insurers[0].hospital_cash != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].hospital_cash;
      this.insurerClassBinds[0].hospitalNull = false;
      }
      else {
        this.insurerClassBinds[0].hospitalNull = true;
      }


      if(this.insurers[1].hospital_cash != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].hospital_cash;
      this.insurerClassBinds[1].hospitalNull = false;
      }
      else {
        this.insurerClassBinds[1].hospitalNull = true;
      }


      if(this.insurers[2].hospital_cash != null) {
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].hospital_cash;
      this.insurerClassBinds[2].hospitalNull = false;
      }
      else {
        this.insurerClassBinds[2].hospitalNull = true;
      }


      if(this.insurers[3].hospital_cash != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].hospital_cash;
      this.insurerClassBinds[3].hospitalNull = false;
      }
      else {
        this.insurerClassBinds[3].hospitalNull = true;
      }
    }



    if(this.input.illnessCheck) {
      if(this.insurers[0].critical_illness != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].critical_illness;
      this.insurerClassBinds[0].illnessNull = false;
      }
      else {
        this.insurerClassBinds[0].illnessNull = true;
      }


      if(this.insurers[1].critical_illness != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].critical_illness;
      this.insurerClassBinds[1].illnessNull = false;
      }
      else {
        this.insurerClassBinds[1].illnessNull = true;
      }

      if(this.insurers[2].critical_illness != null) {
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].critical_illness;
      this.insurerClassBinds[2].illnessNull = false;
      }
      else {
        this.insurerClassBinds[2].illnessNull = true;
      }

      if(this.insurers[3].critical_illness != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].critical_illness;
      this.insurerClassBinds[3].illnessNull = false;
      }
      else {
        this.insurerClassBinds[3].illnessNull = true;
      }
    }


   if(this.input.lifeCheck) {
      if(this.insurers[0].term_life_insurance != null) {
      this.bluecross_sum = this.bluecross_sum + this.insurers[0].term_life_insurance;
      this.insurerClassBinds[0].lifeNull = false;
      }
      else {
        this.insurerClassBinds[0].lifeNull = true;
      }

      if(this.insurers[1].term_life_insurance != null) {
      this.sunlife_sum = this.sunlife_sum + this.insurers[1].term_life_insurance;
      this.insurerClassBinds[1].lifeNull = false;
      }
      else {
        this.insurerClassBinds[1].lifeNull = true;
      }


      if(this.insurers[2].term_life_insurance != null) {
      this.insurer3_sum = this.insurer3_sum + this.insurers[2].term_life_insurance;
      this.insurerClassBinds[2].lifeNull = false;
      }
      else {
        this.insurerClassBinds[2].lifeNull = true;
      }

      if(this.insurers[3].term_life_insurance != null) {
      this.basic_insurance_sum = this.basic_insurance_sum + this.insurers[3].term_life_insurance;
      this.insurerClassBinds[3].lifeNull = false;
      }
      else {
        this.insurerClassBinds[3].lifeNull = true;
      }
    }
 



    this.quoteSums[0].sum = this.bluecross_sum.toFixed(2);
    this.quoteSums[1].sum = this.sunlife_sum.toFixed(2);
    this.quoteSums[2].sum = this.insurer3_sum.toFixed(2);
    this.quoteSums[3].sum = this.basic_insurance_sum.toFixed(2);
    })



    .catch(err => {throw err;});

    }

  },

  created() {

    this.user_id = this.$route.params.user_id;

  }

}
</script>



<style scoped>

.legendGreyDashplaceholder {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -3.5%;
  margin-right: 9.3%;
  

}

.legendGreenCheckplaceholder {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -0.5%;
  margin-right: 43%;
  

}

.legendRedXplaceholder {

  width: 25%;
  height: 8%;
  float: left;
  margin-top: 0%;
  margin-left: 2%;
  

}



.legendGreyDash {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: 5.4%;
  margin-right: -58%;
  

}

.legendGreenCheck {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: 5%;
  margin-right: 40%;
  

}

.legendRedX {

  width: 25%;
  height: 8%;
  float: left;
  margin-top: 5%;
  margin-left: 4.3%;
  

}


.PeopleQuotePrice {

  width: 8%;
  height: 8%;
  float: right;
  margin-top: -26%;
  margin-right: 3%;
  text-align: left;
  

}

.OurQuotePrice {

  width: 8%;
  height: 8%;
  float: right;
  margin-top: -32%;
  margin-right: 3%;
  text-align: left;
  

}

.OurQuoteText {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -32%;
  margin-right: 12%;
  text-align: right;
  

}

.PeopleQuoteText {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -26%;
  margin-right: 12%;
  text-align: right;
  

}


.AttributePrescription {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -27.5%;
  margin-right: 42%;
 

}

.AttributeDental {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -23.5%;
  margin-right: 42%;
 

}

.AttributeStudent {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -19.5%;
  margin-right: 42%;
  

}

.AttributeTravel {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -15.5%;
  margin-right: 42%;
  

}

.AttributeHospital {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -11.5%;
  margin-right: 42%;
  

}

.AttributeIllness {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -7.5%;
  margin-right: 42%;
  

}

.AttributeLife {

  width: 25%;
  height: 8%;
  float: right;
  margin-top: -3.5%;
  margin-right: 42%;
  

}


.checkedAttributes {


  width: 25%;
  height: 8%;
  float: right;
  margin-top: -31.5%;
  margin-right: 42%;
  text-decoration:underline;
  


}


.insurerName {

  width: 25%;
  height: 10%;
  margin-top: 2%;
  margin-left: 2%;
  
  

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

.insurerLogo2 {

width: 25%;
height: 50%;
margin-top: 2%;
margin-left: 2%;
background-image: url(../assets/sunlife.jpg);
background-size:contain;
border: 1px solid black;
}

.insurerLogo3 {

width: 25%;
height: 50%;
margin-top: 2%;
margin-left: 2%;
background-image: url(../assets/CAA.png);
background-size:contain;
border: 1px solid black;
}

.insurerLogo4 {

width: 25%;
height: 50%;
margin-top: 2%;
margin-left: 2%;
background-image: url(../assets/surehealth.jpg);
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

.noInsurance {
	position: relative;
	width: 6%;
	height: 37.5%;
  margin-top: -11%;
  margin-left: 2%;
	border: 2px solid #eef5df;
	background-color: #ff5248;
	border-radius: 50%;
	}
.noInsurance::before, .noInsurance::after {
	position: absolute;
	top: 45%;
	left: 21%;
	width: 56%;
	height: 15%;
	content: "";
	background-color: #eef5df;
	display: block;
	}
.noInsurance::before {
	-ms-transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	}
.noInsurance::after {
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	}


.hasInsurance {
  float: left;
  transform: rotate(45deg);
  height: 40%;
  width: 3.1%;
  margin-top: -11%;
  margin-left: 4%;
  border-bottom: 7px solid #78b13f;
  border-right: 7px solid #78b13f;
}


.notSelected {
	position: relative;
	width: 6%;
	height: 37.5%;
  margin-top: -11%;
  margin-left: 2%;
	border: 2px solid #979797;
	background-color: #FFF;
	border-radius: 50%;
	}
.notselected::before, .notSelected::after {
	position: absolute;
	top: 45%;
	left: 21%;
	width: 56%;
	height: 15%;
	content: "";
	background-color: #979797;
	display: block;
	}
.notSelected::before {
	-ms-transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	}
.notSelected::after {
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	}







</style>

