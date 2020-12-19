import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardFooter from 'components/Card/CardFooter.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import CardBody from 'components/Card/CardBody.js'
import ChartistGraph from 'react-chartist'
import AccessTime from '@material-ui/icons/AccessTime'
import { emailsSubscriptionChart  } from 'variables/charts.js'

const useStyles = makeStyles(styles)
export default function GridPrimeraVisitaConCompra() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="warning">
            <ChartistGraph
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Compra en primera visita</h4>
            <p className={classes.cardCategory}>En ultima campaña</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Lanzamiento : hace 2 dias
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  )
}
