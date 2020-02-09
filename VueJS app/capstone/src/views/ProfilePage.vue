<template>
  <div class="profilePage">
      
   <div class="top-buffer">
   </div>

    <form @submit="getUserInfo">
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
        <input type="submit" value="Submit" class="button">
    </form>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/')">Back to home</button>
        <br>
        <button type="button" class="button" @click="getUserInfo">function test</button>
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
                    lastname: "",
                    password: "",
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

                
            }
    },

    methods: {

        getUserInfo(e) {
            e.preventDefault();
            axios.get('http://localhost:3000/getSingleUser/2')
            .then(res => this.input = res.data[0])
            .catch(err => {throw err;})
            

        },


    },

    created() {
         axios.get('http://localhost:3000/getSingleUser/1')
         .then(res => this.input = res.data[0])
         .catch(err => (err));
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

.profilePage {
  background-image: url(../assets/main-background.jpeg);
  background-size: cover;
  height: 100%;
  overflow: auto;
  text-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.profilePage::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

</style>