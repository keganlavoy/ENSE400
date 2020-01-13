<template>
  <div class="login">
      
   <div class="top-buffer">
   </div>
         <input type="text" name="email"  placeholder="Email" />
        <br>
        <br>
        <input type="password" name="password"  placeholder="Password" />
        <br>
        <br>
        <button type="button" id="login-button" >Login</button>
        <br>
        <br>
        <button type="button" id="signUp-button" >Dont have an account? Sign-up</button>
  </div>
  </template>

<script>
export default {
   
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
</style>