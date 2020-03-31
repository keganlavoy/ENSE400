<template>


    <div class="shareQuoteButton">
    
        <span>
        <h2>{{ msg }}</h2>
        </span>  
    
    </div>    


</template>


<script>
export default {
   
   name: 'shareQuoteButton',
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
font-size: 18px;
}


.shareQuoteButton {

width: 25%;
height: 15%;
float: right;
margin-top: -17%;
margin-right: 6%;
border-style: solid;
border-width: 1px;
border-color: black;
background-color: white;
border-radius: 3vh;

}

.shareQuoteButton:hover {
background-color: rgb(123, 169, 255);
cursor: pointer;
}


</style>