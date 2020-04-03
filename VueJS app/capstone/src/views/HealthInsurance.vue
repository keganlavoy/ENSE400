<template>
  <div class="mainDivHealth">
   
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
      <button type="button" class="button" @click="$router.push(`/Dashboard/${user_id}`)">Back to dashboard</button>
    </div>


    <div class="insurerDivs" v-bind:key="insurer.insurer_id" v-bind:index="index" v-for="(insurer, index) in insurers"> 

      <div v-bind:class="{insurerLogo: index == 0, insurerLogo2: index == 1, insurerLogo3: index == 2, insurerLogo4: index == 3}"></div>
      <div class="insurerName"><h1 class="HealthInsuranceH1">Insurer: {{insurer.insurer_name}}</h1></div>
      <div class="checkedAttributes">
        <h2>Your Selected Coverage</h2>
      </div>
      <div class="AttributePrescription">
        <div v-bind:class="{ noInsurance: insurerClassBinds[index].prescriptionNull == true, hasInsurance: insurerClassBinds[index].prescriptionNull == false, notSelected: input.prescriptionCheck == false}"></div>
        <h3 class="HealthInsuranceH3">Prescription Drugs</h3>        
      </div>
       <div class="AttributeDental">
         <div v-bind:class="{ noInsurance: insurerClassBinds[index].dentalNull == true, hasInsurance: insurerClassBinds[index].dentalNull == false, notSelected: input.dentalCheck == false}"></div>
        <h3 class="HealthInsuranceH3">Dental</h3>        
      </div>
       <div class="AttributeStudent">
         <div v-bind:class="{ noInsurance: insurerClassBinds[index].studentNull == true, hasInsurance: insurerClassBinds[index].studentNull == false, notSelected: input.studentCheck == false}"></div>
        <h3 class="HealthInsuranceH3">Student Accident</h3>        
      </div>
       <div class="AttributeTravel">
         <div v-bind:class="{ noInsurance: insurerClassBinds[index].travelNull == true, hasInsurance: insurerClassBinds[index].travelNull == false, notSelected: input.travelCheck == false}"></div>
        <h3 class="HealthInsuranceH3">VIP Travel</h3>        
      </div>
       <div class="AttributeHospital">
         <div v-bind:class="{ noInsurance: insurerClassBinds[index].hospitalNull == true, hasInsurance: insurerClassBinds[index].hospitalNull == false, notSelected: input.hospitalCheck == false}"></div>
        <h3 class="HealthInsuranceH3">Hospital Cash</h3>        
      </div>
       <div class="AttributeIllness">
         <div v-bind:class="{ noInsurance: insurerClassBinds[index].illnessNull == true, hasInsurance: insurerClassBinds[index].illnessNull == false, notSelected: input.illnessCheck == false}"></div>
        <h3 class="HealthInsuranceH3">Critical Illness</h3>        
      </div>
       <div class="AttributeLife">
         <div v-bind:class="{ noInsurance: insurerClassBinds[index].lifeNull == true, hasInsurance: insurerClassBinds[index].lifeNull == false, notSelected: input.lifeCheck == false}"></div>
        <h3 class="HealthInsuranceH3">Term Life Insurance</h3>        
      </div>


      <div class="OurQuoteText">
        <h2 class="HealthInsuranceH2"> Our Estimated Quote:</h2> 
      </div>
      <div class="PeopleQuoteText">
        <h2 class="HealthInsuranceH2">Average Estimate using selected features from the Community:</h2>
      </div>
       <div class="PeopleQuoteTextAverage">
        <h2 class="HealthInsuranceH2">Average Estimate Quote from the Community:</h2>
      </div>
      <div class="OurQuotePrice">
        <h2 class="HealthInsuranceH2">${{quoteSums[index].OurQuoteSum}}</h2>
      </div>
      <div class="PeopleQuotePrice">
        <h2 class="HealthInsuranceH2">${{quoteSums[index].UserQuoteSelectedAverage}}</h2>
      </div>
      <div class="PeopleQuotePriceAverage">
        <h2 class="HealthInsuranceH2">${{quoteSums[index].UserQuoteAverage}}</h2>
      </div>

      <button type="button" class="button" id="shareExp" @click="$router.push(`/UserInputQuotes/${user_id}`)">Share your experience with {{insurer.insurer_name}} here!</button>
      <button type="button" class="button" id="gotoInsurer" @click="$router.push(`/Dashboard/${user_id}`)">Go to {{insurer.insurer_name}}'s website!</button>
      

      <div class="legendRedXplaceholder">
        <div class="noInsurance"></div>
      </div>

      <div class="legendRedX">
        <h4> - You selected this option, but we do not have access to the providers data for this type of insurance</h4>
      </div>

      <div class="legendGreenCheckplaceholder">
        <div class="hasInsurance"></div>
      </div>

      <div class="legendGreenCheck">
        <h4> - You selected this option and we have access to the providers data for this type of insurance</h4>
      </div>

      <div class="legendGreyDashplaceholder">
        <div class="notSelected"></div>
      </div>

       <div class="legendGreyDash">
        <h4> - You did not select this coverage type to be searched</h4>
      </div>
     
    </div>
    
    <div class="getQuotesFooter">

    </div>

  </div>
