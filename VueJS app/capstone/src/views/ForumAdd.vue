<template>

<div class="mainDiv">

  <div class="Community">

    <div class="title">
      <h1 class="Home-H1">Post your experience below</h1>
    </div>
    
    <div class="center-community">
       <button type="button" class="forumButton" @click="$router.push(`/Forum/${user_id}`)">Back to home</button>
    </div>

  <div class="center-community" id="center-community-subheader">
    </div>

    <div class="center-community-forumAdd" id="center-community-tabs-forumAdd">
        <input type="text" class="input" id="postTitle" name="postTitle" v-model="input.postTitle" placeholder="Post Title" />
        <div id="forumPost"><textarea input type="text" row="5" col="15" class="input" id="forumPostInput" name="forumPost" v-model="input.forumPost" placeholder="Start writting your forum post here..." ></textarea></div>
        <div id="postButton"><button type="button" class="button" @click="addBlogPost(user_id, input.postTitle, input.forumPost, userName)">Post</button></div>
        <div v-bind:class="{ noError: completeForm, error: incompleteForm }">One of the above fields is empty.</div>
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




#postButton {
  width: 40%;
  margin-top: -2%;
  float: right;
  margin-right: 7.5%;
  margin-top: -1%;
}


textarea {
  resize: none;
}

#forumPost {
  width: 80%;
  height: 40%; 
  margin-top: -3%;
}

#forumPostInput {
  width: 90%;
  height: 100%; 
  float: left;
  margin-top: 3%;
  
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

.center-community-forumAdd {

float: left;
width: 100%;
height: 15%;
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
#center-community-tabs-forumAdd {

height: 35%;
margin-top: 0.5%;
background-color: white;
border-radius: 0vh;

}

#postTitle {

  float: left;
  margin-left: 4%;
  margin-top: 2%;
  
}

.noError {
visibility: hidden;

}

.error {
  visibility: visible;
  color: red;
  float: left;
  font-size: 1.3vw;
  margin-left: 40%;
  margin-top: 1%;
}

</style>
