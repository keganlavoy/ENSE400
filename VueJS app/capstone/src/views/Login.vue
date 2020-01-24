<template>
  <div class="login">
      
   <div class="top-buffer">
   </div>
        <input type="text" class="input" name="email" v-model="input.email" placeholder="Email" />
        <br>
        <br>
        <input type="password" class="input" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <router-link to="/" id="forgot-pass">Forgot password?</router-link>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/')">Login</button>
        <br>
        <br>
        <button type="button" class="button" @click="$router.push('/')">Dont have an account? Sign-up</button>
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

.input {
  border-radius: 7px;
  padding: 5px;
  outline: none;
  width: 20%;
}

.input:focus {
  border: 3px solid #555;
}

.login {
  background-image: url(../assets/main-background.jpeg);
  background-size: cover;
  height: 100%;
  overflow: hidden;
  text-align: center;
}

.button {
  background-color: #f1f1f1;
  color: black;
  font-size: 16px;
  width: 20%;
  cursor: pointer;
  border-radius: 7px;
}

.button:hover {
  background-color: black;
  color: white;
}

#forgot-pass {
  font-size: 100%;
  position: absolute;
  left: 40%;
}

#forgot-pass:hover {
  font-size: 120%;
}
</style>