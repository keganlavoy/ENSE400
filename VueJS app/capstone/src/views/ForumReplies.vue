<template>

<div class="mainDivForumReply">

  <div class="CommunityForumReply">
    
    <div class="center-community-ForumReplies">
       <button type="button" class="forumRepliesButton" @click="$router.push(`/Forum/${user_id}`)">Back to home</button>
        <h2 class="ForumReplies-h1">Replies Forum</h2>
    </div>

    <div class="center-community-ForumReplies" id="center-community-subheader-ForumReplies">
      <span class='invis'>hello</span>
    </div>
   
    <div class="center-community-forumAddReply" id="forumAddReply-originalPost">
        <div id="originalHeader"><h2 class="forumAddReply-H2">Original Post</h2></div>
        <div id="originalPostHeading"><h3 class="forumAddReply-Titles">Original post title: {{post[0].post_title}}</h3></div>
        <div id="originalPostNameHeading"><h3 class="forumAddReply-Titles">Original post by: {{post[0].username}}</h3></div>
        <div id="originalPost"><h3 class="forumAddReply-body">{{post[0].post_body}}</h3></div>
    </div>

    <div class="center-community-ForumReplies" id="center-community-tabs-ForumReplies">
      <div id="replyHeader"><h2 class="forumAddReply-H2">Replies</h2></div>

    <div class="border">
      <div v-bind:key="reply.reply_id" v-bind:index="index" v-for="(reply, index) in replies">
        <div id="filler"><h2 class="replyNumbering">Reply: #{{index + 1}}</h2></div>
        <div id="replyHeading"><h3 class="forumReply-Titles">Reply title: {{reply.reply_title}}</h3></div>
        <div id="replyNameHeading"><h3 class="forumReply-Titles">Reply posted by: {{reply.username}}</h3></div>
        <div id="originalPost"><h3 class="forumReply-body">{{reply.reply_body}}</h3></div>
      </div>
    </div>


    </div>
  
  </div>

</div>


</template>

<script>

import axios from 'axios'

export default {
  name: 'ForumReplies',
  components: {
      
  },

  data() {

    return {

       responses: [],
       post: [],
       replies: [],
      input: {
                  
      },   

      msg: '',
      hover: false,
      user_id: 0,
      post_id: 0,
      userName: "",
    }


  },

  methods: {




  },

  created() {

    this.user_id = this.$route.params.user_id
    this.post_id = this.$route.params.post_id
    var id = this.user_id
    var post_id = this.post_id


    axios.get(`http://162.253.11.179:3000/getUsername/${id}`)
    .then((res) => {
    var response = res.data[0];
    this.userName = response.userName;
    })
    .catch(err => {throw err;});

    axios.get(`http://162.253.11.179:3000/getSingleBlogPost/${post_id}`)
    .then(res => this.post = res.data)
    .catch(err => {throw err;});


    axios.get(`http://162.253.11.179:3000/getAllReplies/${post_id}`)
    .then(res => this.replies = res.data)
    .catch(err => {throw err;});

  }

}
</script>


<style>

.forumAddReply-H2, .replyNumbering {
  font-size: 22px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#replyHeading {
  float: left;
  margin-left: 10%;
  width: 35%;
  text-decoration: underline; 
}

#replyHeader {
  width: 100%;
  height: 5.5vh;
  margin-top: -19px;
  margin-bottom: 0%;
  background-color:rgb(30, 35, 39);
  border-radius: 3px 3px 0px 0px;
  border-bottom: 3px solid white;
}

#replyNameHeading {
  float: left;
  width: 35%;
  margin-left: 5%;
  text-decoration: underline;  
}

#topics {
  margin-right: 20%;
}

.forumReply-Titles {
 color: black;
 font-size: 22px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forumReply-body {
  font-size: 18px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  text-align: left;
  margin-left: 1%;
  margin-bottom: 2vh;
}

#filler {
  float: left;
  color: white;
  width: 100%;
  height: 50px;
  background-color: rgb(30, 35, 39);
}

.forumRepliesButton {
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
  overflow: auto;
}

.CommunityForumReply {
  background-size: cover;
  background-color: rgb(243, 243, 243);
  height: 85%;
  width: 100%;
  overflow: hidden;
}

.ForumReplies-h1 {
  text-align: center;
  font-size: 28px;
  color: white;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 0%;
  margin-right: 10%;
}

.center-community-ForumReplies {
  float: left;
  width: 100%;
  height: 60px;
  margin-top: 3%;
  background-color: rgb(29, 134, 219);
  border-radius: 8px 8px 0px 0px;
}

#center-community-subheader-ForumReplies {
  height: 4vh;
  margin-top: 0%;
  background-color: rgb(30, 35, 39);
  border-radius: 0px;
}

#center-community-tabs-ForumReplies {
  width: 99.6%;
  height: 25%;
  margin-top: 0.5%;
  background-color: white;
  border: 3px solid rgb(30, 35, 39);
  border-radius: 8px;
  margin-top: 2%;
}

.invis {
  visibility: hidden;
}

</style>
