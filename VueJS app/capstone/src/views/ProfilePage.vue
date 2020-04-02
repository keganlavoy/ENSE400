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
        <h4>Date of birth:
            <input type="text" class="input" id="DOBmonth" name="DOBmonth" v-model="input.DOBmonth" placeholder="Month" />
            <input type="text" class="input" id="DOBday" name="DOBday" v-model="input.DOBday" placeholder="Day" />
            <input type="text" class="input" id="DOByear" name="DOByear" v-model="input.DOByear" placeholder="Year" />
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
             <option value="Not married">Not married</option>
             <option value="married">Married</option>
             <option value="common Law">Common Law</option>
        </select>
        <input type="number" step="1" class="input" id="children" name="children" v-model="input.children" placeholder="How many children?" />
        <br><br>

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
                
            }
    },

    methods: {

        /*This is the function that updates all of the users information when they click the save button for the form. It takes the contents of every input box from the 
          form and saves that info directly into the database.*/
        updateUser(user_id, firstName, lastName, DOBmonth, DOBday, DOByear, gender, homeAddress, city, province, postalCode, email, phoneNum, maritalStatus, children) {

        axios.post(`http://162.253.11.179:3000/updateUser/${user_id}/${firstName}/${lastName}/${DOBmonth}/${DOBday}/${DOByear}/${gender}/${homeAddress}/${city}/${province}/${postalCode}/${email}/${phoneNum}/${maritalStatus}/${children}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});


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

#children {
    width: 10%;
}

#city {
    width: 15%;
}

#province {
    width: 15%;
}

#postalCode {
    width: 10%;
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