<!--Vue.js creates a single page application (only ever loads one page which is this page App.vue)
    Since we are using the Vue-Router extension, it also loads the HTML of the view currently selected.
    This block of code loads the main page App, the nav navigation bar, and the HTML code of the view selected-->

<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
    
  </div>
</template>


<script>



export default {
  name: 'app',
  components: {      
      
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


/*the positions here are set to sticky for multiple browsers
  z index is set so that other components can appear on top of it*/
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


/*This sets the size and color of the main div for all pages. 
  overflow is set to auto to allow scrolling if pages are bigger than 100%. 
  Also removes additional scrollbars from being added*/ 
.mainDiv {
  background-size: cover;
  background-color: white;
  height: 100%;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/*makes added scrollbars invisible*/
.mainDiv::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}


/*left-blue and right-blue are the side blocks on the profile page*/
.left-blue {
  width: 18%;
  height: 120%;
  float: left;
  background-color: rgb(234, 249, 255);
}

.right-blue {
  width: 18%;
  height: 120%;
  float: right;
  background-color: rgb(234, 249, 255);
}

/*input is the styling of our input boxes on all pages*/
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

/*button is the styling for all standard buttons on all pages*/
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


/*dropdown is the styling on all dropdown boxes on all pages*/
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
