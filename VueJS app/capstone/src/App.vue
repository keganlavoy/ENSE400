<template>
  <div id="app">
    <div id="nav">
      <!--ProfileButton class="profileButton" @click.native="$router.push('/ProfilePage')"/>-->
      <router-link to="Dashboard">Home  </router-link> 
      <router-link to="/HealthInsurance">HealthInsurance  </router-link>
      <router-link to="/">Login  </router-link>
      <router-link to="/InsuranceSelection">InsuranceSelection  </router-link>
      <router-link to="/SignUp">SignUp  </router-link>
      <router-link to="/ForgotPass">ForgotPass  </router-link>
      <router-link to="/ProfilePage">Profile Page  </router-link>
      <router-link to="/Forum">Forum  </router-link>
      <!--<h3 @click="$router.push('/')">Care Compare</h3>-->
    </div>
    <router-view/>
    
  </div>
</template>


<script>

//import ProfileButton from '@/components/ProfileButton.vue'


export default {
  name: 'app',
  components: {      
      //ProfileButton
  },
   data()  {
        return {
                         
        };
    }
}
</script>


<style>



#app {
height: 100%;
text-align: center;

}

#nav {
 
  position: -ms-page;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 12%;
  width: 100%;
  background-image: url(assets/CareCompareBanner3.png);
  background-size: cover;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  z-index: 0;
  
}

#nav a {
  font-weight: bold;
  color: #1e5fa0;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.mainDiv {

background-size: cover;
background-color: white;
height: 100%;
width: 100%;
overflow: auto;
-ms-overflow-style: none;
scrollbar-width: none;
}

.mainDiv::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.left-gray {

width: 18%;
height: 100%;
float: left;
background-color: rgb(243, 243, 243);

}

.right-gray {

width: 18%;
height: 100%;
float: right;
background-color: rgb(243, 243, 243);
}

.input {
  border-radius: 7px;
  padding: 5px;
  outline: none;
  width: 20%;
  margin: 1%;
}

.input:focus {
  border: 3px solid #555;
}

.button {
  background-color: #f1f1f1;
  color: black;
  font-size: 16px;
  width: 20%;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
}

.button:hover {
  background-color: black;
  color: white;
}

.dropdown {
  background-color: white;
  color: black;
  padding: 5px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
}

.dropdown:hover {
  background-color: black;
  color: white;
}


</style>
