<template>
  <div class="profilePage">
      
   <div class="top-buffer">
   </div>
        <input type="text" class="input" name="firstName" v-model="input.firstName" placeholder="First Name" />
        
        <input type="text" class="input" name="lastName" v-model="input.lastName" placeholder="Last Name" />
        <br>
        <h4>Date of birth:
            <input type="text" class="input" id="DOBmonth" name="DOBmonth" v-model="input.DOBmonth" placeholder="Month" />
            <input type="text" class="input" id="DOBday" name="DOBday" v-model="input.DOBday" placeholder="Day" />
            <input type="text" class="input" id="DOByear" name="DOByear" v-model="input.DOByear" placeholder="Year" />
            <select name="gender" class="dropdown">
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
        <select name="maritalStatus" class="dropdown">
             <option value="null">Marital Status</option>
             <option value="notMarried">Not married</option>
             <option value="married">Married</option>
             <option value="married">Common Law</option>
         </select>
        <input type="text" class="input" id="children" name="children" v-model="input.children" placeholder="How many children?" />
        <br><br>
        <button type="button" class="button" @click="$router.push('/ProfilePage')">Save</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/')">Back to home</button>
    </div>
  </template>

<script>

export default {
   name: 'ProfilePage',
        data() {
            return {
                input: {
                    firstName: "",
                    password: "",
                    DOBmonth: "",
                    DOBday: "",
                    DOByear: "",
                    homeAddress: "",
                    city: "",
                    province: "",
                    postalCode: "",
                    email: "",
                    phoneNum: "",
                    children: ""
                }
            }
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
  overflow: hidden;
  text-align: center;
}

</style>