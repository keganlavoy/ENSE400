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
margin-top: 2%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 35px;
}


.QuoteButton {
width: 400px;
height: 70px;
margin: auto;
margin-top: 270px;
border-style: solid;
border-width: 1px;
border-color: black;
background-color: white;
border-radius: 3vh;
}

.QuoteButton:hover {
background-color: rgb(123, 169, 255);
cursor: pointer;
}


</style>