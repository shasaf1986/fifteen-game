import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import Piece from '../piece';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { moveRequest } from '../../store/game/thunks';

const useStyles = makeStyles(
  createStyles({
    wrapper: {
      borderRadius: '5px',
      width: '304px',
      height: '304px',
      backgroundColor: '#45240c',
      userSelect: 'none',
      position: 'relative',
      padding: '2px',
    },
  }),
);

const Board: React.FC = () => {
  const game = useSelector((state: AppState) => state.game.game!);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { pieces } = game;

  return (
    <div className={classes.wrapper}>
      {pieces.map((piece, index) => {
        if (piece.value === 16) {
          return null;
        }
        return (
          <Piece
            index={index}
            piece={piece}
            onClick={() => {
              if (!piece.canMove) {
                return;
              }
              dispatch(moveRequest(index));
            }}
            key={piece.value.toString()}
          />
        );
      })}
    </div>
  );
};

export default Board;
