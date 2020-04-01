<template>
  <div class="mainDivUserQuotes">

    <div class="left-gray-UserQuotes"></div>
    <div class="right-gray-UserQuotes"></div>
    
     <h3>Choose Insurer: <select name="Insurer" class="dropdown" v-model="input.Insurer">
             <option value="null">Insurer</option>
             <option value="blueCross">Blue Cross</option>
             <option value="sunlife">Sunlife</option>
             <option value="CAA">CAA</option>
             <option value="sureHealth">Sure Health</option>
            </select></h3>

        <div class="QuoteWriting">
            <h2 class="quotePrice">Prescription Drugs Quote Price: </h2>
            <h2 class="quotePrice">Dental Quote Price: </h2>
            <h2 class="quotePrice">Student Accident Quote Price: </h2>
            <h2 class="quotePrice">VIP Travel Quote Price: </h2>
            <h2 class="quotePrice">Hospital Cash Quote Price: </h2>
            <h2 class="quotePrice">Critical Illness Quote Price: </h2>
            <h2 class="quotePrice">Term Life Insurance Quote Price: </h2>
            <h2 class="quotePrice">Total Quote Price: </h2>
        </div>       

        <div class="QuoteBoxes">
    
        <input type="number" step="0.01" id="firstBox" class="inputUserQuotes" name="prescriptionDrugs" v-model="input.prescriptionDrugs" placeholder="prescription drugs price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" name="dental" v-model="input.dental" placeholder="dental price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" id="studentAccident" name="studentAccident" v-model="input.studentAccident" placeholder="student accident price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" id="VIPtravel" name="VIPtravel" v-model="input.VIPtravel" placeholder="VIP travel price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" id="hospitalCash" name="hospitalCash" v-model="input.hospitalCash" placeholder="hospital cash price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" id="criticalIllness" name="criticalIllness" v-model="input.criticalIllness" placeholder="critical Illness price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" id="termLifeInsurance" name="termLifeInsurance" v-model="input.termLifeInsurance" placeholder="term life insurance price" /><br>
        <input type="number" step="0.01" class="inputUserQuotes" id="totalQuote" name="totalQuote" v-model="input.totalQuote" placeholder="term life insurance price" />
        </div>
        
        <UserQuoteSubmit msg="Submit Quote" @click.native="submitQuote(input.Insurer, input.prescriptionDrugs, input.dental, input.studentAccident, input.VIPtravel,
                                                                                     input.hospitalCash, input.criticalIllness, input.termLifeInsurance, input.totalQuote)"/>
        <UserQuoteHome msg="Back to Home" @click.native="$router.push(`/Dashboard/${user_id}`)"/>

        <div v-bind:class="{ noErrorInsurer: isInsurer, errorInsurer: noInsurer }">You have not chosen an Insurer.</div>
        <div v-bind:class="{ noErrorEmpty: isData, errorEmpty: noData }">You have not entered any data.</div>
        <div v-bind:class="{ noErrorNaN: isNan, errorNaN: noNan }">One of the fields is entered is not a number.</div>
      
    </div>
