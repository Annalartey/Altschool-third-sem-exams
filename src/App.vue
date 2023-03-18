<template>
  <div>
    <nav>
     <router-link to="/">Home</router-link> |
     <router-link to="/counter">Counter</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  border: #42b983 2px solid;
}

nav a {
  font-weight: bold;
  font-size: large;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  border: solid 2px #42b983 ;
  padding: 2px 8px;
}
</style>
