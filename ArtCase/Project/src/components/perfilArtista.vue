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
            <hr />

            <b-img v-bind:src="artista.file" class="imagenUser"></b-img>
          </div>

          <br />
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
            <br />
            <b-link @click="this.showModalPeticion">{{this.labelPeticion}}</b-link>
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
          :key="portafolio.id"
        >
          <b-card-img :src="portafolio.file" img-alt="Image" img-top></b-card-img>
          <b-card-text>
            <br />
            <b-card-title>{{portafolio.nombre}}</b-card-title>
            {{ portafolio.descripcion }}
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <b-modal
      header-text-variant="light"
      header-bg-variant="dark"
      ref="my-modal-peticion"
      hide-footer
      title="Realiza tu peticion:"
    >
      <div class="d-block text-center">
        <notifications group="foo-css" position="top left" :speed="500" />
        <h4>Los campos con (*) son obligatorios</h4>

        <b-form @submit="onSubmitPeticion" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="*Nombre de la peticion:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="peticion.nombre"
              required
              placeholder="Digite el nombre de su peticion"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="*Descripcion de la peticion:" label-for="input-7">
            <b-form-textarea
              id="input-7"
              v-model="peticion.descripcion"
              requiered
              placeholder="Describa su peticion"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-2" label="*Fecha limite:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="peticion.fecha"
              required
              type="date"
              placeholder="Digite la fecha limite de su peticion"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="*Direccion de entrega:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="peticion.direccion"
              required
              placeholder="Digite la direccion de su peticion"
              type="url"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="*Link anexo:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="peticion.anexo"
              required
              placeholder="Añada el link de su anexo"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </div>
      <b-button
        class="mt-3"
        variant="outline-danger"
        block
        @click="onSubmitPeticion"
        type="submit"
      >Aceptar</b-button>
      <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Cancelar</b-button>
    </b-modal>
    <b-modal
      header-text-variant="light"
      header-bg-variant="dark"
      ref="my-modal"
      hide-footer
      title="Agregar un nuevo portafolio:"
    >
      <div class="d-block text-center">
        <notifications group="foo-css" position="top left" :speed="500" />
        <h4>Trata de ser claro y llamativo para que tus clientes te noten! :)</h4>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="*Nombre del portafolio:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.nombre"
              required
              placeholder="Digite el nombre de su nuevo portafolio"
            ></b-form-input>
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
            placeholder="Seleccione un archivo..."
            drop-placeholder="Arroje el archivo aquí..."
            @change="imageChanged"
          ></b-form-file>
        </b-form>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="onSubmit" type="submit">Aceptar</b-button>
      <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Cancelar</b-button>
    </b-modal>
    <b-modal
      header-text-variant="light"
      header-bg-variant="dark"
      ref="my-modalEdit"
      hide-footer
      title="Editar el portafolio:  "
    >
      <div class="d-block text-center">
        <notifications group="foo-css" position="top left" :speed="500" />
        <h4>Edita los campos que desees</h4>

        <b-form @submit="onSubmitEdit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="*Nombre del portafolio:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="edit.nombre"
              required
              placeholder="Digite el nuevo nombre portafolio"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="*Descripcion del portafolio:" label-for="input-7">
            <b-form-textarea
              id="input-7"
              v-model="edit.descripcion"
              requiered
              placeholder="Edita la descripcion de tu portafolio"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-file
            accept="image/jpeg, image/png, image/gif"
            placeholder="Seleccione un archivo..."
            drop-placeholder="Arroje el archivo aquí..."
            @change="imageChanged"
          ></b-form-file>
        </b-form>
      </div>

      <b-button
        class="mt-3"
        variant="outline-danger"
        block
        @click="onSubmitEdit"
        type="submit"
      >Aceptar</b-button>
      <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Cancelar</b-button>
      <b-button
        class="mt-3"
        variant="outline-warning"
        block
        @click="deleteEdit"
        type="submit"
      >Eliminar</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPeticion: "",
      formData: null,
      file: null,
      user: "",
      peticion: {
        nombre: "",
        descripcion: "",
        fecha: "",
        anexo: "",
        direccion: ""
      },
      form: {
        nombre: "",
        descripcion: "",
        file: "null",
        artista: ""
      },
      edit: {
        nombre: "",
        descripcion: "",
        file: "null",
        artista: "",
        id: ""
      },
      artista: "",
      show: true,
      portafolios: [],
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/artcase/upload",
      CLOUDINARY_UPLOAD_PRESET: "wnr2raxk"
    };
  },
  mounted() {
    this.obtenerArtista();
  },

  methods: {
    onClick: function(portafolio) {
      if (portafolio._id != "nule") {
        console.log(portafolio);
        var that = this;
        that.edit.nombre = portafolio.nombre;
        that.edit.descripcion = portafolio.descripcion;
        that.edit.file = portafolio.file;
        that.edit.artista = portafolio.artista;
        that.edit.id = portafolio._id;
        this.showModalEdit();
      } else {
        this.showModal();
      }
    },
    editarPortafolio: function() {
      var parametros = {
        nombre: "" + this.edit.nombre,
        descripcion: "" + this.edit.descripcion,
        artista: "" + this.edit.artista,
        file: "" + this.edit.file
      };
      axios
        .put(
          "http://localhost:3000/artistas/perfilartista/portafolios/" +
            this.edit.id,
          parametros
        )
        .then(function(response) {
          if (response.data.error) {
            //that.errorUserMessage = response.data.message;
          }
        });
    },
    obtenerArtista: function() {
      var that = this;
      let id = localStorage.getItem("id");
      let usuario = localStorage.getItem("sesionid");
      let usuarioId = localStorage.getItem("usuarioID");
      if (id.replace(/['"]+/g, "") == usuarioId) {
        console.log("Entrada 1");

        this.resetArray();
      } else {
        console.log("Entrada 2", id, usuarioId);

        this.portafolios = [];
      }
      //console.log("id con el que obtiene 2do",id);

      id.replace(/['"]+/g, "");
      if (usuario != null) {
        usuario.replace(/['"]+/g, "");
        this.labelPeticion = "Realizar peticion...";
      }

      that.user = usuario;
      //localStorage.clear()
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
    alert: function() {
      alert("melop");
    },
    obtenerPortafolios: function(artista) {
      var that = this;
      let url =
        "http://localhost:3000/artistas/perfilartista/portafolios/" +
        artista._id;

      axios.get(url).then(function(response) {
        if (!response.data.error) {
          response.data.response.forEach(element => {
            that.portafolios.unshift(element);
          });
        }
      });
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModalEdit() {
        let id = localStorage.getItem("id");
      let usuarioId = localStorage.getItem("usuarioID");
      if (id.replace(/['"]+/g, "") == usuarioId) {
        this.$refs["my-modalEdit"].show();
      }
      
      
    },
    showModalPeticion() {
      this.$refs["my-modal-peticion"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$refs["my-modalEdit"].hide();
      this.$refs["my-modal-peticion"].hide();
    },
    deleteEdit(evt) {
      evt.preventDefault();
      console.log(this.edit.id)
      axios
        .delete("http://localhost:3000/artistas/perfilartista/portafolios/" + this.edit.id)
        .then(function(response) {
          if (response.data.error) {
            //that.errorUserMessage = response.data.message;
          }else{
            console.log(response.data)
          }
        });
        
        this.onReset(evt);
    },
    onSubmitEdit(evt) {
      evt.preventDefault();

      var that = this;
      if (
        this.edit.nombre == "" ||
        this.edit.descripcion == "" ||
        this.edit.file == "" ||
        this.edit.file == null
      ) {
        that.showalert("foo-css", "error");
      } else {
        this.editarPortafolio();
        this.onReset(evt);
      }
      //alert("¡Registro exitoso!");
    },
    onSubmit(evt) {
      evt.preventDefault();
      var that = this;
      if (
        this.form.nombre == "" ||
        this.form.descripcion == "" ||
        this.form.file == "" ||
        this.form.file == null
      ) {
        that.showalert("foo-css", "error");
        console.log("Formulario");
      } else {
        this.crearPortafolio();
        this.onReset(evt);
      }
      //alert("¡Registro exitoso!");
    },
    onSubmitPeticion(evt) {
      evt.preventDefault();
      console.log("en peticion");
      console.log(this.peticion);
      var that = this;
      if (
        this.peticion.nombre == "" ||
        this.peticion.descripcion == "" ||
        this.peticion.fecha == "" ||
        this.peticion.direccion == "" ||
        this.peticion.anexo == ""
      ) {
        that.showalert("foo-css", "error");
      } else {
        this.crearPeticion();
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
      this.form.file = "";
      this.edit.nombre = "";
      this.edit.descripcion = "";
      this.edit.artista = "";
      this.edit.file = "";
      this.edit.id = "";
      this.edit.nombre = "";
      this.edit.descripcion = "";
      this.edit.fecha = "";
      this.edit.direccion = "";
      this.edit.anexo = "";
      this.obtenerArtista();
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      this.hideModal();
    },
    imageChanged(e) {
      var that = this;
      console.log("bandera una");

      that.file = event.target.files[0];
      that.formData = new FormData();
      that.formData.append("file", that.file);
      that.formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET);
      that.form.file = "";

      axios({
        url: this.CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-unlercoded"
        },
        data: that.formData
      })
        .then(function(res) {
          that.form.file = res.data.secure_url;
          that.edit.file = res.data.secure_url;
        })
        .catch(function(err) {});
    },
    crearPeticion: function() {
      var parametros = {
        nombre: "" + this.peticion.nombre,
        descripcion: "" + this.peticion.descripcion,
        anexo: "" + this.peticion.anexo,
        direccion: "" + this.peticion.direccion,
        fecha: "" + this.peticion.fecha,
        artista: "" + this.form.artista,
        usuario: "" + this.user
      };
      axios
        .post("http://localhost:3000/peticion/", parametros)
        .then(function(response) {
          if (response.data.error) {
            //that.errorUserMessage = response.data.message;
          }
        });
    },
    crearPortafolio: function() {
      var parametros = {
        nombre: "" + this.form.nombre,
        descripcion: "" + this.form.descripcion,
        artista: "" + this.form.artista,
        file: "" + this.form.file
      };
      axios
        .post(
          "http://localhost:3000/artistas/perfilartista/portafolios/",
          parametros
        )
        .then(function(response) {
          if (response.data.error) {
            //that.errorUserMessage = response.data.message;
          }
        });
    },
    resetArray: function() {
      this.portafolios = [
        {
          _id: "nule",
          nombre: "Agregar portafolio",
          descripcion: "Haz click para agregar un portafolio!",
          file:
            "https://res.cloudinary.com/artcase/image/upload/v1572894436/Imagen1_cjase9.png"
        }
      ];
    },
    showalert(group, type = "") {
      console.log(this.form);
      const text = `
        Qué tal si intentas llenar todos los campos? -_-
        <br>
        Sientete libre de intentarlo nuevamente... (Recuerda que son obligatorios)
      `;
      this.$notify({
        group,
        title: `Alto ahí vaquer@!`,
        text,
        type
      });
    },
    clean(group) {
      this.$notify({ group, clean: true });
    }
  }
};
</script>
<style>
@import url("../styles/others.scss");
</style>