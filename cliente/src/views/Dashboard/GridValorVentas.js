import React from 'react'


import { makeStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.js'

import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardFooter from 'components/Card/CardFooter.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import Store from "@material-ui/icons/Store";

import DateRange from "@material-ui/icons/DateRange";
const useStyles = makeStyles(styles)
export default function GridVentasRealizadas() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <p className={classes.cardCategory}>Valor ventas</p>
            <h3 className={classes.cardTitle}>235 €</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Ultimas 24 Horas
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  )
}
