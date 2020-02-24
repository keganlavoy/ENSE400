<template>

<div class="mainDiv">

  <div class="Community">

    <div class="title">
      <h1 class="Home-H1">Share your experiences & search for help.</h1>
    </div>
    
    <div class="center-community">
        <h2>Topics</h2>
    </div>

  <div class="center-community" id="center-community-subheader">
        <div id="forumHeading"><h2>Forum Discussion</h2></div>
        <div id="likesHeading"><h2>Likes</h2></div>
        <div id="dislikesHeading"><h2>Dislikes</h2></div>
        <div id="repliesHeading"><h2>Replies</h2></div>
        <div id="lastPostHeading"><h2>Last Post</h2></div>
    </div>
    <!--This is where we would do v-for-->
    <div class="center-community" id="center-community-tabs">
        <div id="topicHeading"><h3>General Discussion</h3></div>
        <div id="replyButton"><button type="button" class="button">Post</button></div>
        <div id="numLikesHeading"><h3>1</h3></div>
        <div id="numDislikesHeading"><h3>1</h3></div>
        <div id="numRepliesHeading"><h3>0</h3></div>
        <div id="lastPostNameHeading"><h3>By: Daris</h3></div>
        <div id="forumPost"><input type="text" class="input" id="forumPost" name="forumPost" v-model="input.forumPost" placeholder="Start writting your forum post here..." /></div>
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

       responses: [],

                input: {
                  forumPost: ""
                },   

      msg: '',
      hover: false
    }

  }
}
</script>


<style>

#forumHeading {
  width: 15%;
  float: left;
  margin-left: 3%;
  margin-right: 25%;
}
#likesHeading {
  float: left;
  margin-right: 7%;
}

#dislikesHeading {
  float: left;
  margin-right: 7%;
}

#repliesHeading {
  float: left;
  margin-right: -5%;
}

#topicHeading {
  float: left;
  margin-right: 0%;
  margin-left: 3%;
  width: 15%;
}

#replyButton {
  width: 25%;
  margin-top: 1%;
  float: left;
}

#numLikesHeading {
  float: left;
  margin-right: 11%;
}

#numDislikesHeading {
  float: left;
  margin-right: 11%;
}

#numRepliesHeading {
  float: left;
  margin-right: 11%;
}

#forumPost {
  width: 85%;
  height: 55%;  
  float: left;
}
.Community {
background-size: cover;
background-color: rgb(243, 243, 243);
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
 color: white;
 font-size: 1.4vw;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

h3 {
 font-size: 1.2vw;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: black;
 text-align: left;
 
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

.center-community {

float: left;
width: 100%;
height: 10%;
margin-top: 7%;
background-color: rgb(29, 134, 219);
border-radius: 1vh 1vh 0vh 0vh;

}

#center-community-subheader {

height: 7%;
margin-top: 0%;
background-color: rgb(30, 35, 39);
border-radius: 0vh;

}
/* add v-for to this css */
#center-community-tabs {

height: 25%;
margin-top: 0.5%;
background-color: white;
border-radius: 0vh;

}


</style>
