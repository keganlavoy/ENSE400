<template>
  <div class="mainDiv">

    <div class="left-gray"></div>
    <div class="right-gray"></div>
      
   <div class="top-buffer">
   </div>
        <input type="text" class="input" name="email" v-model="input.email" placeholder="Email" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <router-link to="/ForgotPass" id="forgot-pass">Forgot password?</router-link>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/')">Login</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/SignUp')">Dont have an account? Sign-up</button>
    </div>
  </template>

<script>

export default {
   name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
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
</style>