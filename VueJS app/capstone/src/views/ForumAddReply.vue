<template>

<div class="mainDivForumAddReply">

  <div class="CommunityForumAddReply">


    
    <div class="center-community-forumAddReply">
       <button type="button" class="forumAddReplyBackButton" @click="$router.push(`/Forum/${user_id}`)">Back to forum</button>
       <h2 class="forumAddReply-H2-title" id="postAReply">Post a reply</h2>
    </div>

    <div class="center-community-forumAddReply" id="center-community-subheader-forumAddReply">
        <span class='invis'>hello</span>
    </div>

    <div class="center-community-forumAddReply" id="forumAddReply-originalPost">
        <div id="originalHeader"><h2 class="forumAddReply-H2">Original Post</h2></div>
        <div id="originalPostHeading"><h3 class="forumAddReply-Titles">Original post title: {{post[0].post_title}}</h3></div>
        <div id="originalPostNameHeading"><h3 class="forumAddReply-Titles">Original post by: {{post[0].username}}</h3></div>
        <div id="originalPost"><h3 class="forumAddReply-body">{{post[0].post_body}}</h3></div>
    </div>

    <div class="center-community-forumAddReply" id="center-community-tabs-forumAddReply">
        <div id="originalHeader"><h2 class="forumAddReply-H2">Your Reply</h2></div>
        <input type="text" class="input" id="replyTitle" name="replyTitle" v-model="input.replyTitle" placeholder="Reply Title" />
        <div id="forumAddReply"><textarea input type="text" row="5" col="15" class="input" id="forumReplyInput" name="forumReply" v-model="input.forumReply" placeholder="Start writting your Reply here..." ></textarea></div>
        <div id="ReplyButton"><button type="button" class="button" @click="addReply(user_id, input.replyTitle, input.forumReply, userName, post_id)">Reply</button></div>
        <div v-bind:class="{ noErrorReply: completeForm, errorReply: incompleteForm }">
          One of the above fields is empty. Make sure both fields are filled before replying.
          </div>
    </div>  
  </div>
</div>

</template>

<script>
import axios from 'axios'


export default {
  name: 'ForumAddReply',
  components: {
      
  },

  data() {

    return {

    input: {
        forumReply: "",
        replyTitle: ""
    },
    
    post: [],
    replies: [],
    response: [],
    msg: '',
    user_id: 0,
    post_id: 0,
    userName: "",
    incompleteForm: false,
    completeForm: true
    }

  },

  methods: {

     addReply(user_id, replyTitle, replyBody, userName) {

        if(replyTitle == "" || replyBody == "") {
          this.incompleteForm = true;
          this.completeForm = false;
        }

        else {
          this.incompleteForm = false;
          this.completeForm = true;
          var post_id = this.post_id;
          var replies = this.post[0].post_replies + 1;


        axios.post(`http://162.253.11.179:3000/addReply/${user_id}/${replyTitle}/${replyBody}/${userName}/${post_id}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});

        axios.post(`http://162.253.11.179:3000/updateReplies/${post_id}/${replies}`)
        .then(res => this.responses = res.data[0])
        .catch(err => {throw err;});

        this.$router.push(`/Forum/${this.user_id}`)
        }

        },

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
    
  }
}
</script>


<style>

#postAReply {
  margin-right: 10.5%;
}

#originalPostHeading {
  float: left;
  margin-left: 10%;
  width: 35%;
  text-decoration: underline;  
}

#originalPostNameHeading {
  float: left;
  width: 35%;
  margin-left: 5%;
  text-decoration: underline;
}

#originalHeader {
  width: 100%;
  height: 5.5vh;
  margin-top: -20px;
  background-color:rgb(30, 35, 39);
}

#forumAddReply-originalPost {
  width: 99%;
  height: auto;
  margin-top: 0.5%;
  background-color: rgb(247, 247, 247);
  border: 4px solid rgb(30, 35, 39);
  border-radius: 8px;
}

#originalPost {
  width: 98%;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
  margin-bottom: 2%;
  border: 1px solid rgb(30, 35, 39);
  border-radius: 8px;  
}

.forumAddReply-H2 {
 color: white;
 font-size: 20px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forumAddReply-H2-title {
 color: white;
 font-size: 26px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forumAddReply-Titles {
 color: black;
 font-size: 22px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.forumAddReply-body {
 font-size: 18px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: black;
 text-align: left;
 margin-left: 1%;
}

.forumAddReplyBackButton {
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

#ReplyButton {
  width: 40%;
  margin-bottom: 1%;
  float: right;
  margin-right: 0.5%;
}

textarea {
  resize: none;
}

#forumAddReply {
  width: 90%;
  height: 10vh; 
  margin-top: -3%;
  margin-left: 1%;
}

#forumReplyInput {
  width: 90%;
  height: 100%; 
  float: left;
  margin-top: 3%;
  border-radius: 7px;
  padding: 5px;
  outline: none;
  margin: 1%;  
}

#forumReplyInput:focus {
  border: 3px solid #555;
}

.CommunityForumAddReply {
  background-size: cover;
  background-color: rgb(243, 243, 243);
  height: 90%;
  width: 100%;
  overflow: hidden;
}

.titleForumAddReply {
  height: 10%;
  width: 44%;
  margin-left: 28%;
}

.Home-H1ForumAddReply {
  text-align: center;
  font-size: 18px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.center-community-forumAddReply {
float: left;
width: 100%;
height: 10%;
margin-top: 2%;
background-color: rgb(29, 134, 219);
border-radius: 8px 8px 0px 0px;
}

#center-community-subheader-forumAddReply {
height: 4vh;
margin-top: 0%;
background-color: rgb(30, 35, 39);
border-radius: 0px;
margin-bottom: 1%;
}

#center-community-tabs-forumAddReply {
width: 99%;
height: 40%;
margin-top: 2%;
background-color: rgb(247, 247, 247);
border: 4px solid rgb(30, 35, 39);
border-radius: 8px;
margin-bottom: 7vh;
}

#replyTitle {
  float: left;
  margin-left: 2%;
  margin-top: 2%;  
}

.noErrorReply {
visibility: hidden;
}

.errorReply {
  visibility: visible;
  color: red;
  float: left;
  font-size: 20px;
  margin-left: 15%;
  margin-top: 1%;
}

.mainDivForumAddReply {
height: auto;
}

.invis {
  visibility: hidden;
  height: 20%;
}

</style>