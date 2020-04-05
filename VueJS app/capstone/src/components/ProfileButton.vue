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
  top: 0px;
  right: 5px;
  z-index: 1;
  width: 6%;
  height: 12%;
  background-image: url(../assets/ProfileIcon.png), url(../assets/bannerLogoBG.png);
  background-size: cover;
  border-left: 2px solid black;
  cursor: pointer;
}

</style>