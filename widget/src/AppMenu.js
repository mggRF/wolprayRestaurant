import Resumen from './appCartaMenu/componentes/Resumen.js';
import { VISTAS } from './appCartaMenu/Constantes/Constantes.js';
import './AppMenu.css';

function AppMenu() {
  return (
    <div>
      <Resumen iniciar = {VISTAS.MEN_LISTA.CMD} />
    </div>
  );
}

export default AppMenu;
