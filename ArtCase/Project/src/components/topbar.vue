<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="sticky-top">
    <b-navbar-brand :to="'/'">ArtCase</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-bind:to="'/registrarartista'">{{this.labelRegistrarArtista}}</b-nav-item>
        <b-nav-item v-bind:to="'/registrarusuario'">{{this.labelRegistrarUsuario}}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model="text" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
          <b-button
            :to="'/artistas/categorias'"
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            @click="onClick()"
          >Ir</b-button>
          <b-button id="show-btn" size="sm" class="my-2 my-sm-0" @click="showModal">{{this.label}}</b-button>
        </b-nav-form>

        <div>
          <div>
            <b-modal ref="my-modal" hide-footer title="INICIAR SESION">
              <div class="d-block text-center">
                <b-form-group
                  id="input-group-1"
                  label="*Coreo electronico:"
                  label-for="input-1"
                  description
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Digite su correo electronico"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-5" label="*Contraseña:">
                  <b-form-input
                    id="input-6"
                    v-model="form.contraseña"
                    type="password"
                    required
                    placeholder="Digite su contraseña"
                  ></b-form-input>
                </b-form-group>
              </div>
              <b-button
                class="mt-2"
                variant="outline-danger"
                block
                @click="login"
                type="submit"
              >Iniciar sesión</b-button>
              <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Cancelar</b-button>
              <notifications group="foo-css" position="top left" :speed="500" />
            </b-modal>
          </div>
        </div>

        <!--<b-nav-item-dropdown text="Idioma" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
        -->

        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>{{this.label}}</em>
          </template>
          <b-button
            id="show-btn"
            size="sm"
            class="my-2 my-sm-0"
            @click="asignarArtista();showModal()"
          >{{this.labelArtista}}</b-button>
          <b-button
            id="show-btn"
            size="sm"
            class="my-2 my-sm-0"
            @click="asignarUsuario();showModal()"
          >{{this.labelUsuario}}</b-button>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "topbar",

  data() {
    return {
      text: "",
      form: {
        email: "",
        contraseña: ""
      },
      labelArtista:"Artista",
      labelUsuario:"Usuario",
      actual: "",
      usuario: [],
      estaIniciado: false,
      label: "Iniciar sesión",
      labelRegistrarArtista: "Registrar Artista",
      labelRegistrarUsuario: "Registrar Usuario"
    };
  },

  methods: {
    /*
            ----Se utiliza el $emit del $root para que pueda permitir ejecutar metodos de otro componente
            */
    onClick: function() {
      //console.log("Boton ir");
      this.$root.$emit("realizarBusqueda", this.text);
    },
    asignarUsuario() {
      this.actual = "usuario";
      console.log("Usuairo");
    },
    asignarArtista() {
      this.actual = "artista";
    },
    showModal() {
      if (this.estaIniciado == false) {
        this.$refs["my-modal"].show();
      } else {
        this.logout();
      }
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    logout() {
      this.estaIniciado = false;
      this.cambiarLabel();
      this.hideModal();
      localStorage.removeItem("id");
      localStorage.removeItem("usuarioID");
      localStorage.removeItem("sesionid");
      localStorage.removeItem("usuariosesionID");
    },
    login() {
      let that = this;
      if (this.form.email != "" || this.form.contraseña != "") {
        let parametros = {
          email: "" + this.form.email,
          contraseña: "" + this.form.contraseña
        };
        if (this.actual == "artista") {
          localStorage.removeItem("sesionid");
          localStorage.removeItem("usuariosesionID");
          axios
            .post("http://localhost:3000/artistas/login/", parametros)
            .then(function(response) {
              if (response.data.error) {
                that.showalert("foo-css", "error");
              } else {
                that.usuario = response.data.response[0];
                that.estaIniciado = true;
                that.cambiarLabel();
                that.hideModal();
                console.log(that.usuario);
                localStorage.setItem("usuarioID", that.usuario._id);
                localStorage.setItem("id", that.usuario._id);
              }
            });
        } else {
          axios
            .post("http://localhost:3000/usuario/login/", parametros)
            .then(function(response) {
              if (response.data.error) {
                that.showalert("foo-css", "error");
              } else {
                that.usuario = response.data.response[0];
                that.estaIniciado = true;
                that.cambiarLabel();
                that.hideModal();
                console.log(that.usuario);
                localStorage.setItem("usuariosesionID", that.usuario._id);
                localStorage.setItem("sesionid", that.usuario._id);
              }
            });
        }
        that.reset();
      } else {
        that.showalert("foo-css", "error");
      }
    },
    cambiarLabel() {
      if (this.estaIniciado) {
        this.label = "Cerrar sesión";
        this.labelUsuario = "";
        this.labelArtista = "Cerrar sesión"
        this.labelRegistrarArtista = "";
        this.labelRegistrarUsuario = "";
      } else {
        this.label = "Iniciar sesión";
        this.labelUsuario = "Usuario";
        this.labelArtista = "Artista"
        this.labelRegistrarArtista = "Registrar Artista";
        this.labelRegistrarUsuario = "Registrar Usuario";
      }
    },
    reset() {
      this.form.email = "";
      this.form.contraseña = "";
    },
    showalert(group, type = "") {
      //console.log("Entro 9");
      const text = `
        Los datos que has ingresado no coinciden con los de nuestra base de datos, verifica tu correo y digita nuevamente tu clave
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

<style >
.sticky-top {
  position: sticky;
  border-top: 5px;
  border-top-style: ridge;
  border-color: crimson;
  margin-left: -50px;
}

.my-sm-0 {
  margin-right: 10px;
}
</style>