<template>

  <router-view/>
</template>

<style>
#app {
  font-family: sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: grey;
}

nav a.router-link-exact-active {
  color: #ddd;
}
body {
  background-image: url('./assets/back.jpg');
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color: #000000;
    text-decoration: none;
}
</style>

