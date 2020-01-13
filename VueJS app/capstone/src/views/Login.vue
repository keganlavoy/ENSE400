<template>
  <div class="login">
      
   <div class="top-buffer">
   </div>
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <br>
        <br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <router-link to="/" id="forgot-pass">Forgot your password?</router-link>
        <br>
        <br>
        <button type="button" id="login-button" @click="$router.push('/')">Login</button>
        <br>
        <br>
        <button type="button" id="signUp-button" @click="$router.push('/')">Dont have an account? Sign-up</button>
    </div>
  </template>

<script>

export default {
   name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
    }
}
</script>

<style>

.login {
background-image: url(../assets/main-background.jpeg);
background-size: cover;
height: 100%;
overflow: hidden;
text-align: center;

}

#login-button {
width:15%;
}

#forgot-pass {
font-size: 70%;

}
</style>