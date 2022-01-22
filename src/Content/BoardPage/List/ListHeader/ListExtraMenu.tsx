import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskList } from '../../../../redux/boardsSlise';
import { ListExtraMenuPropsType } from '../../../../types/types';
import style from './ListExtraMenu.module.css';

const ListExtraMenu: FC<ListExtraMenuPropsType> = ({
  boardId,
  listId,
  setActive,
}) => {
  const [removeMode, setRemoveMode] = useState<boolean>(false);

  const dispatch = useDispatch();

  const activatedRemoveMode = (e: React.MouseEvent<EventTarget>) => {
    e.preventDefault();
    setRemoveMode(true);
  };

  const deactivatedRemoveMode = (e: React.MouseEvent<EventTarget>) => {
    e.preventDefault();
    setRemoveMode(false);
  };

  const addTaskExtraMenuHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setRemoveMode(false);
    setActive(true);
  };

  const removeTaskListHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setRemoveMode(false);
    dispatch(deleteTaskList({ boardId, listId }));
  };

  return (
    <div>
      <a
        className={style.listExtrasMenuIcon}
        href="/"
        onClick={activatedRemoveMode}
      >
        {' '}
      </a>
      {removeMode && (
        <div className={style.listExtrasMenu}>
          <div className={style.toolTipContainer}>
            <div className={style.toolTipTitle}>
              <span>Действия со списком</span>
            </div>
            <button
              type="button"
              className={style.closeExtrasMenuButton}
              onClick={deactivatedRemoveMode}
            >
              <span className={style.closeExtrasMenuButtonIcon} />
            </button>
          </div>
          <div className={style.extraMenuItemsContainer}>
            <ul className={style.extraMenuItemsList}>
              <li>
                <a
                  className={style.extraMenuItem}
                  href="/"
                  onClick={addTaskExtraMenuHandler}
                >
                  Добавить карточку
                </a>
              </li>
              <li>
                <a
                  className={style.extraMenuItem}
                  href="/"
                  onClick={removeTaskListHandler}
                >
                  Архивировать список
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListExtraMenu;