</template>




<script>

//import shareQuoteButton from '@/components/shareQuote.vue'
//import externalButton from '@/components/external.vue'
import axios from 'axios'

export default {


 name: 'HealthInsurance',
  components: {

    
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
      user_quotes_blue_cross: [],
      user_quotes_sunlife: [],
      user_quotes_caa: [],
      user_quotes_sure_health: [],

      quoteSums: [

        {
          OurQuoteSum: 0.0,
          UserQuoteAverage: 0.0,
          UserQuoteSelectedAverage: 0.0
        },

        {
          OurQuoteSum: 0.0,
          UserQuoteAverage: 0.0,
          UserQuoteSelectedAverage: 0.0
        },

        {
          OurQuoteSum: 0.0,
          UserQuoteAverage: 0.0,
          UserQuoteSelectedAverage: 0.0
        },

        {
          OurQuoteSum: 0.0,
          UserQuoteAverage: 0.0,
          UserQuoteSelectedAverage: 0.0
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
      CAA_sum: 0.0,
      sureHealth_sum: 0.0,

      bluecross_UserQuote_sum: 0.0,
      sunlife_UserQuote_sum: 0.0,
      CAA_UserQuote_sum: 0.0,
      sureHealth_UserQuote_sum: 0.0,


      bluecross_UserQuote_total: 0.0,
      sunlife_UserQuote_total: 0.0,
      CAA_UserQuote_total: 0.0,
      sureHealth_UserQuote_total: 0.0,

      blueCrossCount: 0,
      sunlifeCount: 0,
      caaCount: 0,
      sureHealthCount: 0,
      
     

    }

  },

  methods: {

    getInsurers() {

    
    
  
  

    axios.get(`http://162.253.11.179:3000/getInsurers`)
    .then((res) => {
    this.insurers = res.data;

    this.bluecross_sum = 0.0;
    this.sunlife_sum = 0.0;
    this.CAA_sum = 0.0;
    this.sureHealth_sum = 0.0;

    this.bluecross_UserQuote_sum = 0.0;
    this.sunlife_UserQuote_sum = 0.0;
    this.CAA_UserQuote_sum = 0.0;
    this.sureHealth_UserQuote_sum = 0.0;



    this.bluecross_sum = this.bluecross_sum + this.insurers[0].core_health;
    this.sunlife_sum = this.sunlife_sum + this.insurers[1].core_health;
    this.CAA_sum = this.CAA_sum + this.insurers[2].core_health;
    this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].core_health;


    this.bluecross_UserQuote_sum = this.bluecross_UserQuote_sum + this.insurers[0].core_health;
    this.sunlife_UserQuote_sum = this.sunlife_UserQuote_sum + this.insurers[1].core_health;
    this.CAA_UserQuote_sum = this.CAA_UserQuote_sum + this.insurers[2].core_health;
    this.sureHealth_UserQuote_sum = this.sureHealth_UserQuote_sum + this.insurers[3].core_health;


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
      this.CAA_sum = this.CAA_sum + this.insurers[2].prescription_drugs;
      this.insurerClassBinds[2].prescriptionNull = false;
      }
      else {
        this.insurerClassBinds[2].prescriptionNull = true;
      }

      if(this.insurers[3].prescription_drugs != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].prescription_drugs;
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
      this.CAA_sum = this.CAA_sum + this.insurers[2].dental;
      this.insurerClassBinds[2].dentalNull = false;
      }
      else {
        this.insurerClassBinds[2].dentalNull = true;
      }


      if(this.insurers[3].dental != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].dental;
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
      this.CAA_sum = this.CAA_sum + this.insurers[2].student_accident;
      this.insurerClassBinds[2].studentNull = false;
      }
      else {
        this.insurerClassBinds[2].studentNull = true;
      }


      if(this.insurers[3].student_accident != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].student_accident;
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
      this.CAA_sum = this.CAA_sum + this.insurers[2].vip_travel;
      this.insurerClassBinds[2].travelNull = false;
      }
      else {
        this.insurerClassBinds[2].travelNull = true;
      }


      if(this.insurers[3].vip_travel != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].vip_travel;
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
      this.CAA_sum = this.CAA_sum + this.insurers[2].hospital_cash;
      this.insurerClassBinds[2].hospitalNull = false;
      }
      else {
        this.insurerClassBinds[2].hospitalNull = true;
      }


      if(this.insurers[3].hospital_cash != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].hospital_cash;
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
      this.CAA_sum = this.CAA_sum + this.insurers[2].critical_illness;
      this.insurerClassBinds[2].illnessNull = false;
      }
      else {
        this.insurerClassBinds[2].illnessNull = true;
      }

      if(this.insurers[3].critical_illness != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].critical_illness;
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
      this.CAA_sum = this.CAA_sum + this.insurers[2].term_life_insurance;
      this.insurerClassBinds[2].lifeNull = false;
      }
      else {
        this.insurerClassBinds[2].lifeNull = true;
      }

      if(this.insurers[3].term_life_insurance != null) {
      this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].term_life_insurance;
      this.insurerClassBinds[3].lifeNull = false;
      }
      else {
        this.insurerClassBinds[3].lifeNull = true;
      }
    }
 



    this.quoteSums[0].OurQuoteSum = this.bluecross_sum.toFixed(2);
    this.quoteSums[1].OurQuoteSum = this.sunlife_sum.toFixed(2);
    this.quoteSums[2].OurQuoteSum = this.CAA_sum.toFixed(2);
    this.quoteSums[3].OurQuoteSum = this.sureHealth_sum.toFixed(2);





    var tempAverage = 0.0;
    var counter = 0;

    if(this.input.prescriptionCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].prescription_drugs != 0) {
          tempAverage += this.user_quotes_blue_cross[i].prescription_drugs;
          counter++;
          /* eslint-disable no-console */
          console.log(tempAverage)
        }
      }

      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2);
      this.bluecross_UserQuote_sum += parseFloat(tempAverage);

  
      counter = 0;
      tempAverage = 0.0;

      for(let i = 0; i < this.sunlifeCount; i++) {
      /* eslint-disable no-console */
      console.log(this.sunlifeCount)
        if(this.user_quotes_sunlife[i].prescription_drugs != 0) {
          tempAverage += this.user_quotes_sunlife[i].prescription_drugs;
          counter++;
          /* eslint-disable no-console */
          console.log(tempAverage)
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2);
      this.sunlife_UserQuote_sum += parseFloat(tempAverage);


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].prescription_drugs != 0) {
          tempAverage += this.user_quotes_caa[i].prescription_drugs
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].prescription_drugs != 0) {
          tempAverage += this.user_quotes_sure_health[i].prescription_drugs
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)

    }
    



      tempAverage = 0.0
      counter = 0

    

    if(this.input.dentalCheck) {



      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].dental != 0) {
          tempAverage += this.user_quotes_blue_cross[i].dental
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.bluecross_UserQuote_sum += parseFloat(tempAverage)



      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].dental != 0) {
          tempAverage += this.user_quotes_sunlife[i].dental
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sunlife_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].dental != 0) {
          tempAverage += this.user_quotes_caa[i].dental
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].dental != 0) {
          tempAverage += this.user_quotes_sure_health[i].dental
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)
    }




    tempAverage = 0.0
    counter = 0

    if(this.input.studentCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].student_accident != 0) {
          tempAverage += this.user_quotes_blue_cross[i].student_accident
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.bluecross_UserQuote_sum += parseFloat(tempAverage)



      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].student_accident != 0) {
          tempAverage += this.user_quotes_sunlife[i].student_accident
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sunlife_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].student_accident != 0) {
          tempAverage += this.user_quotes_caa[i].student_accident
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].student_accident != 0) {
          tempAverage += this.user_quotes_sure_health[i].student_accident
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)

    }


    tempAverage = 0.0
    counter = 0

    if(this.input.travelCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].vip_travel != 0) {
          tempAverage += this.user_quotes_blue_cross[i].vip_travel
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.bluecross_UserQuote_sum += parseFloat(tempAverage)



      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].vip_travel != 0) {
          tempAverage += this.user_quotes_sunlife[i].vip_travel
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sunlife_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].vip_travel != 0) {
          tempAverage += this.user_quotes_caa[i].vip_travel
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)

      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].vip_travel != 0) {
          tempAverage += this.user_quotes_sure_health[i].vip_travel
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)

    }


    tempAverage = 0.0
    counter = 0

    if(this.input.hospitalCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].hospital_cash != 0) {
          tempAverage += this.user_quotes_blue_cross[i].hospital_cash
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.bluecross_UserQuote_sum += parseFloat(tempAverage)



      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].hospital_cash != 0) {
          tempAverage += this.user_quotes_sunlife[i].hospital_cash
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sunlife_UserQuote_sum += parseFloat(tempAverage)

      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].hospital_cash != 0) {
          tempAverage += this.user_quotes_caa[i].hospital_cash
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].hospital_cash != 0) {
          tempAverage += this.user_quotes_sure_health[i].hospital_cash
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)

    }


    tempAverage = 0.0
    counter = 0

    if(this.input.illnessCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].critical_illness != 0) {
          tempAverage += this.user_quotes_blue_cross[i].critical_illness
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.bluecross_UserQuote_sum += parseFloat(tempAverage)



      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].critical_illness != 0) {
          tempAverage += this.user_quotes_sunlife[i].critical_illness
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sunlife_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].critical_illness != 0) {
          tempAverage += this.user_quotes_caa[i].critical_illness
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].critical_illness != 0) {
          tempAverage += this.user_quotes_sure_health[i].critical_illness
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)

    }


    tempAverage = 0.0
    counter = 0

    if(this.input.lifeCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].term_life_insurance != 0) {
          tempAverage += this.user_quotes_blue_cross[i].term_life_insurance
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.bluecross_UserQuote_sum += parseFloat(tempAverage)



      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].term_life_insurance != 0) {
          tempAverage += this.user_quotes_sunlife[i].term_life_insurance
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sunlife_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.caaCount; i++) {
        if(this.user_quotes_caa[i].term_life_insurance != 0) {
          tempAverage += this.user_quotes_caa[i].term_life_insurance
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.CAA_UserQuote_sum += parseFloat(tempAverage)


      counter = 0
      tempAverage = 0

      for(let i = 0; i < this.sureHealthCount; i++) {
        if(this.user_quotes_sure_health[i].term_life_insurance != 0) {
          tempAverage += this.user_quotes_sure_health[i].term_life_insurance
          counter++
        }
      }
      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2)
      this.sureHealth_UserQuote_sum += parseFloat(tempAverage)

    }

    this.quoteSums[0].UserQuoteSelectedAverage = this.bluecross_UserQuote_sum.toFixed(2)
    this.quoteSums[1].UserQuoteSelectedAverage = this.sunlife_UserQuote_sum.toFixed(2)
    this.quoteSums[2].UserQuoteSelectedAverage = this.CAA_UserQuote_sum.toFixed(2)
    this.quoteSums[3].UserQuoteSelectedAverage = this.sureHealth_UserQuote_sum.toFixed(2)

  
    })



    .catch(err => {throw err;});

    }

  },

  created() {

    this.user_id = this.$route.params.user_id;

    var i = 0;
   
    

    axios.get(`http://162.253.11.179:3000/getUserQuotesBlueCross`)
    .then(res => this.user_quotes_blue_cross = res.data)
    .catch(err => {throw err;});




    axios.get(`http://162.253.11.179:3000/getUserQuotesBlueCrossCount`)
    .then((res) => {
      this.blueCrossCount = res.data[0].countValue

       while(this.user_quotes_blue_cross[0].total_quote == undefined){
        i++
      }

      for(i = 0; i < this.blueCrossCount; i++)
      this.bluecross_UserQuote_total += this.user_quotes_blue_cross[i].total_quote

      this.bluecross_UserQuote_total = this.bluecross_UserQuote_total / this.blueCrossCount.toFixed(1)
      this.bluecross_UserQuote_total = this.bluecross_UserQuote_total.toFixed(2)
      this.quoteSums[0].UserQuoteAverage = this.bluecross_UserQuote_total
    })
    .catch(err => {throw err;});



    axios.get(`http://162.253.11.179:3000/getUserQuotesSunlife`)
    .then(res => this.user_quotes_sunlife = res.data)
    .catch(err => {throw err;});

    axios.get(`http://162.253.11.179:3000/getUserQuotesSunlifeCount`)
    .then((res) => {
      this.sunlifeCount = res.data[0].countValue

       while(this.user_quotes_sunlife[0].total_quote == undefined){
        i++
      }

      for(i = 0; i < this.sunlifeCount; i++)
      this.sunlife_UserQuote_total += this.user_quotes_sunlife[i].total_quote

      this.sunlife_UserQuote_total = this.sunlife_UserQuote_total / this.sunlifeCount.toFixed(1)
      this.sunlife_UserQuote_total = this.sunlife_UserQuote_total.toFixed(2)
      this.quoteSums[1].UserQuoteAverage = this.sunlife_UserQuote_total
    })
    .catch(err => {throw err;});


    axios.get(`http://162.253.11.179:3000/getUserQuotesCAA`)
    .then(res => this.user_quotes_caa = res.data)
    .catch(err => {throw err;});

    axios.get(`http://162.253.11.179:3000/getUserQuotesCAACount`)
    .then((res) => {

      this.caaCount = res.data[0].countValue

       while(this.user_quotes_caa[0].total_quote == undefined){
        i++
      }

      for(i = 0; i < this.caaCount; i++)
        this.CAA_UserQuote_total += this.user_quotes_caa[i].total_quote

      this.CAA_UserQuote_total = this.CAA_UserQuote_total / this.caaCount.toFixed(1)
      this.CAA_UserQuote_total = this.CAA_UserQuote_total.toFixed(2)
      this.quoteSums[2].UserQuoteAverage = this.CAA_UserQuote_total
    })
    .catch(err => {throw err;});



    axios.get(`http://162.253.11.179:3000/getUserQuotesSureHealth`)
    .then(res => this.user_quotes_sure_health = res.data)
    .catch(err => {throw err;});

    axios.get(`http://162.253.11.179:3000/getUserQuotesSureHealthCount`)
    .then((res) => {
      this.sureHealthCount = res.data[0].countValue
      
      while(this.user_quotes_sure_health[0].total_quote == undefined){
        i++
      }

      for(i = 0; i < this.sureHealthCount; i++)
      this.sureHealth_UserQuote_total += this.user_quotes_sure_health[i].total_quote

      this.sureHealth_UserQuote_total = this.sureHealth_UserQuote_total / this.sureHealthCount.toFixed(1)
      this.sureHealth_UserQuote_total = this.sureHealth_UserQuote_total.toFixed(2)
      this.quoteSums[3].UserQuoteAverage = this.sureHealth_UserQuote_total
    })
    .catch(err => {throw err;});




  }

}
</script>


