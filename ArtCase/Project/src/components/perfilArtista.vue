<template>
  <div id="app">
    <!--
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
    -->
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
      <b-card-group columns>
        <b-card  
          @click="onClick(portafolio)"
          bg-variant="light"  
          class="fcard" 
          v-for="portafolio in portafolios" 
          :key="portafolio.id" >
        <b-card-img :src="portafolio.file" img-alt="Image"   img-top></b-card-img>
          <b-card-text>
            <br>
            <b-card-title>
              {{portafolio.nombre}}
            </b-card-title>
            {{ portafolio.descripcion }}
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <b-modal 
      header-text-variant="light" 
      header-bg-variant="dark" 
      ref="my-modal" 
      hide-footer 
      title="Agregar un nuevo portafolio:">
      <div class="d-block text-center">
        <notifications group="foo-css"
                   position="top left"
                   :speed="500" />
        <h4>Trata de ser claro y llamativo para que tus clientes te noten! :)</h4>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="*Nombre del portafolio:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.nombre" required placeholder="Digite el nombre de su nuevo portafolio"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="*Descripcion del portafolio:" label-for="input-7">
            <b-form-textarea
              id="input-7"
              v-model="form.descripcion"
              requiered
              placeholder="Describe de manera breve tu portafolio."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-file
            accept="image/jpeg, image/png, image/gif"
            v-model="form.file"
            :state="Boolean(form.file)"
            placeholder="Seleccione un archivo..."
            drop-placeholder="Arroje el archivo aquí..."
            @change="imageChanged"
          ></b-form-file> 
        </b-form>
        
      </div>
      <b-button class="mt-3" variant="outline-success" block @click="onSubmit" type="submit">Aceptar</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancelar</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        nombre: "",
        descripcion: "",
        file: null,
        artista:""
      },
      artista: "",
      show: true,
      portafolios:[{"_id":"nule","nombre":"Agregar portafolio", "descripcion":"Haz click para agregar un portafolio!", "file":"data:image/png;base64,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"}]
    };
  },
  mounted() {
    this.obtenerArtista();
  },

  methods: {
    onClick: function (portafolio) {
      if (portafolio._id != "nule") {
        console.log("Clickeaste en el portafolio", portafolio.nombre);
      } else {
        this.showModal();
      }
    },
    obtenerArtista: function() {
      var that = this;
      let id = localStorage.getItem("id");
      //console.log("id con el que obtiene 2do",id);

      //localStorage.clear()
      id.replace(/['"]+/g, "");
      let url = "http://localhost:3000/artista/" + id;
      url = url.replace(/['"]+/g, "");

      console.log(url);
      axios.get(url).then(function(response) {
        if (!response.data.error) {
          that.artista = response.data.response[0];
          that.obtenerPortafolios(that.artista);
          that.form.artista = that.artista._id;
        }
      });
    },
    obtenerPortafolios: function (artista) {
      var that = this;
      let url = "http://localhost:3000/artistas/perfilartista/portafolios/"+ artista._id;
      
      axios.get(url).then(function (response) {
        if (!response.data.error) {
          response.data.response.forEach(element => {
            that.portafolios.unshift(element);
          });
        }
      });
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    onSubmit(evt) {
      evt.preventDefault();
      var that = this;
      if (this.form.nombre == "" || this.form.descripcion == "" || this.form.file == "" || this.form.file == null) {
        that.showalert('foo-css', 'error');
      }else{
        this.crearPortafolio();
        this.onReset(evt);
      }
      //alert("¡Registro exitoso!");
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.nombre = "";
      this.form.descripcion = "";
      this.form.artista = "";
      this.form.file = null;
      this.obtenerArtista();
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      this.hideModal();
    },
    imageChanged (e) {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.form.file = e.target.result
      }
      //console.log(this.form)
    },
    crearPortafolio: function() {
      var parametros = {
        nombre: "" + this.form.nombre,
        descripcion: "" + this.form.descripcion,
        artista: "" + this.form.artista,
        file: "" + this.form.file
      };
      axios
        .post("http://localhost:3000/artistas/perfilartista/portafolios/", parametros)
        .then(function(response) {
          if (response.data.error) {
            //that.errorUserMessage = response.data.message;
          } else {
            console.log("Portafolio creado exitoso");
          }
        });
    },
    showalert (group, type = '') {
      //console.log("Entro 9");
      const text = `
        Qué tal si intentas llenar todos los campos? -_-
        <br>
        Sientete libre de intentarlo nuevamente... (Recuerda que son obligatorios)
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