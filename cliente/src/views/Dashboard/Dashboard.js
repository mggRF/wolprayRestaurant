import React from "react";

// @material-ui/core

import GridContainer from "components/Grid/GridContainer.js";

import GridVentasRealizadas from "./GridVentasRealizadas";
import GridValorVentas from "./GridValorVentas";
import GridAbandonosCesta from "./GridAbandonosCesta";
import GridRegistrados from "./GridRegistrados";
import GridPrimeraVisita from "./GridPrimeraVisita";
import GridPrimeraVisitaConCompra from './GridPrimeraVisitaConCompra';
import GridTotalVisitasWeb from "./GridTotalVisitasWeb";
import GridControlPlatos from "./GridControlPlatos";
import GridNotasImportantes from "./GridNotasImportantes";
import { checkUsuario } from './../../Servicios/funcionesSeguridad';

export default class Dashboard extends React.Component{
 
  constructor(props) {
    super(props);
    checkUsuario(3);
  }

  render(){
    return (
      <div>
        <GridContainer>
          <GridVentasRealizadas />
          <GridValorVentas />
          <GridAbandonosCesta />
          <GridRegistrados />
        </GridContainer>
        <GridContainer>
          <GridPrimeraVisita />
          <GridPrimeraVisitaConCompra />
          <GridTotalVisitasWeb />
        </GridContainer>
        <GridContainer>
          <GridControlPlatos />
          <GridNotasImportantes />
        </GridContainer>
      </div>
    );
  }
}
