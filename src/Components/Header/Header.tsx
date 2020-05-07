import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Style';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={12}
          xs={12}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
          >
            FizzBuzz
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
        >
          <Typography
            variant="subtitle1"
            component="p"
            align="center"
          >
            The challenge to FizzBuzz calculate!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}