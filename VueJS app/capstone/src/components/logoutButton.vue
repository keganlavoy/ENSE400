<template>
    
<div class="logoutButton">

</div>

</template>

<script>
export default {
      name: "logoutButton",
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

.logoutButton {
position: fixed;
top: 1.2%;
left: 0.5%;
z-index: 1;
width: 6%;
height: 11.9%;
background-image: url(../assets/logoutIcon.png), url(../assets/bannerLogoBG.png);
background-size: cover;
background-color: white;
border-left: 2px solid black;
cursor: pointer;
}

#logout {
width: 5%;
height: 5%;
background-image: url(../assets/logoutIcon.png), url(../assets/bannerLogoBG.png);
background-size: cover;
background-color: white;
float: right;
border-left: 2px solid black;
cursor: pointer;
z-index: 1;
margin-top: -5%;
}

</style>