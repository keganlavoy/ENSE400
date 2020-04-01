<template>
  <div class="mainDiv">

    <!--Creates two blue side panels for style-->
    <div class="left-blue"></div>
    <div class="right-blue"></div>

    <!--Creates some space at top of page-->  
    <div class="top-buffer"></div>


    <!--Instructions for user for signup-->
    <div class="welcomeSignUp">
      <h1 class="welcomeH1">Welcome to Care Compare SK</h1>
      <p class="welcomeSignUpParagraph">If you do not already have an account with Care Compare SK, you must 
       input a <b>Username</b> and <b>Password</b> below before proceeding. Once you input your <b>Username</b> and <b>Password</b>,
        click the <b>Sign-Up</b> button below to create your account and be re-directed to the login page.
      </p>
    </div>

    <div v-bind:class="{ noErrorSignUp: correctPass, errorSignUp: wrongPass }">password and confirm password dont match.</div>
        <!--Input boxes and buttons for signup Information-->
        <input type="text" class="input" name="userName" v-model="input.userName" placeholder="Username" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <br>
        <input type="password" class="input" name="confirmPass" v-model="input.confirmPass" placeholder="Confirm Password" />
        <br>
        <br>
         <button type="button" class="button" @click="addUser(input.userName, input.password, input.confirmPass)" >Sign-Up</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/')">Already have an account</button>
  </div>
</template>

<script>

import axios from 'axios'


export default {
   name: 'Signup',
        data() {
            return {
                input: {
                    userName: "",
                    password: "",
                    confirmPass:""
                },

                wrongPass: false,
                correctPass: true
            }
    },

    methods: {


      /*This function is called when the signup button is clicked. It checks to see if the passwords match.
        If they do, a new user is entered into the database with the information provided. If the passwords are 
        different an error message is displayed to the user.*/
      addUser(userName, password, confirmPass) {

        if(password != confirmPass) {
            this.wrongPass = true;
            this.correctPass = false;
        }

        else {
          this.wrongPass = false;
          this.correctPass = true;
       
        axios.post(`http://162.253.11.179:3000/addUser/${userName}/${password}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});    
        this.$router.push('/')
        }
      }

    }
}
</script>

<style>

.noErrorSignUp {
visibility: hidden;
}

.errorSignUp {
  visibility: visible;
  color: red;
}



.welcomeSignUp{
  height: 20%;
  width: 60%;
  margin-left: 20%;
  
  border-radius: 1vh; 
}

.welcomeH1{
  font-size: 2.0vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}

.welcomeSignUpParagraph{
   font-size: 1.2vw;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   color: black;
}

</style>