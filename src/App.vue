<template>
  <div id="app">
    <Time/>
    <SearchBar SearchEngine="duckduckgo"/>
    <Links/>
    <Wave/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld" ;
import Time from "./components/Watch";
import SearchBar from "./components/SearchBar";
import Links from "./components/Links";
import Wave from "./components/Wave";

export default {
  name: "App",
  components: {
    Time,
    SearchBar,
    Links,
    Wave
  }
};
</script> 

<style>
/* Imports */
@import "https://cdn.jsdelivr.net/npm/vue-toast-notification@0.4.0/dist/theme-default.css";

@font-face {
  font-family: "test";
  src: url("~@/assets/test.woff") format("woff");
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #252934;
  color: white;
}

a,
a:visited {
  color: #6C7789;
}

a:hover {
  color: white;
}

a,
a:visited,
a:hover {
  text-decoration: none;
}

a,
a:visited,
a:hover {
  -webkit-transition: all 150ms ease-in-out;
  -moz-transition: all 150ms ease-in-out;
  -ms-transition: all 150ms ease-in-out;
  -o-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
