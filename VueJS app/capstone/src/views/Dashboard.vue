<template>

<div class="mainDivDashboard">
  <div class="quotes">
        
        <div class="title">
         <h1 class="Home-H1">Get quotes fast for the insurance you need.</h1>
        </div>
    
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
  
    <div class="right-quotes">
      
      <div class="InsurancePicture"></div>
      <div class="ComparePicture"></div>
      <QuoteButton msg="Get Quotes" @click.native="$router.push(`/HealthInsurance/${user_id}`)"/>

    </div>
  </div>

  <div class="Community">

    <div class="title">
      <h1 class="Home-H1">Share your experiences to help others!</h1>
    </div>
    
    <div class="left-community">
      <div class="left-text">
        <h2 class="sub-title">Community</h2>
        <p class="paragraph-dashboard">Become part of our community and help us grow and reach others.</p>
        <h2 class="sub-title">Experiences</h2>
        <p class="paragraph-dashboard">See what others have said about their experiences and add your own into the mix.</p>
      
      </div>
    </div>
  
    <div class="right-community">
      
      <div class="CommunityPicture"></div>
      <CommunityButton msg="Share your experiences" @click.native="$router.push(`/Forum/${user_id}`)"/>

    </div>
  </div>

   <div class="AboutUs">

    <div class="title">
      <h1 class="Home-H1">About Us</h1>
    </div>
    
    <div class="CenterAboutUs">
      <div class="odd-paragraph">

         <h2 class="sub-title">What is our vision?</h2>
           <ul class="aboutUsText">
              <li>We want to create a place where people feel comfortable and confident that they are making the smartest decisions for them when it comes to their insurance.</li>
              <br>
              <li>We want to make finding the best deal as easy and fast as possible and provide direct comparisons between insurance providers so that you don't have to.</li>
              <br>
              <li>In adition, we envision creating a community that freely shares their own experiences and can further help others make the best choices for them.</li>
           </ul>      

      </div>

      <div class="even-paragraph">

         <h2 class="sub-title">What makes us different?</h2>

          <ul class="aboutUsText">
              <li>Instead of comparing only final prices, we also display which options that you selected are covered by each inusrance provider. 
                  This allows you see exactly what you are getting in the packages offered by each provider, and not just a magic number.</li>
                  <br>
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
<div class="dashboardFooter">
</div>

<div>
  <ProfileButton class="ProfileButton" @click.native="$router.push(`/ProfilePage/${user_id}`)"/>
</div>
</div>


</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
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

    this.user_id = this.$route.params.user_id;
   
  }
}
</script>


<style>

.quotes {
background-size: cover;
background-color: white;
height: 75%;
width: 100%;
overflow: hidden;
position: relative;
z-index: 2;
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

.paragraph-dashboard {
  font-size: 1vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
}

.sub-title {
 font-size: 1.4vw;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

ul.aboutUsText {
  font-size: 1vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;  
}

.left-quotes {
float: left;
width: 30%;
height: 100%;
margin-top: 3%;
}

.left-text {
  width: 44%;
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
margin-top: 9%;
}

.right-community {
float: right;
width: 65%;
height: 100%;
margin-top: 2%;
overflow: hidden;
}

.CenterAboutUs {
  width: 60%;
  height: auto;
  margin-top: 1%;
  margin-left: 20%;
  border-radius: 7px;
  border: 1px solid black;
}

.odd-paragraph {
  margin-top: -1.9%;
  border-radius: 1vh 1vh 0vh 0vh;
  background-color:rgb(246, 246, 246);
  height: auto;
}

.even-paragraph {
  margin-top: -1.9%;
  background-color: white;
  height: auto;
}

.InsurancePicture {

  width: 54.1%;
  height: 50%;
  float: left;
  border-radius: 7px;
  background-image: url(../assets/selection.jpg);
  background-size: cover;  
}

.ComparePicture {
  width: 45%;
  height: 50%;
  float: right;
  border-radius: 7px;
  background-image: url(../assets/sampleQuoteBluecross.jpg);
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
  height: 20%;
}

</style>
