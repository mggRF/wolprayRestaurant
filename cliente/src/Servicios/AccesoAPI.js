import { API_URL, CONVERSOR } from "../Components/Constantes";



export default class AccesoAPI {


  static async leerDesplegables(tabla, precursor) {
    let url = API_URL + CONVERSOR[tabla] + "/select/"
    if (precursor !== 'undefined') url += precursor;
    return this.accederApi(url);
  }

  static async leerUNO(tabla,  id ) {
    let url2 = CONVERSOR[tabla];
    if (url2===null) url2=tabla;
    let url = API_URL + url2;    
    console.log('leerUno url:',url);
    return this.accederApi(url);
  }

  static async enviarTodo(tabla, metodo, datos, id = null) {
    let url2 = CONVERSOR[tabla];
    if (url2===null) url2=tabla;
    let url = API_URL + url2;
    if (id !== null) url += id;    
    console.log('enviarTodo url:',url);
    return this.accederApi(url, metodo, datos);
  }
  /*
  *  Metodo de acceso a la API. Comun......
  */
  static async accederApi(url, metodo = "GET", datos=null) {
    const cabeceras = new Headers();
    cabeceras.append("Content-Type", "application/json");
    cabeceras.append("Authorization", "Bearer my-token");
    cabeceras.append("Cache-Control", "no-cache");

    let opciones  = {         // opciones para GET y DELETE (no hay body)
      method: metodo,
      headers: cabeceras      
    };
    if (datos!==null){
      opciones  = {           // opciones para resto, con datos
        method: metodo,
        headers: cabeceras,
        body: JSON.stringify(datos)      
      };
    }
    
    return await fetch(url, opciones)
      .then(res => res.json())
      .then(
        results => {
          return results;
        }
      )
  }


}