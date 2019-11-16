import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import backgroundImage from './assets/Melamine-wood-005.png';
import { Piece as PieceData } from '../../services/game';

interface PiecePosition {
  rowIndex: number;
  colIndex: number;
};

const useStyles = makeStyles<undefined, PiecePosition>(
  createStyles({
    wrapper: (position: PiecePosition) => {
      const square = 75;
      const dx = square * position.colIndex;
      const dy = square * position.rowIndex;
      return {
        transform: `translate(${dx}px, ${dy}px)`,
        transition: 'transform 200ms',
        padding: '2px',
        borderRadius: '5px',
        position: 'absolute',
        width: `75px`,
        height: `${square}px`,
      };
    },
    piece: {
      backgroundImage: `url(${backgroundImage})`,
      borderRadius: '5px',
      width: '71px',
      height: '71px',
      backgroundSize: 'cover',
      lineHeight: '71px',
      textAlign: 'center',
      fontSize: '25px',
      fontWeight: 'bold',
      color: 'white',
      textShadow: '-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000',
    },
  }),
);

interface Props {
  piece: PieceData;
  index: number;
  onClick: () => void;
}

const Piece: React.FC<Props> = ({ piece, index, onClick }) => {
  const positionMemoized = useMemo(() => {
    const position: PiecePosition = {
      rowIndex: Math.floor(index / 4),
      colIndex: index % 4,
    };
    return position;
  }, [index]);

  const classes = useStyles(positionMemoized);

  return (
    <div className={classes.wrapper}>
      <div
        onClick={onClick}
        className={classes.piece}>
        {piece.value}
      </div>
    </div>
  );
};

export default Piece;
