<template>


    <div class="UserQuoteSubmit">
    
        <span>
        <h1>{{ msg }}</h1>
        </span>  
    
    </div>    


</template>


<script>
export default {
   
   name: 'UserQuoteSubmit',
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
margin-top: 0%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 3.3vh;
}


.UserQuoteSubmit {

width: 20%;
height: 5%;
margin-left: 28%;
margin-top: 23%;
border-style: solid;
border-width: 1px;
border-color: black;
background-color: white;
border-radius: 3vh;

}

.UserQuoteSubmit:hover {
background-color: rgb(123, 169, 255);
cursor: pointer;
}


</style>