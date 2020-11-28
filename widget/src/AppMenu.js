import Resumen from './appCartaMenu/componentes/Resumen.js';
import { VISTAS } from './appCartaMenu/Constantes/Constantes.js';


function AppMenu() {
  return (
    <div>
      <Resumen iniciar = {VISTAS.RESUMEN.CMD} />
    </div>
  );
}

export default AppMenu;
