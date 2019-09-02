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
      <b-form-group id="input-group-7" label="Descripcion:" label-for="input-7">
        <b-form-textarea
          id="input-7"
          v-model="form.descripcion"
          requiered
          placeholder="Hablanos un poco de ti!"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
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

      <b-form-group id="input-group-3" label="Tipo usuario:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.tipo"
          :options="tipo"
          required
        ></b-form-select>
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
          descripcion:'',
          tipo: null,
        },
        tipo: [{ text: 'Seleccione uno', value: null }, 'Caricatura','Cómic','Manga','Animación',
        'Efectos especiales','Retrato','Fotografía','Pintura','Tipografía','Dibujo','Videos publicitarios',
        'Música','Escultura','Cinematografía'],
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
            var parametros={"nombre":"" + this.form.nombre, "apellido":""+ this.form.apellido,"email":""+this.form.email,"descripcion":""+this.form.descripcion, "contraseña":""+this.form.contraseña, "tipo":""+this.form.tipo}
			axios.post("http://localhost:3000/artista/", parametros)
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