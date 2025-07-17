<template>
  <section class="card m-3 col-4">
    <div class="card-header">
      <h3>Conversor de pesos a dólares</h3>
    </div>

    <div class="card-body d-flex align-items-center gap-1">
      <label for="nombre">Ingrese el monto: $</label>
      <input
        id="nombre"
        type="number"
        class="form-control w-25"
        v-model="valorEnPesos"
      />
    </div>

    <div v-if="valorDolarOficial !== null" class="mx-3">
      <p>
        Valor del dólar oficial venta:
        <b class="colored">{{ valorDolarOficial }}</b>
      </p>
      <p>
        Actualizado <em>{{ fechaActualizacion }}</em>
      </p>
    </div>
    <p v-else class="mx-3">Cargando...</p>

    <div v-if="valorEnDolares !== null">
      <hr class="m-0" />
      <div class="card-body">
        <p>
          Valor convertido: USD
          <b class="colored">{{ valorEnDolares }}</b>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ValorDolarService from "@/services/ValorDolarService";

export default {
  name: "final",
  props: [],
  async mounted() {
    this.actualizarPrecioDolar();
  },
  data() {
    return {
      valorDolarService: new ValorDolarService(),
      valorEnPesos: 0,
      valorDolarOficial: null,
      fechaActualizacion: null,
    };
  },
  methods: {
    convertirADolar(valorEnPesos, valorDolar) {
      return (valorEnPesos / valorDolar).toFixed(2);
    },
    async actualizarPrecioDolar() {
      this.valorDolarOficial = await this.valorDolarService.getValorDolar(
        "oficial",
        "value_sell"
      );

      this.fechaActualizacion =
        new Date().toLocaleDateString("es-AR") +
        " " +
        new Date().toLocaleTimeString("es-AR");

      setTimeout(this.actualizarPrecioDolar, 2000);
    },
  },
  computed: {
    valorEnDolares() {
      // usa valorEnPesos y  valorDolarOficial, por lo que se actualiza ante un cambio en cualquiera de los dos
      if (this.valorEnPesos === "" || isNaN(this.valorEnPesos))
        return "Valor inválido"; // Mostrar mensaje

      const valorDolarNum = parseFloat(this.valorDolarOficial);
      if (Number.isNaN(valorDolarNum)) return null; // no hay valor de dólar, no mostrar la conversión
      return this.convertirADolar(this.valorEnPesos, valorDolarNum);
    },
  },
};
</script>

<style scoped>
.card-header {
  background-color: darkmagenta;
  color: white;
}

.colored {
  color: darkmagenta;
}
</style>
