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
    font-size: 25px;
    margin-top: 2.5%;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.CommunityButton {
    width: 500px;
    height: 60px;
    margin: auto;
    margin-top: 650px;
    margin-right: 10%;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    background-color: white;
    border-radius: 15px;
}

.CommunityButton:hover {
    background-color: rgb(123, 169, 255);
    cursor: pointer;
}

</style>