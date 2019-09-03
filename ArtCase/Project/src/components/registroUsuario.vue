<template>
  <div id="app">
    <h1>Registrate!</h1> <hr>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nombre"
          required
          placeholder="Digite su nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Apellido:" label-for="input-4">
        <b-form-input
          id="input-2"
          v-model="form.apellido"
          required
          placeholder="Digite su apellido"
        ></b-form-input>
        </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Coreo electronico:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite su correo electronico"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Contraseña:"
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

      <b-button type="submit" variant="primary">Registrar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          nombre: '',
          apellido: '',
          tipo: "usuario_tipico"
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.crearArtista()
        alert("¡Registro exitoso!")
        this.onReset(evt)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.nombre = ''
        this.form.tipo = null
        this.form.contraseña = ''
        this.form.apellido = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      crearArtista: function () {
            var parametros={"nombre":"" + this.form.nombre, "apellido":""+ this.form.apellido,"email":""+this.form.email, "contraseña":""+this.form.contraseña, "tipo":""+this.form.tipo}
			axios.post("http://localhost:3000/usuario/", parametros)
				.then(function (response) {
					if (response.data.error) {
						//that.errorUserMessage = response.data.message;
					} else {
            console.log("Registro exitoso");
            }
				});
		},
    }
  }
</script>
<style>
    @import url('../styles/others.scss');
</style>