import axios from "axios";

export default class ValorDolarService {
  #url = "https://api.bluelytics.com.ar/v2/latest";

  getValorDolar = async (tipoDolar, valor) => {
    try {
      const { data: response } = await axios.get(this.#url);
      if (!response[tipoDolar] || !response[tipoDolar][valor]) {
        throw new Error("No se ha encontrado el valor solicitado");
      }
      return response[tipoDolar][valor];
    } catch (error) {
      return error.message;
    }
  };
}
