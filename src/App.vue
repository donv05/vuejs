<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
  @import "../src/styles/abstracts/_variables.scss";
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: $color-red-light;
      }
    }
  }

  body {
    background-color: $color-dark-light;
  }
  
</style>
