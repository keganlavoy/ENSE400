<template>
    <div class='HomeButton'>
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

.HomeButton {


width: 600px;
height: 150px;

background-image: url(../assets/main-background.jpeg);
background-size: 100%;

border-style: solid;
border-width: 1px;
border-radius: 20px;
border-color: black;



}



span{


width: 30%;
background-color: aqua;


}


</style>
