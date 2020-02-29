<template>
  <div class="mainDiv">

    <div class="left-gray"></div>
    <div class="right-gray"></div>
      
   <div class="top-buffer">
   </div>
        <input type="text" class="input" name="userName" v-model="input.userName" placeholder="Username" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <br>
        <input type="password" class="input" name="confirmPass" v-model="input.confirmPass" placeholder="Confirm Password" />
        <br>
        <br>
         <button type="button" class="button" @click="addUser(input.userName, input.password), $router.push('/Login')" >Sign Up</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/Login')">Already have an account</button>
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
                }
            }
    },

    methods: {

      addUser(userName, password) {
        axios.post(`http://localhost:3000/addUser/${userName}/${password}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});

        

      }

    }


}
</script>

<style>


</style>