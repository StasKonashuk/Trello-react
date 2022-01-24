import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../../../redux/boardsSlise';
import style from './AddBoardButton.module.css';

const AddBoardButton = () => {
  const [addBoardMode, setAddBoardMode] = useState<boolean>(false);
  const [boardNameValue, setBoardNameValue] = useState<string>('');

  const dispatch = useDispatch();

  const activatedAddBoardMode = () => {
    setAddBoardMode(true);
  };

  const deactivatedAddBoardMode = () => {
    setAddBoardMode(false);
  };

  const addBoardHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (boardNameValue.trim() !== '') {
      dispatch(addBoard(boardNameValue));
      setBoardNameValue('');
      setAddBoardMode(false);
    }
  };
  return (
    <li className={style.сreateBoardSectionItemContainer}>
      <button
        type="button"
        className={style.сreateBoardSectionButton}
        onClick={activatedAddBoardMode}
      >
        <p>
          <span>Создать доску</span>
        </p>
      </button>
      {addBoardMode && (
        <div className={style.boardExtrasMenu}>
          <div className={style.toolTipContainer}>
            <div className={style.toolTipTitle}>
              <span>Создать доску</span>
            </div>
            <button
              type="button"
              className={style.closeExtrasMenuButton}
              onClick={deactivatedAddBoardMode}
            >
              <span className={style.closeExtrasMenuButtonIcon} />
            </button>
          </div>
          <div className={style.extraMenuItemsContainer}>
            <form onSubmit={addBoardHandler}>
              <ul className={style.extraMenuItemsList}>
                <li>
                  <div className={style.extraMenuItem}>
                    <span>Заголовок доски*</span>
                    <input
                      onChange={(e) => setBoardNameValue(e.target.value)}
                      type="text"
                      className={style.addBoardInput}
                    />
                  </div>
                </li>
              </ul>
              <button type="submit" className={style.addBoardButton}>
                Создать
              </button>
            </form>
          </div>
        </div>
      )}
    </li>
  );
};

export default AddBoardButton;
