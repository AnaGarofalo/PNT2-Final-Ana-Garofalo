<template>
  <div class="d-flex">
    <Final />
    <Preguntas />
  </div>
</template>

<script>
import Final from "./components/Final.vue";
import Preguntas from "./components/Preguntas.vue";

export default {
  name: "app",
  components: {
    Final,
    Preguntas,
  },
};
</script>
