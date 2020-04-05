<template>

    <div class="UserQuoteHome">
    
        <span>
        <h1>{{ msg }}</h1>
        </span>  
    
    </div>    

</template>


<script>
export default {
   
   name: 'UserQuoteHome',
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
  margin-top: 8px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
}

.UserQuoteHome {
  width: 20%;
  height: 5%;
  margin-left: 50%;
  margin-top: -50px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  background-color: white;
  border-radius: 15px;
}

.UserQuoteHome:hover {
  background-color: rgb(123, 169, 255);
  cursor: pointer;
}

</style>