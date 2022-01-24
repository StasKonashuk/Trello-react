import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTaskList } from '../../../../redux/boardsSlise';
import { ListHeaderTittlePropsType } from '../../../../types/types';
import style from './ListHeaderTittle.module.css';

const ListHeaderTittle: FC<ListHeaderTittlePropsType> = ({
  boardId,
  listId,
  listName,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [listNameValue, setListNameValue] = useState<string>(listName);

  const dispatch = useDispatch();

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    dispatch(editTaskList({ boardId, listId, listName: listNameValue }));
    setEditMode(false);
  };

  return (
    <>
      {!editMode && (
        <div onClick={activateEditMode} className={style.listNameContainer}>
          <h2>{listName}</h2>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            value={listNameValue}
            onChange={(e) => setListNameValue(e.currentTarget.value)}
            className={style.editListTextarea}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </>
  );
};

export default ListHeaderTittle;
