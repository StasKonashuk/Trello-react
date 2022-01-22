import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux-store';
import AddBoardButton from './AddBoardButton/AddBoardButton';
import Board from './Board/Board';
import style from './Boards.module.css';

const Boards = () => {
  const boards = useSelector((state: RootState) => state.boards.boards);

  const board = boards.map((board) => (
    <Board
      key={board.boardId}
      boardId={board.boardId}
      boardName={board.boardName}
    />
  ));

  return (
    <div>
      <ul className={style.boardSectionItemsList}>
        {board}
        <AddBoardButton />
      </ul>
    </div>
  );
};

export default Boards;
