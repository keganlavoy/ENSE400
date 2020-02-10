<template>


    <div class="CommunityButton">
    
        <span>
        <h1>{{ msg }}</h1>
        </span>  
    
    </div>    


</template>


<script>
export default {
   
   name: 'CommunityButton',
   props: ["msg"],

    data()  {
        return {
            hover: false,
        };
    }

}
</script>






<style scoped>

h1 {

color: rgb(11, 11, 14);
text-align: center;
font-size: 2.0vw;
margin-top: 2.5%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.CommunityButton {

width: 55%;
height: 10%;
margin: auto;
margin-top: 42%;
border-style: solid;
border-width: 1px;
border-color: black;
background-color: white;
border-radius: 3vh;

}

.CommunityButton:hover {
background-color: rgb(123, 169, 255);
cursor: pointer;
}


</style>