<style scoped>

.legendRedXplaceholder, .legendGreenCheckplaceholder, .legendGreyDashplaceholder {
  width: 3%;
  height: 8%;
  float: left;
  margin-top: 40px;
  margin-left: 3%;
}

.legendRedX, .legendGreenCheck, .legendGreyDash {
  width: 25%;
  height: 100px;
  float: left;
  margin-top: 20px;
  margin-left: 2%;
  font-size: 16px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@media screen and (max-width: 1366px){
  .legendGreyDashplaceholder {
    margin-top: 50px;
  }
}

.legendGreyDash {  
    margin-top: 30px;
}

@media screen and (min-width: 1680px){
  .legendGreyDash {
    margin-top: 30px;
  }
}

@media screen and (min-width: 2100px){
  .legendGreyDash {
    margin-top: 40px;
  }
}

@media screen and (max-width: 1365px){
  .legendGreyDash {
    margin-top: 30px;
  }
}

.PeopleQuotePriceAverage {
  width: 8%;
  height: 8%;
  float: right;
  margin-top: -200px;
  margin-right: 3%;
  text-align: left;  
}

@media screen and (max-width: 1365px){
  .PeopleQuotePriceAverage {
  margin-top: -170px;
  }
}

.PeopleQuotePrice {
  width: 8%;
  height: 8%;
  float: right;
  margin-top: -290px;
  margin-right: 3%;
  text-align: left; 
}

.OurQuotePrice {
  width: 8%;
  height: 8%;
  float: right;
  margin-top: -360px;
  margin-right: 3%;
  text-align: left;  
}

@media screen and (max-width: 1365px){
  .OurQuotePrice{
  margin-top: -370px;
  }
}

.OurQuoteText {
  width: 25%;
  height: 8%;
  float: right;
  margin-top: -360px;
  margin-right: 12%;
  text-align: right;  
}

@media screen and (max-width: 1365px){
  .OurQuoteText {
  margin-top: -380px;
  }
}

.PeopleQuoteText {
  width: 25%;
  height: 8%;
  float: right;
  margin-top: -320px;
  margin-right: 12%;
  text-align: right;  
}

.PeopleQuoteTextAverage {
  width: 25%;
  height: 8%;
  float: right;
  margin-top: -220px;
  margin-right: 12%;
  text-align: right;  
}

@media screen and (max-width: 1365px){
  .PeopleQuoteTextAverage {
  margin-top: -200px;
  }
}

#shareExp {
  float: right;
  margin-top: -100px;
  margin-right: 6%;
  width: 30%;
}

