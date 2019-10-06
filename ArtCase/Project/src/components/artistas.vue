<template>
  <div id="app">
    <h4>Listado de todos los artistas registrados</h4>

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
            <router-link to="perfilartista">
              <span v-on:click="guardarId(artista._id)">{{artista.nombre}}</span>
            </router-link>
          </h3>
          
         <b-img 
            v-bind:src="artista.file"  width="200"
     height="200" 
     alt="Center image"
          ></b-img>
          <hr />
          <h5>{{ artista.apellido }}</h5>
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
      usuario: ""
    };
  },
  mounted() {
    this.obtenerUsuarios();
  },

  methods: {
    obtenerUsuarios: function() {
      var that = this;
      axios.get("http://localhost:3000/artista/").then(function(response) {
        console.log(response.data);
        if (response.data.error) {
          //console.log("raios");
        } else {
          that.artistas = response.data.response;
      
        }
      });
    },
    guardarId: function(id) {
      localStorage.clear();
      localStorage.setItem("id", JSON.stringify(id));
      console.log("Id que guarda 1ero", id);
    }
  }
};
</script>

<style>
@import url("../styles/others.scss");
</style>