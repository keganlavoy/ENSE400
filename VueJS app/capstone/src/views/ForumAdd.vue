<template>

<div class="mainDivForumAdd">

  <div class="CommunityForumAdd">

    <div class="titleForumAdd">
      <h1 class="Home-H1ForumAdd">Post your experience below</h1>
    </div>
    
    <div class="center-community-forumAdd">
       <button type="button" class="forumAddBackButton" @click="$router.push(`/Forum/${user_id}`)">Back to forum</button>
       <h2 class="forumAdd-H2" id="postAForum">Post a forum</h2>
    </div>

    <div class="center-community-forumAdd" id="center-community-subheader-forumAdd">
        <span class='invis'>hello</span>
    </div>

    <div class="center-community-forumAdd" id="center-community-tabs-forumAdd">
        <input type="text" class="input" id="postTitle" name="postTitle" v-model="input.postTitle" placeholder="Post Title" />
        <div id="forumAddPost"><textarea input type="text" row="5" col="15" class="input" id="forumPostInput" name="forumPost" v-model="input.forumPost" placeholder="Start writting your forum post here..." ></textarea></div>
        <div id="postButton"><button type="button" class="button" @click="addBlogPost(user_id, input.postTitle, input.forumPost, userName)">Post</button></div>
        <div v-bind:class="{ noError: completeForm, error: incompleteForm }">
          One of the above fields is empty. Make sure both fields are filled before posting.
        </div>
    </div>
  
  </div>

</div>


</template>

<script>
import axios from 'axios'


export default {
  name: 'ForumAdd',
  components: {
      
  },

  data() {

    return {

                input: {
                  forumPost: "",
                  postTitle: ""
                },   

      msg: '',
      user_id: 0,
      userName: "",
      incompleteForm: false,
      completeForm: true
    }

  },

  methods: {

     addBlogPost(user_id, postTitle, postBody, userName) {

        if(postTitle == "" || postBody == "") {
          this.incompleteForm = true;
          this.completeForm = false;
        }

        else {
          this.incompleteForm = false;
          this.completeForm = true;

        axios.post(`http://162.253.11.179:3000/addBlogPost/${user_id}/${postTitle}/${postBody}/${userName}`)
        .then(res => this.input = res.data[0])
        .catch(err => {throw err;});
        this.$router.push(`/Forum/${this.user_id}`)
        }

        },

  },


  created() {

    this.user_id = this.$route.params.user_id
    var id = this.user_id
    axios.get(`http://162.253.11.179:3000/getUsername/${id}`)
    .then((res) => {
    var response = res.data[0];
    this.userName = response.userName;
    })
    .catch(err => {throw err;});    
  }
}
</script>


<style>

#postAForum {
  margin-right: 16%;
}

.forumAdd-H2 {
 color: white;
 font-size: 24px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.forumAddBackButton {
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

#postButton {
  width: 40%;
  margin-top: 0%;
  float: right;
  margin-right: 0.5%;
}

textarea {
  resize: none;
}

#forumAddPost {
  width: 90%;
  height: 50%; 
  margin-top: -3%;
  margin-left: 1%;
}

#forumPostInput {
  width: 90%;
  height: 100%; 
  float: left;
  margin-top: 3%;
  border-radius: 7px;
  padding: 5px;
  outline: none;
  margin: 1%;  
}

#forumPostInput:focus {
  border: 3px solid #555;
}

.CommunityForumAdd {
background-size: cover;
background-color: rgb(234, 249, 255);
height: 800px;
width: 100%;
overflow: hidden;
}

.titleForumAdd {
  height: 10%;
  width: 44%;
  margin-left: 28%;
}

.Home-H1ForumAdd {
  text-align: center;
  font-size: 28px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.center-community-forumAdd {
float: left;
width: 100%;
height: 10%;
margin-top: 2%;
background-color: rgb(29, 134, 219);
border-radius: 8px 8px 0px 0px;
}

#center-community-subheader-forumAdd {
height: 7%;
margin-top: 0%;
background-color: rgb(30, 35, 39);
border-radius: 0px;
}

#center-community-tabs-forumAdd {
width: 99.5%;
height: 400px;
margin-top: 0.5%;
background-color: white;
border: 2px solid rgb(30, 35, 39);
border-radius: 8px;
}

#postTitle {
  float: left;
  margin-left: 2%;
  margin-top: 2%;  
}

.noError {
visibility: hidden;
}

.error {
  visibility: visible;
  color: red;
  float: left;
  font-size: 20px;
  margin-left: 15%;
  margin-top: 1%;
}

.mainDivForumAdd {
height: 100%;
background-color: rgb(234, 249, 255);
}

.invis {
  visibility: hidden;  
}

</style>
