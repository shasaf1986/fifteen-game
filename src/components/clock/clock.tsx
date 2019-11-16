import React, { useEffect, useState, useRef } from 'react';
import { createDurationText } from '../../utils';
import { Typography, createStyles, makeStyles } from '@material-ui/core';

interface Props {
  startTime: Date;
  stop: boolean;
};

const useStyles = makeStyles(
  createStyles({
    wrapper: {
      color: 'white',
    },
  }),
);

const Clock: React.FC<Props> = ({ startTime, stop }) => {
  const [durationText, setDurationText] = useState(() =>
    createDurationText(startTime)
  );
  const classes = useStyles();
  const isInitialMountRef = useRef(true);

  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
    } else {
      // reset immediately
      setDurationText(createDurationText(startTime));
    }
    // no need to update
    if (stop) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDurationText(createDurationText(startTime));
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [startTime,stop]);

  return (
    <Typography
      className={classes.wrapper}
      variant="h6"
    >
      {durationText}
    </Typography>
  );
};

export default Clock;
