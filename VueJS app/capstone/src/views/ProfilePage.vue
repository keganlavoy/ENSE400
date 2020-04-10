<template>
  <div class="mainDivProfile">


    <!--Creates blue side bars and space at the top of the screen-->
    <div class="left-blue"></div>
    <div class="right-blue"></div>
    <div class="top-buffer"></div>


    <!--These are the input boxes that are used to insert, save, and display the user's info if they choose to enter it in.-->
        <input type="text" class="input" name="firstName" v-model="input.firstName" placeholder="First Name" />
        <input type="text" class="input" name="lastName" v-model="input.lastName" placeholder="Last Name" />
        <br>
      
        <h4 class="profilePageH4">Date of birth (MM/DD/YYYY):
            <input type="number" step="1" class="input" id="DOBmonth" name="DOBmonth" v-model="input.DOBmonth" placeholder="Month" />
            <input type="number" step="1" class="input" id="DOBday" name="DOBday" v-model="input.DOBday" placeholder="Day" />
            <input type="number" step="1" class="input" id="DOByear" name="DOByear" v-model="input.DOByear" placeholder="Year" />
            <select name="gender" class="dropdown" v-model="input.gender">
                <option value="null" selected disabled hidden>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </h4>
        
        <input type="text" class="input" id="homeAddress" name="homeAddress" v-model="input.homeAddress" placeholder="Home Address" />
        <br><br>
        <input type="text" class="input" id="city" name="city" v-model="input.city" placeholder="City" />
        <input type="text" class="input" id="province" name="province" v-model="input.province" placeholder="Province or Territory" />
        <input type="text" class="input" id="postalCode" name="postalCode" v-model="input.postalCode" placeholder="Postal Code" />
        <br><br>
        <input type="text" class="input" name="email" v-model="input.email" placeholder="Email Address" />
        <input type="text" class="input" name="phoneNum" v-model="input.phoneNum" placeholder="Phone Number" />
        <br><br>
        <select name="maritalStatus" class="dropdown" v-model="input.maritalStatus">
             <option value="null" selected disabled hidden>Marital Status</option>
             <option value="Not married">Single</option>
             <option value="married">Married</option>
             <option value="common Law">Common Law</option>
        </select>
        <input type="number" step="1" class="input" id="children" name="children" v-model="input.children" placeholder="How many children?" />
        <br><br>
        <div v-bind:class="{ noErrorMonth: validMonth, errorMonth: invalidMonth }">The month entered is invalid.</div>
        <div v-bind:class="{ noErrorDay: validDay, errorDay: invalidDay }">The day entered is invalid.</div>
        <div v-bind:class="{ noErrorYear: validYear, errorYear: invalidYear }">The year entered is invalid.</div>
        <div v-bind:class="{ noSave: invalidSave, Save: validSave }">Your information has been saved successfully.</div>
        <br>
        <!--When this save button is clicked it will execute the function that saves the user entered data into the database-->
        <input type="submit" value="Save" class="button" @click="updateUser(user_id, input.firstName, input.lastName, input.DOBmonth, input.DOBday, input.DOByear, input.gender,
                                                                input.homeAddress, input.city, input.province, input.postalCode, input.email, input.phoneNum,
                                                                input.maritalStatus, input.children)">
    
    <br><br>
    <button type="button" class="button" @click="$router.push(`/Dashboard/${user_id}`)">Back to home</button>
  </div>
</template>

<script>

import axios from 'axios'



export default {
   name: 'ProfilePage',
        data() {
            return {
            

                input: {
                    firstName: "",
                    lastName: "",
                    DOBmonth: "",
                    DOBday: "",
                    DOByear: "",
                    gender: "",
                    homeAddress: "",
                    city: "",
                    province: "",
                    postalCode: "",
                    email: "",
                    phoneNum: "",
                    maritalStatus: "",
                    children: ""
                    
                },

                user_id: 0,
                invalidMonth: false,
                validMonth: true,
                invalidDay: false,
                validDay: true,
                invalidYear: false,
                validYear: true,
                invalidSave: true,
                validSave: false,
                
            }
    },

    methods: {

        /*This is the function that updates all of the users information when they click the save button for the form. It takes the contents of every input box from the 
          form and saves that info directly into the database. It includes some simple date checking and provides error/save feedback if the user inputs are allowed or not.*/
        updateUser(user_id, firstName, lastName, DOBmonth, DOBday, DOByear, gender, homeAddress, city, province, postalCode, email, phoneNum, maritalStatus, children) {

        if(DOBmonth == "") {
            DOBmonth = NaN;
        }
        
        if(DOBday == "") {
            DOBday = NaN;
        }

        if (DOByear == "") {
            DOByear = NaN;
        }
        
        if((DOBmonth < 1 && isNaN(DOBmonth) == false) || (DOBmonth > 12 && isNaN(DOBmonth) == false)) {
            this.invalidMonth = true;
            this.validMonth = false;
        }
        else {
          this.invalidMonth = false;
          this.validMonth = true;
        }

        if((DOBday < 1 && isNaN(DOBday) == false) || (DOBday > 31 && isNaN(DOBday) == false)) {
            this.invalidDay = true;
            this.validDay = false;
        }
        else {
          this.invalidDay = false;
          this.validDay = true;
        }

        if((DOByear < 1900 && isNaN(DOByear) == false) || (DOByear > 2020 && isNaN(DOByear) == false)) {
            this.invalidYear = true;
            this.validYear = false;
        }
        else {
          this.invalidYear = false;
          this.validYear = true;
        }

        //This function will update the users data in the database and tell them that their information has been updated successfully
        if(this.validMonth == true && this.validDay == true && this.validYear == true) {
        axios.post(`http://162.253.11.179:3000/updateUser/${user_id}/${firstName}/${lastName}/${DOBmonth}/${DOBday}/${DOByear}/${gender}/${homeAddress}/${city}/${province}/${postalCode}/${email}/${phoneNum}/${maritalStatus}/${children}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
        this.invalidSave = false;
        this.validSave = true;
        }

        },


    },

    created() {
        /*Whenever this page is loaded, it uses the user id passed from the route parameters from previous pages to query the database with that id 
          and fill in the input boxes with that users information entered previously, if they have any.*/

        this.user_id = this.$route.params.user_id;
        var id = this.user_id;
        axios.get(`http://162.253.11.179:3000/getSingleUser/${id}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
    }
  
}
</script>

<style>

.errorYear, .errorMonth, .errorDay {
  visibility: visible;
  color: red;
  font-size: 18px;
}

.noErrorYear, .noErrorMonth, .noErrorDay, .noSave {
visibility: hidden;
}

.Save {
  visibility: visible;
  color: black;
  font-size: 18px;

}

.profilePageH4, .Save, .errorYear, .errorMonth, .errorDay {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#children, #postalCode {
  width: 10%;
}

#city, #province {
  width: 15%;
}

#homeAddress {
  width: 35%;
}

#DOBmonth {
  width: 5%;
}

#DOBday {
  width: 3%;
}

#DOByear {
  width: 4%;
}

.mainDivProfile {
  background-size: cover;
  background-color: white;
  height: 100%;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mainDivProfile::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

</style>