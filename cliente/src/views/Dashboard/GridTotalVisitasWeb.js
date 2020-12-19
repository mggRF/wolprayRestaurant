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
import { completedTasksChart } from 'variables/charts.js'

const useStyles = makeStyles(styles)
export default function GridTotalVisitasWeb() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Visitantes totales</h4>
            <p className={classes.cardCategory}>Acumulado desde 1ª de año</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime />Desde 1/01
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  )
}
