import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  const { confirmed, deaths, recovered, lastUpdate } = data;

  if (!confirmed) {
    return (
      <div className={styles.loading}>
        <br />
        <br />
        <br />
        <CircularProgress size="5rem" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="space-around">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;
