import React from 'react'

import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.js'

import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardFooter from 'components/Card/CardFooter.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)
export default function GridRegistrados() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <Accessibility />
            </CardIcon>
            <p className={classes.cardCategory}>Clientes registrados</p>
            <h3 className={classes.cardTitle}>+245</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  )
}
