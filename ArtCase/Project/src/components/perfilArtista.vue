<template>
  <div id="app">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <div class="carousel-caption d-none d-md-block">
          <h3>{{artista.apodo}}</h3>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12">
        <div class="carousel-caption d-none d-md-block">
          <h3>{{artista.apodo}}</h3>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22">
        <div class="carousel-caption d-none d-md-block">
          <h3>{{artista.apodo}}</h3>
        </div>
      </b-carousel-slide>
    </b-carousel>

    <div class="mt-4">
      <b-card class="mb-3">
        <b-card-text>
          <div class="header_div">
            <h3>
              <i class="far fa-address-card"></i>
              {{artista.nombre}} {{ artista.apellido }}
            </h3>
            <h3>{{ artista.tipo }}</h3>
          </div>

          <hr />
          <h5>{{ artista.descripcion }}</h5>
          <h6>
            <i class="fas fa-phone-square"></i>
            {{artista.telefono}}
          </h6>
          <h6>
            <i class="fas fa-envelope"></i>
            {{artista.email}}
          </h6>
          <h6>
            <i class="fab fa-facebook-square"></i>
            {{artista.url}}
          </h6>
        </b-card-text>
      </b-card>
    </div>
    <div>
      <b-card-group deck>
        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
          </b-card-text>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      artista: ""
    };
  },
  mounted() {
    this.obtenerArtista();
  },

  methods: {
    obtenerArtista: function() {
      var that = this;
      let id = localStorage.getItem("id");
      console.log("id con el que obtiene 2do",id);

      //localStorage.clear()
      id.replace(/['"]+/g, "");
      let url = "http://localhost:3000/artista/" + id;
      url = url.replace(/['"]+/g, "");

      console.log(url);
      axios.get(url).then(function(response) {
        if (!response.data.error) {
          that.artista = response.data.response[0];
        }
      });
    }
  }
};
</script>
<style>
@import url("../styles/others.scss");
</style>