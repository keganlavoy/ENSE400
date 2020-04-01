<template>

<div class="mainDivForum">
  
  <div class="Forum-main">

    <div class="Forum-title">
      <h1 class="Forum-H1">Share your experiences & search for help</h1>
    </div>
  
    <div class="center-community">
        <button type="button" class="forumButton" @click="$router.push(`/Dashboard/${user_id}`)">Back to home</button>
        <button type="button" class="forumButton" @click="$router.push(`/ForumAdd/${user_id}`)">Post a forum</button>
        <h2 class="forum-H2-title" id="generalDiscussion">Care Compare Forum</h2>
        <button type="button" class="getQuotesForumButton" @click="$router.push(`/UserInputQuotes/${user_id}`)">Share your quote</button>
    </div>

    <div class="center-community" id="center-community-subheader">
        <div id="forumHeading"><h2 class="forum-H2">Post Title</h2></div>
        <div id="likesHeading"><h2 class="forum-H2">Likes</h2></div>
        <div id="dislikesHeading"><h2 class="forum-H2">Dislikes</h2></div>
        <div id="repliesHeading"><h2 class="forum-H2">Replies</h2></div>
        <div id="lastPostHeading"><h2 class="forum-H2">Posted By</h2></div>
    </div>




    <div class="center-community" id="center-community-tabs">
      <div v-bind:key="post.post_id" v-bind:index="index" v-for="(post, index) in posts">
          <div id="postHead"><h2 class="postNumbering">Post: # {{index + 1}}</h2></div>
          <div id="topicHeading"><h3 class="forum-H1">{{post.post_title}}</h3></div>
          <div id="replyButton"><button type="button" class="button" @click="$router.push(`/ForumAddReply/${user_id}/${post.post_id}/${post.post_replies}`)">Reply</button></div>
          <div id="numLikesHeading"><h3 class="forum-H3">{{post.post_likes}}</h3></div>        
          <div id="numDislikesHeading"><h3 class="forum-H3">{{post.post_dislikes}}</h3></div>        
          <div id="numRepliesHeading"><h3 class="forum-H3">{{post.post_replies}}</h3></div>
          <div id="lastPostNameHeading"><h3 class="forum-H3">{{post.username}}</h3></div>
          <button type="button" id="numLikesButton" class="button" @click="checkLike(post.post_id, user_id, post.post_likes)">Like</button>
          <button type="button" id="numDislikesButton" class="button" @click="checkDislike(post.post_id, user_id, post.post_dislikes)">Dislike</button>
          <button type="button" id="viewRepliesButton" class="button" @click="$router.push(`/ForumReplies/${user_id}/${post.post_id}`)">View Replies</button>
          <div id="forumPost"><h3 class="forum-body">{{post.post_body}}</h3></div>
        
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

#postHead {
  float: left;
  color: white;
  width: 100%;
  height: 50px;
  background-color: rgb(30, 35, 39);
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

.getQuotesForumButton {
  float: right;
  width: 10%;
  margin-right: 1%;
  margin-top: -55px;
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

@media screen and (min-width: 1600px){
  #dislikesHeading {
    float: left;
    margin-right: 9%;
  }
}

@media screen and (min-width: 1900px){
  #dislikesHeading {
    float: left;
    margin-right: 10%;
  }
}

@media screen and (min-width: 2000px){
  #dislikesHeading {
    float: left;
    margin-right: 12%;
  }
}

#topicHeading {
  float: left;
  margin-left: 1%;
  width: 28%;
}

#replyButton {
  float: left;
  width: 30%;
  margin-top: 6%;
  margin-left: -10%;
}

#numLikesHeading {
  float: left;
  margin-left: -7%;
}

#numLikesButton {
  float: left;
  margin-left: -27%;
  margin-top: 6%;
  width: 5%;
}

#numDislikesHeading {
  float: left;
  margin-left: 4%;
}

#numDislikesButton {
  float: left;
  margin-left: -18%;
  margin-top: 6%;
  width: 10%;
}

#numRepliesHeading {
  float: left;
  margin-left: 12%;
}

#viewRepliesButton {
  float: left;
  margin-left: -4%;
  margin-top: 6%;
  width: 8%;
}

#lastPostNameHeading {
  float: right;
  margin-right: 10%;
}

#forumPost {
  width: 98%;
  float: left;
  margin-top: 2%;
  margin-left: 1%;
  margin-bottom: 2%;
  border: 3px solid rgb(30, 35, 39);
  border-radius: 8px;  
}

.Forum-main {
  background-size: cover;
  background-color: rgb(234, 249, 255);
  height: auto;
  width: 100%;
  overflow: hidden;
}

.Forum-title {
  height: 10%;
  width: 60%;
  margin-left: 20%;
}

.Forum-H1 {
  text-align: center;
  font-size: 28px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forum-H1 {
 font-size: 20px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: black;
 text-align: left;
}

.forum-H2 {
 color: white;
 font-size: 18px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forum-H2-title, .postNumbering {
 color: white;
 font-size: 24px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forum-H3 {
 font-size: 20px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: black;
 text-align: left; 
}

.forum-body {
 font-size: 14px;
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

.center-community {
  float: left;
  width: 100%;
  height: auto;
  margin-top: 2%;
  background-color: rgb(29, 134, 219);
  border-radius: 8px 8px 0px 0px;
  overflow: auto;
}

#center-community-subheader {
  height: 10%;
  margin-top: 0%;
  background-color: rgb(30, 35, 39);
  border-radius: 0vh;
}

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