#gotoInsurer {
  float: right;
  margin-top: -40px;
  margin-right: 6%;
  width: 30%;
}

@media screen and (max-width: 1365px){
  #shareExp {
    margin-top: -80px
  }
}

@media screen and (max-width: 1365px){
  #gotoInsurer {
    margin-top: -30px
  }
}

.AttributePrescription, .AttributeDental, .AttributeStudent, .AttributeTravel, .AttributeHospital, .AttributeIllness, .AttributeLife {
  width: 25%;
  height: 8%;
  float: right;
  margin-right: 42%;
   border: 1px solid black;
}

.AttributePrescription {  
  margin-top: -200px;
}

@media screen and (max-width: 1365px){
  .AttributePrescription{
    margin-top: -180px;
  }
}

.AttributeDental {
  margin-top: -150px;
}

@media screen and (max-width: 1365px){
  .AttributeDental{
    margin-top: -130px;
  }
}

.AttributeStudent {
  margin-top: -100px;
}

@media screen and (max-width: 1365px){
  .AttributeStudent{
    margin-top: -80px;
  }
}

.AttributeTravel {
  margin-top: -50px;
}

@media screen and (max-width: 1365px){
  .AttributeTravel{
    margin-top: -30px;
  }
}

.checkedAttributes {
  width: 35%;
  height: 8%;
  float: right;
  margin-top: -288px;
  margin-right: 37%;
  text-decoration:underline;  
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

.insurerName {
  width: 25%;
  height: 10%;
  margin-top: 2%;
  margin-left: 0%;
}

.insurerLogo {
  width: 200px;
  height: 200px;
  margin-top: 2%;
  margin-left: 2%;
  background-image: url(../assets/bluecross.png);
  background-size:contain;
  border: 1px solid black;
}

.insurerLogo2 {
  width: 200px;
  height: 200px;
  margin-top: 2%;
  margin-left: 2%;
  background-image: url(../assets/sunlife.jpg);
  background-size:contain;
  border: 1px solid black;
}

.insurerLogo3 {
  width: 200px;
  height: 200px;
  margin-top: 2%;
  margin-left: 2%;
  background-image: url(../assets/CAA.png);
  background-size:contain;
  border: 1px solid black;
}

.insurerLogo4 {
  width: 200px;
  height: 200px;
  margin-top: 2%;
  margin-left: 2%;
  background-image: url(../assets/surehealth.jpg);
  background-size:contain;
  border: 1px solid black;
}

.insurerDivs {
  width: 80%;
  height: 600px;
  margin-left: 12%;
  margin-top: 4%;
  margin-bottom: 2%;
  background-image: url(../assets/InsureButtonBG1.jpg);
  background-size: cover;
  border-radius: 8px;
  border: 1px solid black;
}

.coreHealth {
  left: 0%;
  font-size: 26px;
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
  height: 650px;
  margin-left: 12%;
  margin-top: 4%;
  background-image: url(../assets/InsureButtonBG1.jpg);
  background-size: cover;
  border-radius: 8px;
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
  left: 28vw;
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

.HealthInsuranceH3{
  margin-left: 15%;    
  font-size: 18px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

.HealthInsuranceH2{  
  font-size: 22px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

.HealthInsuranceH1{ 
  font-size: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

.noInsurance {
	position: relative;
	width: 30px;
	height: 30px;
  margin-top: 10px;
  margin-left: 2%;
	border: 2px solid #eef5df;
	background-color: #ff5248;
	border-radius: 50%;
}

  @media screen and (min-width: 1680px){
    .noInsurance{
      margin-top: 0px;
      width: 50px;
      height: 50px;
    }
  }

.noInsurance::before, .noInsurance::after {
	position: absolute;
	top: 45%;
	left: 20%;
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
  width: 10px;
  height: 30px;
  margin-top: 0px;
  margin-left: 15%;
  border-bottom: 7px solid #78b13f;
  border-right: 7px solid #78b13f;
}

@media screen and (min-width: 1680px){
  .hasInsurance{
    margin-top: -10px;
    width: 15px;
    height: 45px;
  }
}

.notSelected {
	position: relative;
	width: 30px;
	height: 30px;
  margin-top: 0px;
  margin-left: 0%;
	border: 2px solid #979797;
	background-color: #FFF;
	border-radius: 50%; 
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

@media screen and (min-width: 1680px){
  .notSelected{
    margin-top: 0px;
    width: 50px;
    height: 50px;
  }
}

.notSelected::after {
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
  background-color: white;
	-ms-transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.notSelected::after {
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
}

.mainDivHealth {
  background-size: cover;
  background-color: white;
  height: 100%;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mainDivHealth::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.getQuotesFooter{
  background-color: white;
  height: 20%;
}

</style>

