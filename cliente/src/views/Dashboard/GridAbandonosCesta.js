import React from 'react'

import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardFooter from 'components/Card/CardFooter.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import LocalOffer from "@material-ui/icons/LocalOffer";
const useStyles = makeStyles(styles)
export default function GridAbandonosCesta() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
              <Icon>info_outline</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>Abandonos de cesta</p>
            <h3 className={classes.cardTitle}>75</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <LocalOffer />
              Por tecla Cancel
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  )
}
