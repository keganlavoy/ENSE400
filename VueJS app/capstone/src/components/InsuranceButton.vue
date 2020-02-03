<template>


    <div class="InsuranceButton">
    
        <span>
        <h1>{{ msg }}</h1>
        </span>  
    
    </div>    


</template>


<script>
export default {
   
   name: 'InsuranceButton',
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
margin-top: 10%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.InsuranceButton {

width: 50%;
height: 18%;
margin: auto;
margin-bottom: 10%;
border-style: solid;
border-width: 1px;
border-radius: 3vh;
border-color: black;
background-color: white;

}

.InsuranceButton:hover {
background-color: rgb(59, 255, 52);
cursor: pointer;
}


</style>