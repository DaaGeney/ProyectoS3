// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
import BootstrapVue from 'bootstrap-vue'
// Libreria que posibilita el uso de la barra lateral
import VueSidebarMenu from 'vue-sidebar-menu'
//import the hello component
import inicio from './components/inicio'
//import the about component
import artistas from './components/artistas'
//Importa el componente de las categorias
import categorias from './components/categorias'
//Importa el componente del registro de artistas
import registroartista from './components/registroArtista'
//Importa el componente del registro de usuarios
import registrousuario from './components/registroUsuario'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

//Importando Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueAxios, axios)
Vue.use(VueRouter) //Controla las rutas
Vue.use(BootstrapVue) // Utilizado para los estilos de bootstrap
Vue.use(VueSidebarMenu) //  Utilizado para configurar la barra lateral

//define your routes
const routes = [
//define the root url of the application.
{ path: '/', component: inicio },
//route for the about route of the web page
{ path: '/artistas', component: artistas },
//Define la ruta de la pestaña categorias
{ path: '/categorias', component: categorias },
//Define la ruta de la pestaña registro de artistas
{ path: '/registrarartista', component: registroartista },
//Define la ruta de la pestaña registro de usuarios
{ path: '/registrarusuario', component: registrousuario }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
