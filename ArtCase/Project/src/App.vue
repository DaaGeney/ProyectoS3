<template>
  <div class="app">
    <!--Banner superior de la aplicación-->
    <Topbar/> 
    <!--Banner izquierdo de la aplicación-->
    <Sidebar/>
    <!--Define el contenido de la aplicacción (CARGA LAS VISTAS DE LAS RUTAS)-->
    <div class="contenido">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  //Importa el componente de la barra lateral
  import Sidebar from './components/sidebar'
  //Importa el componente de la barra superior
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
  @import url('/styles/appmain.scss');
</style>