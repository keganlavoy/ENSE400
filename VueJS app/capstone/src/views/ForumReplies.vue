<template>

<div class="mainDivForumReply">

  <div class="CommunityForumReply">
    
    <!--Title for furum Replies page-->
    <div class="center-community-ForumReplies">
       <button type="button" class="forumRepliesButton" @click="$router.push(`/Forum/${user_id}`)">Back to home</button>
        <h2 class="ForumReplies-h1">Replies Forum</h2>
    </div>

    <!--Subheader for forum replies page. Similar to forum add page, an invisible span is added here so
        Vue recognizes actual content within the div and loads the element-->
    <div class="center-community-ForumReplies" id="center-community-subheader-ForumReplies">
      <span class='invis'>hello</span>
    </div>
   

    <!--This displays the original post that the user clicked view replies on. That post is duplicated at the top of the
        Replies forum so that users have a quick reference to the original post being replied to.-->
    <div class="center-community-ForumReplies" id="forumReply-originalPost">
        <div id="originalHeaderReply"><h2 class="forumReply-H2">Original Post</h2></div>
        <div id="originalPostHeadingReply"><h3 class="forumReply-Titles">Original post title: {{post[0].post_title}}</h3></div>
        <div id="originalPostNameHeadingReply"><h3 class="forumReply-Titles">Original post by: {{post[0].username}}</h3></div>
        <div id="originalPostReply"><h3 class="forumReply-body">{{post[0].post_body}}</h3></div>
    </div>

    <!--Subheader that marks the start of the replies after the original post-->
    <div class="center-community-ForumReplies" id="center-community-tabs-ForumReplies">
      <div id="replyHeader"><h2 class="forumReply-H2">Replies</h2></div>


    <!--Another v-for directive is used here to display all of the replies retrieved from our database for any particular post.
        Every post is dynamically numbered with the index based on how many replies are in the database for this particular post.-->
    <div class="border">
      <div v-bind:key="reply.reply_id" v-bind:index="index" v-for="(reply, index) in replies">
        <div id="filler"><h2 class="replyNumbering">Reply: #{{index + 1}}</h2></div>
        <div id="replyHeading"><h3 class="forumReply-Titles">Reply title: {{reply.reply_title}}</h3></div>
        <div id="replyNameHeading"><h3 class="forumReply-Titles">Reply posted by: {{reply.username}}</h3></div>
        <div id="originalPostReply"><h3 class="forumReply-body">{{reply.reply_body}}</h3></div>
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


  /*The post array is used to store the orignal post data.
    
    The preplies array is used to store all of the replies gotten from the database.*/
  data() {

    return {


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


  /*When the page is created first the username associated with the user id gotten from the previous page is retrieved from the database.
  
    Next the post associated with the post id gotten from the previous page is used to display the original post that was clicked on
    at the top of the page.
    
    Finally the replies associated with the blog post selected are all retrieved from the database and displayed underneath the original post*/
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


#originalPostReply {
  width: 98%;
  float: left;
  margin-top: 1%;
  margin-left: 1%;
  margin-bottom: 2%;
  border: 1px solid rgb(30, 35, 39);
  border-radius: 8px;  
}


#originalPostNameHeadingReply {
  float: left;
  width: 35%;
  margin-left: 5%;
  text-decoration: underline;
}



#originalPostHeadingReply {
  float: left;
  margin-left: 10%;
  width: 35%;
  text-decoration: underline;  
}
#originalHeaderReply {
  width: 100%;
  height: 5.5vh;
  margin-top: -20px;
  background-color:rgb(30, 35, 39);
}


.forumReply-H2, .replyNumbering {
  font-size: 22px;
  color: white;
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
  background-color: rgb(234, 249, 255);
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

#forumReply-originalPost {
  width: 99%;
  height: auto;
  margin-top: 0.5%;
  background-color: rgb(247, 247, 247);
  border: 4px solid rgb(30, 35, 39);
  border-radius: 8px;
}



</style>
