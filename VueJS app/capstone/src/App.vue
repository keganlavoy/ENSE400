<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>


#app {

background-image: url(/assets/main-background.jpeg);
background-size: 100%;

text-align: center;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #1e5fa0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
