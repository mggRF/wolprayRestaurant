import Resumen from './appCartaMenu/componentes/Resumen.js';
import { VISTAS } from './appCartaMenu/Constantes/Constantes.js';


function AppCarta() {
  return (
    <Resumen iniciar = {VISTAS.CAR_DET.CMD} />
  );
}

export default AppCarta;
