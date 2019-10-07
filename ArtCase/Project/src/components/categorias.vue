<template>
  <div id="app">
    <h4 v-text="titulo"></h4>

    <notifications group="foo-css"
                   position="top left"
                   :speed="500" />

    <div class="mt-4">
      <b-card
       v-for="artista in artistas"
        
        img-alt="Card image"
        img-left
        class="mb-3"
       
        :key="artista.id"
      >
        <b-card-text>
          <h3>
            <router-link :to="'perfilartista'">
              <span v-on:click="guardarId(artista._id)">{{artista.nombre}} {{ artista.apellido }}</span>
            </router-link>
          </h3>
          <hr>
          <b-img v-bind:src="artista.file" class="imagen"></b-img>
          <h5>{{ artista.apodo }}</h5>
          <p>Descripcion del artista: {{ artista.descripcion }}</p>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  //name: "inicio",
  data() {
    return {
      artistas: [],
      usuario: "",
      titulo: ""
    };
  },
  mounted() {
    //console.log("Montando...");
    
    //Metodo ejecutable desde el componente sidebar
    this.$root.$on('recargarComponente', (item) => {
      //console.log("Entrando a categoria");
      
      this.obtenerUsuarios(this.obtenerCategoria(item));
    });
    this.$root.$on('realizarBusqueda', (param) => {
      //console.log("Entrando a filtro");
      this.obtenerUsuarios(this.realizarFiltro(param));
    });
    this.obtenerUsuarios(this.obtenerCategoria(null));
  },

  methods: {
    obtenerUsuarios: function(url) {
      var that = this;
      axios.get(url).then(function(response) {
        if (response.data.error) {
          //console.log("Error de conexión con el servidor");
          //console.log("Entro 1");
        } else {
          that.artistas = response.data.response;
          if (that.artistas.length <= 0) {
            that.titulo = "Sin registros."
            //console.log("Entro 2");
            
            //that.show('foo-css', 'error');
          }
        }
      });
    },
    obtenerCategoria: function(item) {
      //console.log("Entro 3");
      var that = this;      
      if (item == null || item.title == "Categorias") {
        //console.log("Entro 4");
        var url = "http://localhost:3000/artista/";
        that.titulo = `Listado de todos los artistas:`
      } else {
        //console.log("Entro 5");
        var categoria = item.title;
        //console.log(categoria);
        
        that.titulo = `Estos son los artistas registrados en ${categoria}:`
        var url = "http://localhost:3000/artistas/categorias/" + categoria;
      }
      return(url);
    },

    realizarFiltro: function (parametro) {
      //console.log("Entro 6");
      var that = this;
      if (parametro == null || parametro == "") {
        //console.log("Entro 7");
        var url = "http://localhost:3000/artista/";
        that.titulo = `Listado de todos los artistas:`
      } else {
        //console.log("Entro 8");
        var url = "http://localhost:3000/artistas/busqueda/" + parametro;
        that.titulo = "Estos son los artistas que coinciden con tu busqueda:"
      }
      return(url);
    },

    guardarId: function(id) {
      localStorage.clear();
      localStorage.setItem("id", JSON.stringify(id));
      //console.log("Id que guarda 1ero", id);
    },
    show (group, type = '') {
      //console.log("Entro 9");
      const text = `
        Lamentablemente no conocemos a nadie registrado con ese nombre :(
        <br>
        Sientete libre de intentarlo nuevamente...
      `
      this.$notify({
        group,
        title: `Alto ahí vaquer@!`,
        text,
        type
      })
    },
    clean (group) {
      this.$notify({ group, clean: true })
    }
  }
};
</script>

<style>
@import url("../styles/others.scss");
</style>