import { API_URL, CONVERSOR } from "../Components/Constantes";



export default class AccesoAPI {




  static async leerDesplegables(tabla, precursor) {
    let url = API_URL + this.verificaTabla(tabla) + "/select/"
    if (!(precursor === undefined || precursor===0)) url += precursor;
    return this.accederApi(url);
  }

  static async leerUNO(tabla, id) {
    console.log('desde leerUNO de AccesoAPI')
    let url2 = this.verificaTabla(tabla);
    let url = API_URL + url2 + "/" + id;
    console.log('leerUno url:', url);
    return this.accederApi(url);
  }

  static async enviarTodo(tabla, metodo, datos, id = null) {
    let url2 = this.verificaTabla(tabla);
    let url = API_URL + url2;
    switch (metodo) {
      case 'POST':
        return this.accederApi(url, metodo, datos);
      case 'PUT':
        url += '/' + id;
        return this.accederApi(url, metodo, datos);
      case 'DELETE':
        url += '/' + id;
        return this.accederApi(url, metodo, null);
    }

  }
  /*
  *  Metodo de acceso a la API. Comun......
  */
  static async accederApi(url, metodo = "GET", datos = null) {
    const cabeceras = new Headers();
    cabeceras.append("Content-Type", "application/json");
    cabeceras.append("Authorization", "Bearer my-token");
    cabeceras.append("Cache-Control", "no-cache");

    let opciones = {         // opciones para GET y DELETE (no hay body)
      method: metodo,
      headers: cabeceras
    };
    if (datos !== null) {
      opciones = {           // opciones para resto, con datos
        method: metodo,
        headers: cabeceras,
        body: JSON.stringify(datos)
      };
    }

    return await fetch(url, opciones)

      .then(res => res.json())
      .then(
        results => {
          console.log("desde accesoApi accederApi ")
          console.log("es esto: ", results)
          return results;
        }
      )
  }


  static verificaTabla(tabla) {
    let url2 = CONVERSOR[tabla];
    if (url2 === null || url2 === undefined) {
      return tabla;
    } else {
      return url2;
    }
  }

}


