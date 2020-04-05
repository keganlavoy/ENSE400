<template>
  <div class="mainDivHealth">
   
    <!--This is the initial div that you can see that contains all of the insurance options available for the user to choose from.
        It also contains some user instructions at the bottom to help direct the user when choosing their insurance plan.-->
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

      <!--Buttons used to either query the database for quotes or to go back to the dashboard.-->
      <button type="button" class="button" @click="getInsurers()">Search Insurance Brokers</button>
      <button type="button" class="button" @click="$router.push(`/Dashboard/${user_id}`)">Back to dashboard</button>

      <!--Instructions for the user that help them search for quotes-->
      <div>
      <br><br>
      <div class="MainHealthInsuranceH3">
        Choose the coverage you would like to search for above and click the <b>Search Insurance Brokers</b> button to get quotes.
        If you would like to search for different types of insurance, adjust your options above and and click the <b>Search Insurance Brokers</b>
        button again to receive your updated quotes.
      </div>
    </div>

    <!--These are repeating divs created by a v-for loop that display all of the insurance providers that we have in the insurers table. 
        It displays the insurers logo, the insurers name, the coverage the user selected and whether or not we have data from 
        that insurance provider. It also displays three quotes: The first quote is calculated using the data we have in our insurer table and
        the options the user selected, the second quote is calculated using user provided quotes for that insurer and the options the user selected,
        and the third quote is calculated by simply taking the average total quote prices of all user supplied quotes for that insurer. Two buttons are also
        created: The first button takes the user to the page that allows them to input their own quote and the second is a direct link to the insurer's 
        website. All of the elements are displayed in the div by using the v-bind:class directive which allows you to dynamically set a CSS class to an 
        element based on the truth value of a variable.-->
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
      <a v-bind:href="insurer.insurer_url"><button type="button" class="button" id="gotoInsurer"> Go to {{insurer.insurer_name}}'s website! </button></a>
      
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


import axios from 'axios'

