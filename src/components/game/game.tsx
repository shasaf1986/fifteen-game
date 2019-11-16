import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import Board from '../board';
import TopBar from '../topBar';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';


const useStyles = makeStyles(
  createStyles({
    wrapper: {
      backgroundColor: 'saddlebrown',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
      borderRadius: '5px',
      padding: '10px 10px 10px 10px',
      position: 'relative',
    },
  }),
);

const GameBoard: React.FC = () => {
  const classes = useStyles();
  const isReady = useSelector((state: AppState) => state.game.isReady);
  // this case will not happend due to early initilize (for real loading cases add spinner etc.)
  if (!isReady) {
    return null;
  }
  return (
    <div className={classes.wrapper}>
      <TopBar />
      <Board />
    </div>
  );
};

export default GameBoard;
