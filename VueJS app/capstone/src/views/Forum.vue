<template>

<div class="mainDiv">
  
  <div class="Community">

    <div class="title">
      <h1 class="Home-H1">Share your experiences & search for help.</h1>
    </div>
  
    <div class="center-community">
        <button type="button" class="forumButton" @click="$router.push(`/Dashboard/${user_id}`)">Back to home</button>
        <button type="button" class="forumButton" @click="$router.push(`/ForumAdd/${user_id}`)">Post a forum</button>
        <h2 class="forum-H2" id="generalDiscussion">Care Compare Forum</h2>
    </div>

    <div class="center-community" id="center-community-subheader">
        <div id="forumHeading"><h2 class="forum-H2">Post Title</h2></div>
        <div id="likesHeading"><h2 class="forum-H2">Likes</h2></div>
        <div id="dislikesHeading"><h2 class="forum-H2">Dislikes</h2></div>
        <div id="repliesHeading"><h2 class="forum-H2">Replies</h2></div>
        <div id="lastPostHeading"><h2 class="forum-H2">Posted By</h2></div>
    </div>
    <!--This is where we would do v-for-->
    <div class="center-community" id="center-community-tabs">
      <div v-bind:key="post.post_id" v-for="post in posts">
        
          <div id="topicHeading"><h3 class="forum-H3">{{post.post_title}}</h3></div>
          <div id="replyButton"><button type="button" class="button" @click="$router.push(`/ForumAddReply/${user_id}/${post.post_id}/${post.post_replies}`)">Reply</button></div>
          <div id="numLikesHeading"><h3 class="forum-H3">{{post.post_likes}}</h3></div>        
          <div id="numDislikesHeading"><h3 class="forum-H3">{{post.post_dislikes}}</h3></div>        
          <div id="numRepliesHeading"><h3 class="forum-H3">{{post.post_replies}}</h3></div>
          <div id="lastPostNameHeading"><h3 class="forum-H3">{{post.username}}</h3></div>
          <button type="button" id="numLikesButton" class="button" @click="checkLike(post.post_id, user_id, post.post_likes)">Like</button>
          <button type="button" id="numDislikesButton" class="button" @click="checkDislike(post.post_id, user_id, post.post_dislikes)">Dislike</button>
          <button type="button" id="viewRepliesButton" class="button" @click="$router.push('/ForumReplies')">View Replies</button>
          <div id="forumPost"><h3 class="forum-H3">{{post.post_body}}</h3></div>
        
      </div>
    </div>
      
  </div>

</div>


</template>

<script>

import axios from 'axios'


export default {
  name: 'home',
  components: {
      
  },

  data() {

    return {

      posts: [],
      responses: [],
      msg: '',
      hover: false,
      user_id: 0

    }

  },


  methods: {

    checkLike(post_id, user_id, likes) {

    axios.get(`http://162.253.11.179:3000/checkLike/${post_id}/${user_id}`)
    .then((res) => {
    this.responses = res.data[0];
    
    if(this.responses == null || this.responses == []){
      likes = likes + 1;
      

      axios.post(`http://162.253.11.179:3000/addLike/${post_id}/${user_id}`)
      .then(res => this.responses = res.data[0])
      
      .catch(err => {throw err;});

      axios.post(`http://162.253.11.179:3000/updateLike/${post_id}/${likes}`)
      .then(res => this.responses = res.data[0])
      .catch(err => {throw err;});

      axios.get(`http://162.253.11.179:3000/getBlogPosts`)
      .then(res => this.posts = res.data)
      .catch(err => {throw err;});


    }

    })
    .catch(err => {throw err;});

    },



    checkDislike(post_id, user_id, dislikes) {

    axios.get(`http://162.253.11.179:3000/checkDislike/${post_id}/${user_id}`)
    .then((res) => {
    this.responses = res.data[0];
    
    if(this.responses == null || this.responses == []){
      dislikes = dislikes + 1;
      

      axios.post(`http://162.253.11.179:3000/addDislike/${post_id}/${user_id}`)
      .then(res => this.responses = res.data[0])
      
      .catch(err => {throw err;});

      axios.post(`http://162.253.11.179:3000/updateDislike/${post_id}/${dislikes}`)
      .then(res => this.responses = res.data[0])
      .catch(err => {throw err;});

      axios.get(`http://162.253.11.179:3000/getBlogPosts`)
      .then(res => this.posts = res.data)
      .catch(err => {throw err;});


    }

    })
    .catch(err => {throw err;});

    }


  },

  created() {

    this.user_id = this.$route.params.user_id;
    axios.get(`http://162.253.11.179:3000/getBlogPosts`)
    .then(res => this.posts = res.data)
    .catch(err => {throw err;});

  }

}
</script>


<style>

#generalDiscussion {
  margin-right: 23%;
}

.forumButton {
  float: left;
  width: 10%;
  margin-left: 1%;
  margin-top: 1%;
  background-color: #f1f1f1;
  color: black;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
}

#forumHeading {
  width: 15%;
  float: left;
  margin-left: 1%;
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
  margin-left: 1%;
  width: 15%;
  
}

#replyButton {
  width: 25%;
  margin-top: 1%;
  margin-right: 1%;
  float: left;
}

#numLikesHeading {
  float: left;
  margin-left: 0%;
}

#numDislikesHeading {
  float: left;
  margin-left: 11%;
}

#numLikesButton {
  float: left;
  margin-left: 40%;
  margin-right: 5%;
  margin-top: 1%;
  width: 5%;
}

#numDislikesButton {
  float: left;
  margin-left: 2%;
  margin-right: 5%;
  margin-top: 1%;
  width: 5%;
}

#viewRepliesButton {
  float: left;
  margin-left: 1%;
  margin-right: 5%;
  margin-top: 1%;
  width: 6%;
}
#numRepliesHeading {
  float: left;
  margin-left: 11%;
}

#lastPostNameHeading {
  float: left;
  margin-left: 14%;

}

#forumPost {
  width: 98%;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
  margin-bottom: 2%;
  border-bottom: 3px solid rgb(29, 134, 219);
  
}


.Community {
background-size: cover;
background-color: rgb(243, 243, 243);
height: auto;
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

.forum-H2 {
 color: white;
 font-size: 1.4vw;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.forum-H3 {
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
height: auto;
margin-top: 2%;
background-color: rgb(29, 134, 219);
border-radius: 1vh 1vh 0vh 0vh;
overflow: auto;

}

#center-community-subheader {

height: 10%;
margin-top: 0%;
background-color: rgb(30, 35, 39);
border-radius: 0vh;

}
/* add v-for to this css */
#center-community-tabs {

height: 60%;
width: 95%;
margin-left: 2.5%;
margin-top: 0.5%;
background-color: white;

}

.mainDiv {

  height: auto;
}


</style>