export default {


 name: 'HealthInsurance',
  components: {
    
  },

  data() {
    
    return {


      /*The input object stores which checkboxes that the user has selected. For example if the user checks 
        Dental and VIP Travel for their desired insurance coverage, dentalCheck and travelCheck will turn to 
        true which allows us to dynamically set classes to elements in the brwoser as well as calculate the proper
        prices for the quotes.*/
      input: {

        prescriptionCheck: false,
        dentalCheck: false,
        studentCheck: false,
        travelCheck: false,
        hospitalCheck: false,
        illnessCheck: false,
        lifeCheck: false
      },

      /*The insurers array is where we store the results retrieved from the database on page load.
        this array holds the data that we inputted into the database, this does not include any user 
        inputted quotes. The prices in this array are used to calculate our quote price as well as display
        some elements unique to the different insurers. */
      insurers: [],

      /*The user quotes arrays below are used to store all of the quotes provided by the users for the 
        individual insurance providers that we have available. These only store prices and are userd to 
        calculate the other two quote prices displayed to the user.*/
      user_quotes_blue_cross: [],
      user_quotes_sunlife: [],
      user_quotes_caa: [],
      user_quotes_sure_health: [],


      /*The quoteSums array is used to hold the final prices of the three quotes that are calculated. 
        These prices are updated when the database is queried and then is displayed in the browser by
        using the index of the v-for loop explained above.*/
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


      /*InsurerClassBinds is an array that displays to the user whether or not we have price data for a particular
        type of insurance for a particular insurer. When we query our database to retrieve the data we have for insurance 
        prices, if a resulting price is 0 or null, we interpret that as us not having data for that particular insurer, otherwise
        we have data and that determines which symbol is displayed to the user on the get quotes page after they choose their
        desired insureance */
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

      /*These are placeholders for the final quote prices for our quotes that get
        transfered into the quoteSums array */
      bluecross_sum: 0.0,
      sunlife_sum: 0.0,
      CAA_sum: 0.0,
      sureHealth_sum: 0.0,

      /*These are placeholders for the final quote prices for user quotes with selected 
        user inputs that get transfered into the quoteSums array */
      bluecross_UserQuote_sum: 0.0,
      sunlife_UserQuote_sum: 0.0,
      CAA_UserQuote_sum: 0.0,
      sureHealth_UserQuote_sum: 0.0,


      /*these are palceholders for the final quote prices for user quotes total averages
        that get transfered into the quoteSums array */
      bluecross_UserQuote_total: 0.0,
      sunlife_UserQuote_total: 0.0,
      CAA_UserQuote_total: 0.0,
      sureHealth_UserQuote_total: 0.0,


      /*These hold the amount of rows within each user quote table and are used in the for loops in 
        some functions to calculate the user quotes without going out of bounds within the array*/
      blueCrossCount: 0,
      sunlifeCount: 0,
      caaCount: 0,
      sureHealthCount: 0,   
     
    }

  },

  methods: {

    getInsurers() {

  
    /*This function retrieves the quote prices that we have gathered and puts the results in the
      insurers table.*/
    
    axios.get(`http://162.253.11.179:3000/getInsurers`)
    .then((res) => {
    this.insurers = res.data;


    /*These lines simply reset the quote prices whenever the function is called so that the new prices
      can be recalculated independently of the previous prices. */
    this.bluecross_sum = 0.0;
    this.sunlife_sum = 0.0;
    this.CAA_sum = 0.0;
    this.sureHealth_sum = 0.0;

    this.bluecross_UserQuote_sum = 0.0;
    this.sunlife_UserQuote_sum = 0.0;
    this.CAA_UserQuote_sum = 0.0;
    this.sureHealth_UserQuote_sum = 0.0;


    /*These lines add our inputted core health prices to the quotes because they are included within all
      packages.*/
    this.bluecross_sum = this.bluecross_sum + this.insurers[0].core_health;
    this.sunlife_sum = this.sunlife_sum + this.insurers[1].core_health;
    this.CAA_sum = this.CAA_sum + this.insurers[2].core_health;
    this.sureHealth_sum = this.sureHealth_sum + this.insurers[3].core_health;


    this.bluecross_UserQuote_sum = this.bluecross_UserQuote_sum + this.insurers[0].core_health;
    this.sunlife_UserQuote_sum = this.sunlife_UserQuote_sum + this.insurers[1].core_health;
    this.CAA_UserQuote_sum = this.CAA_UserQuote_sum + this.insurers[2].core_health;
    this.sureHealth_UserQuote_sum = this.sureHealth_UserQuote_sum + this.insurers[3].core_health;


    /*These if statements first check if the user has selected this type of insurance to search for. If the user has chosen it,
      it then determines if we have any data for that type of insurance in our database for each insurer. If we do have data it is 
      added to the quote price and a checkmark is displayed in the browser representing that we have that data. If we do not have 
      data, the price isn't updated and a red x is shown in the browser representing that we don't have data. */
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





    /*Each input option is checked and the prices are updated accordingly.*/
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
 


    /*This rounds the final calculated price to 2 decimal places and inserts the final 
      calculated quotes for our quotes into the quoteSums array. */
    this.quoteSums[0].OurQuoteSum = this.bluecross_sum.toFixed(2);
    this.quoteSums[1].OurQuoteSum = this.sunlife_sum.toFixed(2);
    this.quoteSums[2].OurQuoteSum = this.CAA_sum.toFixed(2);
    this.quoteSums[3].OurQuoteSum = this.sureHealth_sum.toFixed(2);




    /*This is the start of the calculations for the user quotes. It once again checks the user inputs.
      If the user selected the type of insurance to be searched, each table in the database that was retrieved
      is looped through. If the price in a row of the table is 0, that means that the user didn't have that
      insurance included in their user submitted quote and isn't processed. If the price is anything other than
      0, it is added to a temporary average and a counter is updated by 1 so that an average can be calculated later.
      All of the individual insurance type's averages are then added together at the end to give the final price.*/
    var tempAverage = 0.0;
    var counter = 0;

    if(this.input.prescriptionCheck) {

      for(let i = 0; i < this.blueCrossCount; i++) {
        if(this.user_quotes_blue_cross[i].prescription_drugs != 0) {
          tempAverage += this.user_quotes_blue_cross[i].prescription_drugs;
          counter++;

        }
      }

      tempAverage = (tempAverage / counter.toFixed(1)).toFixed(2);
      this.bluecross_UserQuote_sum += parseFloat(tempAverage);

      counter = 0;
      tempAverage = 0.0;

      for(let i = 0; i < this.sunlifeCount; i++) {
        if(this.user_quotes_sunlife[i].prescription_drugs != 0) {
          tempAverage += this.user_quotes_sunlife[i].prescription_drugs;
          counter++;
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


    /*This transfers the calculated user quotes into the quoteSums array */
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
   
    
    /*On page load the database is queried to get the number of rows for each table as well as 
      all of the user uote data for each table.*/
    axios.get(`http://162.253.11.179:3000/getUserQuotesBlueCross`)
    .then(res => this.user_quotes_blue_cross = res.data)
    .catch(err => {throw err;});



    /*The total average quote price is also calculated here because it does not change based on what the 
      user selects, it is simply the average quote price from that insurer and it does not change until new quotes
      are added to the system. Therefore, we can calculate the total average once on page load instead of everytime
      the search insurance brokers button is clicked.*/
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

.MainHealthInsuranceH3, .HealthInsuranceH3, .HealthInsuranceH2, .HealthInsuranceH1, .checkedAttributes,
.legendRedX, .legendGreenCheck, .legendGreyDash, .selectCoverage, .coreHealth, .container {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

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
}

@media screen and (max-width: 1366px){
  .legendGreyDashplaceholder {
    margin-top: 40px;
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

.PeopleQuotePriceAverage, .PeopleQuotePrice, .OurQuotePrice {
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
  margin-top: -290px; 
}

.OurQuotePrice {
  margin-top: -360px;
}

@media screen and (max-width: 1365px){
  .OurQuotePrice{
  margin-top: -370px;
  }
}

.OurQuoteText, .PeopleQuoteText, .PeopleQuoteTextAverage {
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
  margin-top: -320px; 
}

.PeopleQuoteTextAverage {
  margin-top: -220px;
}

@media screen and (max-width: 1365px){
  .PeopleQuoteTextAverage {
  margin-top: -200px;
  }
}

#shareExp, #gotoInsurer {
  float: right;
  margin-top: -100px;
  margin-right: 6%;
  width: 30%;
}

#gotoInsurer {
  margin-top: -40px;
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
  width: 30%;
  height: 8%;
  float: right;
  margin-right: 40%;
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
}

.insurerName {
  width: 250px;
  height: 10%;
  margin-top: 2%;
}

.insurerLogo, .insurerLogo2, .insurerLogo3, .insurerLogo4 {
  width: 200px;
  height: 200px;
  margin-top: 2%;
  margin-left: 2%;
  background-size:contain;
  border: 1px solid black;
}

.insurerLogo {
  background-image: url(../assets/bluecross.png);
}

.insurerLogo2 {
  background-image: url(../assets/sunlife.jpg);
}

.insurerLogo3 {
  background-image: url(../assets/CAA.png);
}

.insurerLogo4 {
  background-image: url(../assets/surehealth.jpg);
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
  font-size: 22px;
  text-align: center;
  margin-left: 5%;
}

@media screen and (min-width: 1366px){
  .coreHealth{
    font-size: 26px;
  }
}

.selectCoverage {
  text-align: center;
  text-decoration: underline;
}

.center {
  width: 80%;
  height: 750px;
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

.MainHealthInsuranceH3 {
  font-size: 18px;
}

.HealthInsuranceH3{
  margin-left: 15%;    
  font-size: 18px;
}

.noInsurance + .HealthInsuranceH3{
  margin-top: -30px;
}

.HealthInsuranceH2{  
  font-size: 22px;
}

.HealthInsuranceH1{ 
  font-size: 30px;
}

.noInsurance {
	position: relative;
	width: 30px;
	height: 30px;
  margin-top: 10px;
  margin-left: 5%;
	border: 2px solid #eef5df;
	background-color: #ff5248;
	border-radius: 50%;
}

  @media screen and (min-width: 1680px){
    .noInsurance{
      width: 40px;
      height: 40px;
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
  margin-top: 10px;
  margin-left: 8%;
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
  margin-top: 10px;
  margin-left: 5%;
	border: 2px solid #979797;
	background-color: #FFF;
	border-radius: 50%; 
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

@media screen and (min-width: 1680px){
  .notSelected{
    margin-top: 10px;
    width: 40px;
    height: 40px;
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