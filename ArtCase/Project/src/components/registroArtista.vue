<template>
  <div id="app">
    <h1>Registrate!</h1>
    <hr />
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="*Nombre:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.nombre" required placeholder="Digite su nombre"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="*Apellido:" label-for="input-4">
        <b-form-input
          id="input-2"
          v-model="form.apellido"
          required
          placeholder="Digite su apellido"
        ></b-form-input>

      </b-form-group>
       <b-form-group id="input-group-7" label="*Nombre artistico:" label-for="input-7">
        <b-form-input id="input-2" v-model="form.apodo" required placeholder="Digite su nombre artistico"></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-5" label="*Telefono:" label-for="input-5" description>
        <b-form-input
          id="input-5"
          v-model="form.telefono"
          type="number"
          required
          placeholder="Digite su numero de contacto"
          
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="*Descripcion:" label-for="input-7">
        <b-form-textarea
          id="input-7"
          v-model="form.descripcion"
          requiered
          placeholder="Hablanos un poco de ti!"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-1" label="*Coreo electronico:" label-for="input-1" description>
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite su correo electronico"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Url perfil red social:" label-for="input-1" description>
        <b-form-input
          id="input-1"
          v-model="form.url"
          type="url"
          
          placeholder="Digite la url de su perfil"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="*Contraseña:"
        description="Usa preferiblemente numeros y letras"
      >
        <b-form-input
          id="input-6"
          v-model="form.contraseña"
          type="password"
          required
          placeholder="Digite su contraseña"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="*Tipo usuario:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.tipo" :options="tipo" required></b-form-select>
      </b-form-group>

      <b-form-file
        accept="image/jpeg, image/png, image/gif"
        v-model="form.file"
        :state="Boolean(form.file)"
        placeholder="Seleccione un archivo para subir..."
        drop-placeholder="Arroje el archivo aquí..."
        @change="imageChanged"
      ></b-form-file> <br><br>
      

      <b-button type="submit" variant="outline-danger">Registrar</b-button>
      <b-button type="reset" variant="outline-dark">Cancelar</b-button>
    </b-form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        file: null,
        email: "",
        nombre: "",
        apellido: "",
        descripcion: "",
        telefono:"",
        contraseña:"",
        apodo:"",
        tipo: null
      },
      tipo: [
        { text: "Seleccione uno", value: null },
        "Caricatura",
        "Cómic",
        "Manga",
        "Animación",
        "Efectos especiales",
        "Retrato",
        "Fotografía",
        "Pintura",
        "Tipografía",
        "Dibujo",
        "Videos publicitarios",
        "Música",
        "Escultura",
        "Cinematografía"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.crearArtista();
      
      this.onReset(evt);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.telefono = "";
      this.form.apodo = "";
      this.form.nombre = "";
      this.form.tipo = null;
      this.form.contraseña = "";
      this.form.apellido = "";
      this.form.descripcion = "";
      this.form.url = "";
      this.form.file = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    imageChanged (e) {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.form.file = e.target.result
      }
      console.log(this.form)
    },
    crearArtista: function() {
      var parametros = {
        nombre: "" + this.form.nombre,
        apellido: "" + this.form.apellido,
        email: "" + this.form.email,
        descripcion: "" + this.form.descripcion,
        contraseña: "" + this.form.contraseña,
        tipo: "" + this.form.tipo,
        apodo: "" + this.form.apodo,
        url: "" + this.form.url,
        telefono: "" + this.form.telefono,
        file: "" + this.form.file
      };
      axios
        .post("http://localhost:3000/artista/", parametros)
        .then(function(response) {
          if (response.data.error) {
            alert(response.data.error)
          } else {
          
            alert("¡Registro exitoso!");
          }
        });
    }
  }
};
</script>
<style>
@import url("../styles/others.scss");
</style>