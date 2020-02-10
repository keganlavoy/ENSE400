<template>
  <div class="mainDiv">
      
   <div class="top-buffer">
   </div>
        <input type="text" class="input" name="email" v-model="input.email" placeholder="Email" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Confirm Password" />
        <br>
        <br>
         <button type="button" class="button" @click="$router.push('/Login')">Sign Up</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/Login')">Already have an account</button>
    </div>
  </template>

<script>

export default {
   name: 'Signup',
        data() {
            return {
                input: {
                    email: "",
                    password: "",
                    confirmPass:""
                }
            }
    }
}
</script>

<style>


</style>