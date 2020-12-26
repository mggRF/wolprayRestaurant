import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import CardFooter from 'components/Card/CardFooter.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import CardBody from "components/Card/CardBody.js";
import ChartistGraph from "react-chartist";
import AccessTime from "@material-ui/icons/AccessTime";
import {
    dailySalesChart
  } from "variables/charts.js";

  
const useStyles = makeStyles(styles)
export default function GridPrimeraVisita() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="success">
            <ChartistGraph
              className="ct-chart"
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Visitantes primera visita</h4>
            <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
              </span>{' '}
              Incremento en visitas.
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> actualizado hace 4 minutos
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  )
}
