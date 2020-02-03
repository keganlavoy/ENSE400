<template>
  <div class="signup">
      
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

.input {
  border-radius: 7px;
  padding: 5px;
  outline: none;
  width: 20%;
}

.input:focus {
  border: 3px solid #555;
}

.signup {
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

</style>