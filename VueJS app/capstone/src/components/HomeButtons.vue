<template>
    <div class='HomeButton'>
        <span>
        <h1>{{ msg }}</h1>
        </span>
    </div>

</template>

<script>
export default {
    name: "HomeButtons",
    props: ["msg"]
}
</script>


<style scoped>

h1 {

color: rgb(11, 11, 14);
text-align: left;
margin-top: 10%;
margin-left: 5%;
}

.HomeButton {

width: 80%;
height: 10%;

background-image: url(../assets/main-background.jpeg);
background-size: 100%;

border-style: solid;
border-width: 1px;
border-radius: 20px;
border-color: black;



}



</style>
