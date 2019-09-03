<template>
  <div id="app">
    <h4>Listado de todos los artistas registrados</h4>

    <div class="mt-4">
      <b-card img-src="https://mobile-cdn.123rf.com/300wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilustra.jpg?ver=6" img-alt="Card image" img-left class="mb-3" v-for="artista in artistas" :key="artista.id">
        <b-card-text >
          <h3 >
            <router-link @click.native="guardarId(artista._id)" to="perfilartista">{{ artista.nombre }}</router-link>
          </h3>
          <hr>
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
    guardarId: function (id) {
      console.log("Esta entrandoS")
      localStorage.setItem('id', JSON.stringify(id));
    }

  }
};
</script>

<style>
  @import url("../styles/others.scss");
</style>