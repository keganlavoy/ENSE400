<template>


    <div class="QuoteButton">
    
        <span>
        <h1>{{ msg }}</h1>
        </span>  
    
    </div>    


</template>


<script>
export default {
   
   name: 'QuoteButton',
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
margin-top: 6%;

}


.QuoteButton {

width: 50%;
height: 15%;
margin: auto;
margin-top: 30%;
border-style: solid;
border-width: 1px;
border-color: black;
background-color: white;

}

.QuoteButton:hover {
background-color: rgb(123, 169, 255);
cursor: pointer;
}


</style>