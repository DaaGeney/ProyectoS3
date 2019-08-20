<template>
  <div id="categorias">
  Aqui van todas las categorías listadas.

  <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Cantantes
    <b-badge variant="primary" pill>14</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Escritores
    <b-badge variant="primary" pill>2</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Pintores
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Actrices eroticas
    <b-badge variant="primary" pill>∞</b-badge>
  </b-list-group-item>
</b-list-group>
  </div>
</template>

<script>
export default {
  name: 'categorias'
}
</script>
<!-- styling for the component -->
<style>
#categorias {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>