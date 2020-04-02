<template>

<div class="mainDivForum">
  
  <div class="Forum-main">
    

    <!--Title for main forum page-->
    <div class="Forum-title">
      <h1 class="Forum-H1">Share your experiences & search for help</h1>
    </div>

    <!--Forum header that contains all of the buttons for going back to the dashboard, creating your own forum post, and sharing your own personal quote.-->
    <div class="center-community">
        <button type="button" class="forumButton" @click="$router.push(`/Dashboard/${user_id}`)">Back to home</button>
        <button type="button" class="forumButton" @click="$router.push(`/ForumAdd/${user_id}`)">Post a forum</button>
        <h2 class="forum-H2-title" id="generalDiscussion">Care Compare Forum</h2>
        <button type="button" class="getQuotesForumButton" @click="$router.push(`/UserInputQuotes/${user_id}`)">Share your quote</button>
    </div>

    <!--Dark grey subheader under the main header that holds all of the headings that describe the forum posts underneath.-->
    <div class="center-community" id="center-community-subheader">
        <div id="forumHeading"><h2 class="forum-H2">Post Title</h2></div>
        <div id="likesHeading"><h2 class="forum-H2">Likes</h2></div>
        <div id="dislikesHeading"><h2 class="forum-H2">Dislikes</h2></div>
        <div id="repliesHeading"><h2 class="forum-H2">Replies</h2></div>
        <div id="lastPostHeading"><h2 class="forum-H2">Posted By</h2></div>
    </div>



    <!--This is a div that makes use of the v-for directive which repeats the div an amount of times equal to the number of posts retrieved from the database.
        Each post has a unique id and index assigned to it so that they are distiguishable from one another. Each one of these divs provide an array o f options to
        the users such as replying to the post, liking the post, disliking the post, viewing all replies made by other users, and seeing who the post was made by.-->
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

/*The posts array below is used to store an array of forum posts that are returned from the database whenever the page is loaded. These
  are the posts that are immediately viewable by users whe nthey load the forum.
  
  The responses array is used to hold the data returned when a check is made to the like and dislikes tables in our database.*/
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

    /*This function is used when a user attempts to like a particular blog post. A query is made to our database and returns any row that 
      contains the user id and post id together. If a row is returned, that means that the user has already liked this particular post and nothing happens.
      If nothing is returned, the number of likes is increased by one, the user is added to the likes table so they cannot like the same post again, 
      and the blog posts are reloaded to display the new like count.*/
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


    /*This function works the exact same as the checkLikes function above.*/
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

  /*When the forum page is first loaded it queries the database and returns all posts currently in the database and 
    displays them onto the screen for useres to see.*/
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

/*The media tags are used to adjust the heading spacing on different sized screens*/
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
