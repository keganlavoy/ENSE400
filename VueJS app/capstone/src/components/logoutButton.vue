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
  top: 0px;
  left: 5px;
  z-index: 1;
  width: 6%;
  height: 12%;
  background-image: url(../assets/logoutIcon.png), url(../assets/bannerLogoBG.png);
  background-size: cover;
  border-right: 2px solid black;
  cursor: pointer;
}

</style>