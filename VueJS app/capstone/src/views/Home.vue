<template>
  <div class="mainDiv">

    <div class="left-gray"></div>
    <div class="right-gray"></div>
      
   <div class="top-buffer">
   </div>

        <div v-bind:class="{ noError: isUser, error: noUser }">The username and password dont match or they don't exist.</div>
        <input type="text" class="input" name="userName" v-model="input.userName" placeholder="Username" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <router-link to="/ForgotPass" id="forgot-pass">Forgot password?</router-link>
        <br>
        <br>
        <button type="button" class="button" @click="login(input.userName, input.password)">Login</button>
        <br>
        <br>
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
          this.gotten_id = res.data[0]

          if(this.gotten_id == [] || this.gotten_id == "" || this.gotten_id == null) {
            this.noUser = true;
            this.isUser = false;
          }
          else{
            this.noUser = false;
            this.isUser = true;
            this.$router.push('/')
          }
        }) 
        .catch(err => {throw err;});

   }
  }
}
</script>

<style>

#forgot-pass {
  font-size: 100%;
  position: absolute;
  left: 40%;
}

#forgot-pass:hover {
  font-size: 120%;

}

.noError {
visibility: hidden;

}

.error {
  visibility: visible;
  color: red;
}

</style>