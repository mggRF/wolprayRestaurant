import { API_URL,CONVERSOR } from "../Components/Constantes";



export default class AccesoAPI {
  static obtenUrl(complemento) {
    let url = API_URL + complemento;
    return this.get(url);
  }

  static get(url) {
    console.log("Accediendo a ...", url)
    return fetch(url).then(response => {
      if (response.Respuesta === "ok") {
        const contentType = response.headers.get('Content-Type') || '';

        if (contentType.includes('application/json')) {
          console.log("Saliendo por json")
          return response.json().catch(error => {
            return Promise.reject('Invalid JSON: ' + error.message);
          });
        }

        if (contentType.includes('text/html')) {
          console.log("Saliendo por text/html")
          return response.text().then(html => {
            return {
              page_type: 'generic',
              html: html
            };
          }).catch(error => {
            return Promise.reject('HTML error: ' + error.message);
          })
        }

        return Promise.reject('Invalid content type: ' + contentType);
      }

      if (response.status === 404) {
        return Promise.reject('Page not found: ' + url);
      }

      return Promise.reject('HTTP error: ' + response.status);
    }).catch(error => {
      return Promise.reject(error.message);
    });
  }

  static async leerDesplegables(tabla, precursor) {
    console.log(tabla + '->' + CONVERSOR[tabla])
    let url = API_URL + CONVERSOR[tabla] + "/select/" 
    if (precursor !== 'undefined') url += precursor;
    console.log(url)
    return this.accederApi(url);
  }
  /*
  *  Metodo de acceso a la API. Comun......
  */
  static async accederApi(url) {

    return await fetch(url)
      .then(res => res.json())
      .then(
        results => {
          return results;
        }
      )
  }


}