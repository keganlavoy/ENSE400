<template>

<div class="mainDivDashboard">

    <!--Div for first block on dashboard-->
    <div class="quotes">
        
        <!--Title for Dashboard-->
        <div class="title-quotes">
         <h1 class="Home-H1">Get quotes fast for the insurance you need!</h1>
        </div>
    
        <!--Contains the text on the left side of the screen of first block on dashboard-->
        <div class="left-quotes">
          <div class="left-text">
            <h2 class="sub-title">1. Select</h2>
            <p class="paragraph-dashboard">Choose which insurance plan is the best fit for you, or even choose a package deal.</p>
            <h2 class="sub-title">2. Compare</h2>
            <p class="paragraph-dashboard">Choose the options you want, and compare quotes side by side to find the best option for you.</p>
            <h2 class="sub-title">3. Share</h2>
            <p class="paragraph-dashboard">Feel free to share your experience with us, along with others.</p>
          </div>
        </div>
  

        <!--Contains the two pictures and get quotes button on the right side of first block on dashboard-->
        <div class="right-quotes">
          <div class="InsurancePicture"></div>
          <div class="ComparePicture"></div>
          <QuoteButton msg="Get Quotes" @click.native="$router.push(`/HealthInsurance/${user_id}`)"/>
        </div>

    </div>



  <!--Div for second block on dashboard-->
  <div class="Community">

    <!--Title for second block of dashboard-->
    <div class="title-community">
      <h1 class="Home-H1">Share your experiences to help others!</h1>
    </div>
    

    <!--Holds the text on the left side of the screen of second block of dashboard-->
    <div class="left-community">
      <div class="left-text">
        <h2 class="sub-title">Community</h2>
        <p class="paragraph-dashboard">Become part of our community and help us grow and reach others.</p>
        <h2 class="sub-title">Experiences</h2>
        <p class="paragraph-dashboard">See what others have said about their experiences and add your own into the mix.</p>
      </div>
    </div>
  

    <!--Holds the picture and share experiences button on the right side of screen of the second block of dashboard-->
    <div class="right-community">
      <div class="CommunityPicture"></div>
      <CommunityButton msg="Share your experiences" @click.native="$router.push(`/Forum/${user_id}`)"/>
    </div>
  </div>



    <!--Div for third block of dashboard-->
    <div class="AboutUs">

      <!--Title for third block of dashboard-->
      <div class="title-about">
        <h1 class="Home-H1">About Us</h1>
      </div>
    

      <!--Holds all info displayed in the about us block-->
      <div class="CenterAboutUs">
        <div class="odd-paragraph">

          <h2 class="sub-title">What is our vision?</h2>
            <ul class="aboutUsText">
              <li>We want to create a place where people feel comfortable and confident that they are making the smartest decisions for them when it comes to their insurance.</li>
              <br>
              <li>We want to make finding the best deal as easy and fast as possible and provide direct comparisons between insurance providers so that you don't have to.</li>
              <br>
              <li>In addition, we envision creating a community that freely shares their own experiences and can further help others make the best choices for them.</li>
            </ul>      
        </div>


        <div class="even-paragraph">

          <h2 class="sub-title">What makes us different?</h2>

            <ul class="aboutUsText">
              <li>Instead of comparing only final prices, we also display which options that you selected are covered by each inusrance provider. 
                  This allows you see exactly what you are getting in the packages offered by each provider, and not just a magic number.</li><br>
              <li>Another thing that sets us apart is our community. People being able to share their experiences and situations allows others to take 
                  their advice and make great decisions of their own.</li> 
            </ul>
        </div>


        <div class="odd-paragraph">

          <h2 class="sub-title">What is our motivation?</h2>

            <ul class="aboutUsText">
              <li>We have seen and heard enough people struggle with finding the right insurance plan for them. The countless hours of web searching and manual 
                  comparisons between them are stressful and tiring. We are here to change that. We provide a centralized place where you can compare insurance providers stress free.</li>       
            </ul>      
        </div>
      </div>  
    </div>
    
    <!--adds space at bottom of page for a footer-->
    <div class="dashboardFooter"></div>

    <!--creates profile button in top right corner. Uses absolute positioning so it is placed in top corner.-->
    <div>
      <ProfileButton class="ProfileButton" @click.native="$router.push(`/ProfilePage/${user_id}`)"/>
    </div>
</div>


</template>

<script>

