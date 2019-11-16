import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useDispatch, useSelector } from 'react-redux';
import { startGameRequest } from '../../store/game/thunks';
import Clock from '../clock';
import { AppState } from '../../store';
import { Box } from '@material-ui/core';


const useStyles = makeStyles(
  createStyles({
    // wrapper: {
    //   backgroundColor: 'saddlebrown',
    //   boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
    //   borderRadius: '5px',
    //   padding: '10px 10px 10px 10px',
    //   position: 'relative',
    // },
    button: {
      color: 'white',
    }
  }),
);

const TopBar: React.FC = () => {
  const dispatch = useDispatch();
  const startTime = useSelector((state: AppState) => state.game.startTime!);
  const game = useSelector((state: AppState) => state.game.game!);
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignContent="flex-center"
      alignItems="center"
      justifyContent="space-between"
    >
      <Clock stop={game.isEnded} startTime={startTime} />
      <IconButton
        onClick={() => {
          dispatch(startGameRequest());
        }}
        className={classes.button}
        aria-label="Start new game"
      >
        <RefreshIcon />
      </IconButton>
    </Box>
  );
};

export default TopBar;
