import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import EditBoardModal from '../../../../Modal/EditBoardModals/EditBoardModal';
import style from './Board.module.css';
import { BoardPropsType } from '../../../../types/types';

const Board: FC<BoardPropsType> = ({ boardId, boardName }) => {
  const [editBoardMode, setEditBoardMode] = useState(false);

  return (
    <li className={style.boardSectionItem}>
      <Link to={`/board/${boardId}`} className={style.boardSectionItemLink}>
        <div>
          <div>
            <div className={style.boardNameContainer}>{boardName}</div>
          </div>
        </div>
      </Link>
      {editBoardMode && (
        <EditBoardModal
          boardId={boardId}
          boardName={boardName}
          active={editBoardMode}
          setActive={setEditBoardMode}
        />
      )}
      <div className={style.editButton} onClick={() => setEditBoardMode(true)}>
        <img
          src="https://img.icons8.com/material-outlined/16/ffffff/edit--v1.png"
          alt=""
        />
      </div>
    </li>
  );
};

export default Board;
