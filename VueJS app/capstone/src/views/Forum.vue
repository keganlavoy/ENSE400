<template>

<div class="mainDiv">
  


  <div class="Community">

    <div class="title">
      <h1 class="Home-H1">Share your experiences & search for help.</h1>
    </div>
    
    <div class="left-community">
      <div class="left-text">
        <h2>Community</h2>
        <p>Become part of our community and help us grow and reach others.</p>
        <h2>Experiences</h2>
        <p>See what others have said about their experiences and add your own into the mix.</p>
       
      </div>
    </div>

    <div class="center-community">
        <h2>General Discussion</h2>
    </div>

    <div class="center-community" id="center-community-subheader">
        <pre><h3>Forum                                                                               Topics        Posts         Last Post</h3></pre>
    </div>
    <!--This is where we would do v-for-->
    <div class="center-community" id="center-community-tabs" >
        <pre><h3 class="forumRouting" @click="$router.push('/ForumGeneralDiscussions')" >General Discussion        1  1  Let's talk about...</h3></pre>
        <pre><h3 class="forumRouting" @click="$router.push('/ForumGeneralDiscussions')" >                      By: Mike Hunt</h3></pre>
    </div>
    <div class="center-community" id="center-community-tabs">
         <pre><h3 class="forumRouting" @click="$router.push('/')" >News & Announcements     1  1  Site Updates</h3></pre>
         <pre><h3 class="forumRouting" @click="$router.push('/')" >                      By: Daris</h3></pre>
    </div>
    <div class="center-community" id="center-community-tabs">

    </div>
  
  </div>




   <div class="AboutUs">

    <div class="title">
      <h1 class="Home-H1">About Us</h1>
    </div>
    
    <div class="CenterAboutUs">
      <div class="odd-paragraph">

         <h2>What is our vision?</h2>
           <ul class="aboutUsText">
              <li>We want to create a place where people feel comfortable and confident that they are making the smartest decisions for them when it comes to their insurance.</li>
              <br>
              <li>We want to make finding the best deal as easy and fast as possible and provide direct comparisons between insurance providers so that you don't have to.</li>
              <br>
              <li>In adition, we envision creating a community that freely shares their own experiences and can further help others make the best choices for them.</li>
           </ul>
        

      </div>

      <div class="even-paragraph">

         <h2>What makes us different?</h2>

          <ul class="aboutUsText">
              <li>Instead of comparing only final prices, we also display which options that you selected are covered by each inusrance provider. 
                  This allows you see exactly what you are getting in the packages offered by each provider, and not just a magic number.</li>
                  <br>
              <li>Another thing that sets us apart is our community. People being able to share their experiences and situations allows others to take 
                  their advice and make great decisions of their own.</li> 
           </ul>
  
      </div>

      <div class="odd-paragraph">

         <h2>What is our motivation?</h2>

          <ul class="aboutUsText">
              <li>We have seen and heard enough people struggle with finding the right insurance plan for them. The countless hours of web searching and manual 
                  comparisons between them are stressful and tiring. We are here to change that. We provide a centralized place where you can compare insurance providers stress free.</li>       
           </ul>
      
      </div>



    </div>
  
  </div>



</div>


</template>

<script>



export default {
  name: 'home',
  components: {
      
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
  text-align: left;
}

h2 {
 font-size: 1.4vw;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

h3 {
 font-size: 1.2vw;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: white;
 text-align: left;
 
}

pre {
 position: relative;
 bottom: 30%;
}

.forumRouting {
    color:black;
    font-size: 1.6vw;
    bottom: 0%;
    word-spacing: 1em;
}

ul.aboutUsText {
  font-size: 1vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  
}


.left-text {

  width: 44%;
  text-align: left;
  margin-left: 30%;
}

.left-community {

float: left;
width: 30%;
height: 100%;
margin-top: 9%;

}

.center-community {

float: left;
width: 65%;
height: 10%;
margin-top: 7%;
background-color: rgb(29, 134, 219);
border-radius: 1vh 1vh 0vh 0vh;

}

#center-community-subheader {

height: 6%;
margin-top: 0%;
background-color: rgb(30, 35, 39);
border-radius: 0vh;

}

#center-community-tabs {

height: 15%;
margin-top: 0.5%;
background-color: white;
border-radius: 0vh;

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
border: 1px solid black;

}

.odd-paragraph {
  margin-top: -1.9%;
  background-color:rgb(246, 246, 246);
  height: auto;
}

.even-paragraph {
  margin-top: -1.9%;
  background-color: white;
  height: auto;
}


</style>
