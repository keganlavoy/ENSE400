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

width: 5%;
height: 100%;
background-image: url(../assets/ProfileIcon.png), url(../assets/bannerLogoBG.png);
background-size: cover;
background-color: white;
float: right;
border-left: 2px solid black;
cursor: pointer;
}

.ProfileButton:hover {

width: 50%;
border: 5px solid black;
cursor: pointer;
}

</style>