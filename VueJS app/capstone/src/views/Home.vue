<template>

<div class="homepage">
  <div class="quotes">

        <div class="title">
         <h1 class="Home-H1">Get quotes fast for the insurance you need.</h1>
        </div>
    
        <div class="left-quotes">
         <div class="left-text">
            <h2>1. Select</h2>
            <p>Choose which insurance plan is the best fit for you, or even choose a package deal.</p>
            <h2>2. Compare</h2>
            <p>Choose the options you want, and compare quotes side by side to find the best option for you.</p>
           <h2>3. Insure</h2>
            <p>Select the right insurance plan for you - easy as that.</p>
        
         </div>
       </div>
  
    <div class="right-quotes">
      
      <div class="InsurancePicture"></div>
      <div class="ComparePicture"></div>
      <QuoteButton msg="Get Quotes" @click.native="$router.push('/InsuranceSelection')"/>

    </div>
  </div>

  <div class="Community">

    <div class="title">
      <h1 class="Home-H1">Share your experiences.</h1>
    </div>
    
    <div class="left-community">
      <div class="left-text">
        <h2>Community</h2>
        <p>Become part of our community and help us grow and reach others.</p>
        <h2>Experiences</h2>
        <p>See what others have said about their experiences and add your own into the mix.</p>

        
      </div>
    </div>
  
    <div class="right-community">
      
      <div class="CommunityPicture"></div>
      <CommunityButton msg="Share your experiences" @click.native="$router.push('/InsuranceSelection')"/>

    </div>
  </div>




   <div class="AboutUs">

    <div class="title">
      <h1 class="Home-H1">About Us</h1>
    </div>
    
    <div class="CenterAboutUs">
      <div class="center-text">
        

        
      </div>
    </div>
  
  </div>



</div>


    
    
  




</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import QuoteButton from '@/components/getQuotesButton.vue'
import CommunityButton from '@/components/CommunityButton.vue'

export default {
  name: 'home',
  components: {
      QuoteButton,
      CommunityButton,
  },

  data() {

    return {

      msg: '',
      hover: false
    }

  }
}
</script>


<style>

.homepage {

background-size: cover;
background-color: white;
height: 100%;
width: 100%;
overflow: auto;

}
.quotes {

background-size: cover;
background-color: white;
height: 75%;
width: 100%;
overflow: hidden;



}

.Community {
background-size: cover;
background-color: rgb(243, 243, 243);
height: 85%;
width: 100%;
overflow: hidden;


}

.AboutUs {

background-size: cover;
background-color: white;
height: 85%;
width: 100%;
overflow: hidden;


}



.title {

  height: 10%;
  width: 44%;
  margin-left: 28%;

}

.Home-H1 {

  text-align: center;
  font-size: 2.8vw;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

p {
  font-size: 1vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
 font-size: 1.4vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.top-buffer {
height: 20%;

}

.left-quotes {

float: left;
width: 30%;
height: 100%;
margin-top: 5%;

}

.left-text {

  width: 44%;
  text-align: left;
  margin-left: 30%;
}

.right-quotes {
float: right;
width: 65%;
height: 100%;
margin-top: 5%;
overflow: hidden;

}

.left-community {

float: left;
width: 30%;
height: 100%;
margin-top: 9%;

}

.right-community {
float: right;
width: 65%;
height: 100%;
margin-top: 2%;
overflow: hidden;

}




.InsurancePicture {

  width: 48%;
  height: 50%;
  float: left;
  background-image: url(../assets/InsurancePicture.jpg);
  background-size: cover;
  
}

.ComparePicture {
  width: 48%;
  height: 50%;
  float: right;
  
  margin-right: 0%;
  background-image: url(../assets/InsurancePicture.jpg);
  background-size: cover;
  
}

.CommunityPicture {
  width: 40%;
  height: 58%;
  float: right;
  margin-right: 30%;
  background-image: url(../assets/community.png);
  background-size: cover;
  
}


</style>
