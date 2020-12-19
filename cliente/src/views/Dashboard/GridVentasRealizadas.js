import React from "react";

import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
export default function GridVentasRealizadas() {
  const classes = useStyles()
  return (
    <>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <Icon>content_copy</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>Ventas realizadas</p>
            <h3 className={classes.cardTitle}>
              132 <small>Un</small>
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Danger>
                <Warning />
              </Danger>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
}
