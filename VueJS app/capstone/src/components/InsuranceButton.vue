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

}

.InsuranceButton {

width: 50%;
height: 25%;
margin: auto;
margin-bottom: 10%;
border-style: solid;
border-width: 1px;
border-radius: 3vh;
border-color: black;
background-color: white;


}


</style>