<template>
  <div class="mainDiv">

    <div class="left-gray"></div>
    <div class="right-gray"></div>
      
   <div class="top-buffer">
   </div>

    <form>
        <input type="text" class="input" name="firstName" v-model="input.firstName" placeholder="First Name" />
        
        <input type="text" class="input" name="lastName" v-model="input.lastName" placeholder="Last Name" />
        <br>
        <h4>Date of birth:
            <input type="text" class="input" id="DOBmonth" name="DOBmonth" v-model="input.DOBmonth" placeholder="Month" />
            <input type="text" class="input" id="DOBday" name="DOBday" v-model="input.DOBday" placeholder="Day" />
            <input type="text" class="input" id="DOByear" name="DOByear" v-model="input.DOByear" placeholder="Year" />
            <select name="gender" class="dropdown" v-model="input.gender">
             <option value="null">Gender</option>
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
             <option value="null">Marital Status</option>
             <option value="Not married">Not married</option>
             <option value="married">Married</option>
             <option value="common Law">Common Law</option>
         </select>
        <input type="text" class="input" id="children" name="children" v-model="input.children" placeholder="How many children?" />
        <br><br>
        <input type="submit" value="Save" class="button" @click="updateUser(user_id, input.firstName, input.lastName, input.DOBmonth, input.DOBday, input.DOByear, input.gender,
                                                                input.homeAddress, input.city, input.province, input.postalCode, input.email, input.phoneNum,
                                                                input.maritalStatus, input.children,)">
    </form>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push(`/Dashboard/${user_id}`)">Back to home</button>

    </div>
  </template>

<script>

import axios from 'axios'



export default {
   name: 'ProfilePage',
        data() {
            return {
            
                responses: [],

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

      
        updateUser(user_id, firstName, lastName, DOBmonth, DOBday, DOByear, gender, homeAddress, city, province, postalCode, email, phoneNum, maritalStatus, children) {

        axios.post(`http://162.253.11.179:3000/updateUser/${user_id}/${firstName}/${lastName}/${DOBmonth}/${DOBday}/${DOByear}/${gender}/${homeAddress}/${city}/${province}/${postalCode}/${email}/${phoneNum}/${maritalStatus}/${children}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});


        },


    },

    created() {

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

</style>