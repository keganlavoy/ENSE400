<template>
  <div class="mainDiv">
   
    <div class="center">

      <h1>Select Coverage</h1>
    
      <h3 > Core Health Benefits (These are automatically included in all packages)</h3>
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
      <button type="button" class="button" @click="$router.push('/')">Search Insurance Brokers</button>
    </div>

  </div>
</template>




<script>



export default {
  
 name: 'HealthInsurance',
  components: {
    
    
  },

  data() {
    
    return {
      checkedNames: []
    }

  }

}
</script>



<style scoped>

h1 {

  text-align: center;
  text-decoration: underline;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.center {

width: 80%;
height: 90%;
margin-left: 10%;
margin-right: 10%;
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

