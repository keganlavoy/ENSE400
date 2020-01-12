<template>
    <div id='HomeButton'>
        <span>
        <h1>Click Here</h1>
        </span>
    </div>

</template>

<script>
export default {
    name: "HomeButtons"
}
</script>


<style scoped>

h1 {

color: rgb(11, 11, 14);
border: 2px;
border-width: 20px;
border-color: black;
text-align: center;
}

#HomeButton {


width: 30%;
height: 100px;
background-image: url(../assets/main-background.jpeg);
background-size: 100%;

border-width: 2px;
border-left: 20px;
}



span{

left: 20%;
width: 30%;
background-color: aqua;


}


</style>
