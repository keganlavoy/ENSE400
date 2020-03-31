<template>
    
<div class="ProfileButton">

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
top: 1.2%;
right: 0.8%;
z-index: 1;
width: 6%;
height: 11.9%;
background-image: url(../assets/ProfileIcon.png), url(../assets/bannerLogoBG.png);
background-size: cover;
background-color: white;
border-left: 2px solid black;
cursor: pointer;
}

#Profile {
width: 5%;
height: 5%;
background-image: url(../assets/ProfileIcon.png), url(../assets/bannerLogoBG.png);
background-size: cover;
background-color: white;
float: right;
border-left: 2px solid black;
cursor: pointer;
z-index: 1;
margin-top: -5%;
}

</style>