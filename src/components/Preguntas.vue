<template>
  <section class="card m-3 col-6">
    <div class="card-header">
      <h3>Respuestas</h3>
    </div>

    <div class="card-body">
      <ul>
        <li>
          Pregunta 1: <b class="colored">B</b> (Es una biblioteca de cliente
          http)
        </li>
        <li>
          Pregunta 2: <b class="colored">B y D</b> (@click y v-on:click, ambas
          son correctas)
        </li>
        <li>Pregunta 3: <b class="colored">C</b> (Get, Post, Put y Delete)</li>
        <li>
          Pregunta 4: <b class="colored">B y E</b> (v-bind:style y :style, ambas
          son correctas)
        </li>
        <li>
          Pregunta 5: <b class="colored">C</b> (Modifica el dato de entrada para
          guardarlo como número en la prop vinculada)
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "preguntas",
};
</script>

<style scoped>
.card-header {
  background-color: darkcyan;
  color: white;
}

.colored {
  color: darkcyan;
}
</style>
