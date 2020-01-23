<template>
  <div id="app">
    <a href=""></a>
    <!-- <router-link :to="{name: 'pageA'}">pageA</router-link> -->
    <router-link to="/a/1">参数1</router-link>
    <router-link to="/a/2">参数2</router-link>
    <router-link to="/b">pageB</router-link>
    <!-- router-view也相等于一个占位符 -->
    <!-- <router-view/> -->
    <!-- <router-view/> -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
