import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/styles';
import Game from '../game';

const useStyles = makeStyles(
  createStyles({
    wrapper: {
      paddingTop: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }),
);

export default function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Game />
      </div>
    </Fragment>
  );
}
