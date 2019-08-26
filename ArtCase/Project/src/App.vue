<template>
  <div id="app">
      <Topbar/>
      <Sidebar/>
    <div class="contenido">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/sidebar'
  import Topbar from './components/topbar'
  export default {
    name: 'app',
    components: {
      Topbar,
      Sidebar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    margin-left : 50px;
  }
  .routerlink{
    color: aliceblue;
  }

  .menus{
      
  }

  .contenido{
    padding: 15px;
  }
</style>