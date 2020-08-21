import { API_URL, CONVERSOR } from "../Components/Constantes";



export default class AccesoAPI {


  static async leerDesplegables(tabla, precursor) {
    let url = API_URL + CONVERSOR[tabla] + "/select/"
    if (precursor !== 'undefined') url += precursor;
    return this.accederApi(url);
  }

  static async enviarTodo(tabla, metodo, datos, id = null) {
    let url = API_URL + CONVERSOR[tabla];
    if (id !== null) url += id;
    const requestOptions = {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    };
    return this.accederApi(url, requestOptions);

  }
  /*
  *  Metodo de acceso a la API. Comun......
  */
  static async accederApi(url, opciones=null) {

    return await fetch(url, opciones)
      .then(res => res.json())
      .then(
        results => {
          return results;
        }
      )
  }


}