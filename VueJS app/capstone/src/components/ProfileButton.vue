<template>
    
<div class="ProfileButton">
  <h4 class="profileH4">Profile</h4>
</div>

</template>

<script>
export default {
      name: "ProfileButton",
        props: {

        sidenav: Boolean
        
    },
      data()  {
        return {
                         
        };
    }
}
</script>

<style scoped>

.ProfileButton {
  position: fixed;
  top: 0px;
  right: 5px;
  z-index: 1;
  width: 6%;
  height: 12%;
  background-image: url(../assets/ProfileIcon.png);
  background-size: cover;
  border-left: 2px solid black;
  cursor: pointer;
}

.ProfileUser {
  border: 2px solid black;
}

.profileH4 {
  float: right;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  margin-top: 8vh;
  margin-right: 1vw;
}

@media screen and (max-width: 1355px){
  .profileH4 {
    font-size: 14px;
    margin-right: 0.5vw;
  }
}

@media screen and (min-width: 1440px){
  .profileH4 {
    font-size: 18px;
    margin-right: 0.5vw;
  }
}

@media screen and (min-width: 1920px){
  .profileH4 {
    font-size: 20px;
    margin-right: 1vw;
  }
}
</style>