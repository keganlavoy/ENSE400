<template>
  <div class="mainDiv">

    <div class="left-blue"></div>
    <div class="right-blue"></div>
      
   <div class="top-buffer">
   </div>
   <div class="welcomeLogin">
     <h1 class="welcomeH1">Welcome to Care Compare SK</h1>
     <p class="welcomeParagraph">If you do not already have an account with Care Compare SK, you must click on the 
       <b>Sign-Up</b> button below before proceeding. Care Compare SK is completely confidential and users do
        not need to enter any personal information unless they want.
     </p>
   </div>

        <div v-bind:class="{ noErrorLogin: isUser, errorLogin: noUser }">The username and password dont match or they don't exist.</div>
        <input type="text" class="input" name="userName" v-model="input.userName" placeholder="Username" />
        <br><br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br><br>
        <button type="button" class="button" @click="login(input.userName, input.password)">Login</button>
        <br><br>
        <button type="button" class="button" @click="$router.push('/SignUp')">Dont have an account? Sign-up</button>
    </div>
</template>

<script>

import axios from 'axios'



export default {
   name: 'Login',
        data() {
            return {
                input: {
                    userName: "",
                    password: ""
                },
                gotten_id: 0,
                noUser: false,
                isUser: true
                
            }
    },

  methods: {

    login(userName, password) {
        axios.post(`http://162.253.11.179:3000/login/${userName}/${password}`)
        .then((res) => {
          
          var response = res.data[0];
          this.gotten_id = response;

          if(this.gotten_id == [] || this.gotten_id == "" || this.gotten_id == null || this.gotten_id == 0) {
            this.noUser = true;
            this.isUser = false;
          }
          else{
            this.noUser = false;
            this.isUser = true;
            this.$router.push(`/Dashboard/${this.gotten_id.user_id}`)
          }
        }) 
        .catch(err => {throw err;});

   }
  }
}
</script>

<style>
/* 
#forgot-pass {
  font-size: 100%;
  position: absolute;
  left: 40%;
}

#forgot-pass:hover {
  font-size: 120%;

} */

.noErrorLogin {
visibility: hidden;
}

.errorLogin {
  visibility: visible;
  color: red;
}

.top-buffer {
height: 5%;
}

.welcomeLogin{
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

.welcomeParagraph{
   font-size: 1.2vw;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   color: black;
}

</style>