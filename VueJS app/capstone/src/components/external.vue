<template>


    <div class="externalButton">
    
        <span>
        <h2>{{ msg }}</h2>
        </span>  
    
    </div>    


</template>


<script>
export default {
   
   name: 'externalButton',
   props: ["msg"],

    data()  {
        return {
            hover: false,
        };
    }

}
</script>






<style scoped>

h2 {

color: rgb(11, 11, 14);
text-align: center;
margin-top: 5%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 1.2vw;
}


.externalButton {

width: 25%;
height: 15%;
float: right;
margin-top: -7.5%;
margin-right: 12%;
border-style: solid;
border-width: 1px;
border-color: black;
background-color: white;
border-radius: 3vh;

}

.externalButton:hover {
background-color: rgb(123, 169, 255);
cursor: pointer;
}


</style>