</template>

  <script>

    import axios from 'axios'
    import UserQuoteSubmit from '@/components/UserQuoteSubmit.vue'
    import UserQuoteHome from '@/components/UserQuoteHome.vue'

    export default {
        name: 'UserInputQuotes',
        components: {
            UserQuoteSubmit,
            UserQuoteHome
        },

            data() {
                return {     
                   
                    input: {
                        Insurer: "",
                        prescriptionDrugs: "0",
                        dental: "0",
                        studentAccident: "0",
                        VIPtravel: "0",
                        hospitalCash: "0",
                        criticalIllness: "0",
                        termLifeInsurance: "0",
                        totalQuote: "0"
                    },
                user_id: 0,
                noInsurer: false,
                isInsurer: true,
                noData: false,
                isData: true,
                noErrorCheck: false,
                isErrorCheck: true,
                noNan: false,
                isNan: true
            }
    },

    methods: {
      
        submitQuote(Insurer, prescriptionDrugs, dental, studentAccident, VIPtravel, hospitalCash, criticalIllness, termLifeInsurance, totalQuote) {
        
        this.noInsurer = false;
        this.isInsurer = true;
        this.noData = false;
        this.isData = true;
        this.noErrorCheck = false;
        this.isErrorCheck = true;
        this.noNan = false;
        this.isNan = true;

        prescriptionDrugs = parseFloat(prescriptionDrugs);
        dental = parseFloat(dental);
        studentAccident = parseFloat(studentAccident);
        VIPtravel = parseFloat(VIPtravel)
        hospitalCash = parseFloat(hospitalCash);
        criticalIllness = parseFloat(criticalIllness);
        termLifeInsurance = parseFloat(termLifeInsurance);
        totalQuote = parseFloat(totalQuote);
       
        if(Insurer == "Insurer" || Insurer == "" || Insurer == "null") {
            this.noInsurer = true;
            this.isInsurer = false;
        }

        else if(prescriptionDrugs == 0 && dental == 0 && studentAccident == 0 && VIPtravel == 0 && hospitalCash == 0 && criticalIllness == 0 && termLifeInsurance == 0 && totalQuote == 0) {
            this.noData = true;
            this.isData = false;

        }

        else if(isNaN(prescriptionDrugs) || isNaN(dental) || isNaN(studentAccident) || isNaN(VIPtravel) || isNaN(hospitalCash) || isNaN(criticalIllness) || isNaN(termLifeInsurance) || isNaN(totalQuote)) {
            this.noNan = true;
            this.isNan = false;

        }

        else {
        if(totalQuote == 0) {
            totalQuote = prescriptionDrugs + dental + studentAccident + VIPtravel + hospitalCash + criticalIllness + termLifeInsurance;
        }

        if(Insurer == "blueCross") {
        axios.post(`http://162.253.11.179:3000/submitQuoteBlueCross/${prescriptionDrugs}/${dental}/${studentAccident}/${VIPtravel}/${hospitalCash}/${criticalIllness}/${termLifeInsurance}/${totalQuote}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
        this.$router.push(`/Dashboard/${this.user_id}`)
        }

        if(Insurer == "sunlife"){
        axios.post(`http://162.253.11.179:3000/submitQuoteSunlife/${prescriptionDrugs}/${dental}/${studentAccident}/${VIPtravel}/${hospitalCash}/${criticalIllness}/${termLifeInsurance}/${totalQuote}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
        this.$router.push(`/Dashboard/${this.user_id}`)
        }

        if(Insurer == "CAA") {
        axios.post(`http://162.253.11.179:3000/submitQuoteCAA/${prescriptionDrugs}/${dental}/${studentAccident}/${VIPtravel}/${hospitalCash}/${criticalIllness}/${termLifeInsurance}/${totalQuote}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
        this.$router.push(`/Dashboard/${this.user_id}`)
        }

        if(Insurer == "sureHealth"){
        axios.post(`http://162.253.11.179:3000/submitQuoteSureHealth/${prescriptionDrugs}/${dental}/${studentAccident}/${VIPtravel}/${hospitalCash}/${criticalIllness}/${termLifeInsurance}/${totalQuote}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
        this.$router.push(`/Dashboard/${this.user_id}`)
        }        
        }
        },
    },
    created() {
        this.user_id = this.$route.params.user_id;
    }  
}
</script>

<style>

.quotePrice{
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  text-align: left; 
}

#firstBox {
  margin-top: 4.8%;
}

.inputUserQuotes {
  border-radius: 7px;
  padding: 5px;
  outline: none;
  width: 40%;
  margin-top: 15px;
  margin-left: 3%;
}

.inputUserQuotes:focus {
  border: 3px solid #555;
}

.QuoteWriting {
  float: left;
  width: 35%;
  text-align: right;
  margin-left: 2%;
}

@media screen and (min-width: 1880px){
  .QuoteWriting{
    margin-left: 15%;
    width: 20%;
  }
}

.QuoteBoxes {
  float: right;
  margin-right: 2%;
  margin-top: 2px;
  width: 25%;
  text-align: left;    
}

.left-gray-UserQuotes {
  width: 18%;
  height: 100%;
  float: left;
  background-color: rgb(243, 243, 243);
}

.right-gray-UserQuotes {
  width: 18%;
  height: 100%;
  float: right;
  background-color: rgb(243, 243, 243);
}

.mainDivUserQuotes {
  background-size: cover;
  background-color: white;
  height: 700px;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mainDivUserQuotes::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.noErrorInsurer {
visibility: hidden;
}

.errorInsurer {
  margin-top: 10px;
  visibility: visible;
  color: red;
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.noErrorEmpty {
visibility: hidden;
}

.errorEmpty {
  margin-top: -10px;
  visibility: visible;
  color: red;
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.noErrorNaN {
visibility: hidden;
}

.errorNaN {
  margin-top: -22px;
  visibility: visible;
  color: red;
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>