//import all comonents needed for buttons
import QuoteButton from '@/components/getQuotesButton.vue'
import CommunityButton from '@/components/CommunityButton.vue'
import ProfileButton from '@/components/ProfileButton.vue'

export default {
  name: 'home',
  components: {
      QuoteButton,
      CommunityButton,
      ProfileButton,
  },

  data() {

    return {

      msg: '',
      hover: false,
      user_id: 0
    }

  },

  created() {
    //sets the user id to the user id gotten from login
    this.user_id = this.$route.params.user_id;
   
  }
}
</script>


<style>

.quotes {
  background-size: cover;
  background-color: white;
  height: 550px;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.Community {
  background-size: cover;
  background-color: rgb(234, 249, 255);
  height: 850px;
  width: 100%;
  overflow: hidden;
}

.AboutUs {
  background-size: cover;
  background-color: white;
  height: 750px;
  width: 100%;
  overflow: hidden;
}

.title-about {
  height: 10%;
  width: 85%;
  margin-left: 7%;
}

.title-community {
  height: 10%;
  width: 100%;
  
}

.title-quotes {
  height: 10%;
  width: 100%;
  
}

.Home-H1 {
  text-align: center;
  font-size: 40px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.paragraph-dashboard {
  font-size: 15px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
}

@media screen and (min-width: 1680px){
  .paragraph-dashboard {
    font-size: 18px;
  }
}

@media screen and (min-width: 2100px){
  .paragraph-dashboard {
    font-size: 24px;
  }
}

.sub-title {
 font-size: 22px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@media screen and (min-width: 1680px){
  .sub-title{
    font-size: 24px;
  }
}

@media screen and (min-width: 2100px){
  .sub-title{
    font-size: 28px;
  }
}

ul.aboutUsText {
  font-size: 18px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
   
}

.left-quotes {
float: left;
width: 30%;
height: 100%;
margin-top: 3vh;
}

.left-text {
  width: 55%;
  text-align: left;
  margin-left: 30%;
}

.right-quotes {
float: right;
width: 69%;
height: 100%;
margin-top: 5%;
overflow: hidden;
}

.left-community {
float: left;
width: 30%;
height: 100%;
margin-top: 3%;
}

.right-community {
float: right;
width: 65%;
height: 100%;
margin-top: 0%;
overflow: hidden;
}

.CenterAboutUs {
  width: 80%;
  height: auto;
  margin-top: 2%;
  margin-left: 10%;
  border-radius: 8px;
  border: 1px solid black;
}

.odd-paragraph {
  margin-top: -18px;
  margin-bottom: -12px;
  border-radius: 8px 8px 0px 0px;
  background-color: rgb(234, 249, 255);
  height: auto;
}

.even-paragraph {
  margin-top: -18px;
  background-color: white;
  height: auto;
}

.InsurancePicture {
  width: 450px;
  height: 50%;
  float: left;
  border-radius: 7px;
  background-image: url(../assets/selection.jpg);
  background-size: cover;  
}


/*All media tags below here adjust the size and position of the pictures based on the size of the screen of the user*/
@media screen and (max-width: 1365px){
  .InsurancePicture {
    width: 70%;
    margin-left: 16%;
  }
}

.ComparePicture {
   width: 50%;
   height: 50%;
   float: right;
   border-radius: 7px;
   background-image: url(../assets/sampleQuoteBluecross.jpg);
   background-size: cover;  
}

@media screen and (max-width: 1365px){
  .ComparePicture {
    display:none;
  }
}

@media screen and (max-width: 1680px){
  .ComparePicture {
    width: 45%;
    height: 50%;
  }
}

@media screen and (max-width: 1440px){
  .ComparePicture {
    width: 50%;
    height: 50%;
  }
}

@media screen and (min-width: 1880px){
  .ComparePicture {
    width: 60%;
    height: 50%;
  }
}

@media screen and (min-width: 1441px){
  .ComparePicture {
    margin-right: 100px;
  }
}

@media screen and (min-width: 1880px){
  .ComparePicture {
    margin-right: 30px;
  }
}

.CommunityPicture {
  width: 558px;
  height: 550px;
  float: right;
  margin-right: 10%;
  background-image: url(../assets/community.png);
  background-size: cover;  
}

.mainDivDashboard {
  background-size: cover;
  background-color: white;
  height: 100%;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mainDivDashboard::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.dashboardFooter{
  background-color: white;
  height: 10%;
}

</style>
