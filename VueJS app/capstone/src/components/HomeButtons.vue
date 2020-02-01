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
    props: {

        msg: String,
        hover: Boolean
        
    },
    data()  {
        return {
            
        };
    }
}
</script>


<style scoped>

h1 {

font-size: 1.5vw;
color: rgb(11, 11, 14);
text-align: left;
margin-top: 12%;
margin-left: 5%;
}

.HomeButton {

width: 100%;
height: 100%;
background-size: 100%;

border-style: solid;
border-width: 1px;
border-radius: 3vh;
border-color: black;
opacity: 1;
}


div:hover {

border: 5px solid black;
opacity: 1;
cursor: pointer;
}


</style>
