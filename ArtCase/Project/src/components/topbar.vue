<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="sticky-top">
        <b-navbar-brand :to="'/'">ArtCase</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        
           <b-navbar-nav>
            <b-nav-item v-bind:to="'/registrarartista'">Registrar artistas</b-nav-item>
            <b-nav-item v-bind:to="'/registrarusuario'">Registrar usuarios</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input v-model="text" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
              <b-button :to="'/artistas/categorias'" size="sm" class="my-2 my-sm-0" type="submit" @click="onClick()">Ir</b-button>
            </b-nav-form>

            <!--<b-nav-item-dropdown text="Idioma" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            -->
            <!--
              <b-nav-item-dropdown right>
              Using 'button-content' slot
              <template slot="button-content"><em>Usuario</em></template>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#">Salir</b-dropdown-item>
            </b-nav-item-dropdown>                                     
            -->
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'topbar',

        data() {
          return {
            text: ''
          }
        },

        methods: {
            /*
            ----Se utiliza el $emit del $root para que pueda permitir ejecutar metodos de otro componente
            */
            onClick:function () {
              //console.log("Boton ir");
                this.$root.$emit('realizarBusqueda', this.text);
            }
            
        }
    }
</script>

<style >
  .sticky-top{
    position: sticky;
    border-top: 5px;
    border-top-style: ridge;
    border-color: crimson;
    margin-left: -50px;
  }
</style>