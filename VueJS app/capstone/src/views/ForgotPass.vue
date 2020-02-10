<template>
  <div class="mainDiv">
      
   <div class="top-buffer">
   </div>
        <input type="text" class="input" name="email" v-model="input.email" placeholder="Email" />
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/Login')">Send email</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/Login')">Back to login page</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/SignUp')">Sign up, I do not have an account</button>        
    </div>
  </template>

<script>

export default {
   name: 'Signup',
        data() {
            return {
                input: {
                    email: "",                    
                }
            }
    }
}
</script>

<style>


</style>