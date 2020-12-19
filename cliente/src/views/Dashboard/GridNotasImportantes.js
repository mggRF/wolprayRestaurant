import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridItem from 'components/Grid/GridItem.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

// core components
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";

const useStyles = makeStyles(styles)
export default function GridControlPlatos() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Notas importantes</h4>
            <p className={classes.cardCategoryWhite}>Eventos</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={['ID', 'Titulo', 'Fecha', 'Origen']}
              tableData={[
                ['1', 'Lanzamiento Nuevo Gastronomundo', '01/01/2021', 'Interno'],
                ['2', 'Visualizacion de ventas', '10/12/2020', 'Blog'],
                ['3', 'Correccion probema horas', '03/01/2021', 'Sat.MG'],
                ['4', 'Reorganizacion Base de Datos', '01/02/2021', 'Sat.MG'],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </>
  )
}
