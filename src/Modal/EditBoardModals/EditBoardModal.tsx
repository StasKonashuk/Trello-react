import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBoard, deleteBoard } from '../../redux/boardsSlise';
import style from './EditBoardModal.module.css';
import { EditBoardModalPropsType } from '../../types/types';

const EditBoardModal: FC<EditBoardModalPropsType> = ({
  boardId,
  boardName,
  setActive,
}) => {
  const [boardNameValue, setBoardNameValue] = useState<string>(boardName);

  const dispatch = useDispatch();

  const editTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (boardNameValue.trim() !== '') {
      dispatch(editBoard({ boardId, boardName: boardNameValue }));
      setActive(false);
    }
  };

  const removeTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (boardNameValue.trim() !== '') {
      dispatch(deleteBoard({ boardId }));
      setActive(false);
    }
  };

  const closeWindowHandler = (e: React.MouseEvent<EventTarget>) => {
    e.stopPropagation();
    setActive(false);
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.contentWrapper}>
            <button
              className={style.closeButton}
              type="button"
              onClick={closeWindowHandler}
            >
              <span className={style.closeButtonIcon} />
            </button>
            <div className={style.taskDetailWindow}>
              <div className={style.windowHeader}>
                <span className={style.windowHeaderIcon} />
                <div className={style.windowTitle}>
                  <input
                    type="text"
                    autoFocus
                    className={style.boardTitleInput}
                    onChange={(e) => setBoardNameValue(e.target.value)}
                    value={boardNameValue}
                  />
                </div>
              </div>
              <div className={style.windowMainCol}>
                <div className={style.windowModuleTitle}>
                  <button
                    className={style.editDescriptionButtonActive}
                    type="button"
                    onClick={editTaskHandler}
                  >
                    Изменить
                  </button>
                  <button
                    className={style.editDescriptionButtonActive}
                    type="button"
                    onClick={removeTaskHandler}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBoardModal;
