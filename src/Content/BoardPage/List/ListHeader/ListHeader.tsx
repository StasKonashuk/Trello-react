import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import ListExtraMenu from './ListExtraMenu';
import { editTaskList } from '../../../../redux/boardsSlise';
import { ListHeaderPropsType } from '../../../../types/types';
import style from './ListHeader.module.css';
import ListHeaderTittle from './ListHeaderTittle';

const ListHeader: FC<ListHeaderPropsType> = ({
  boardId,
  listId,
  listName,
  setActive,
}) => {
  return (
    <div className={style.listTopContainer}>
      <ListHeaderTittle boardId={boardId} listId={listId} listName={listName} />
      <ListExtraMenu boardId={boardId} listId={listId} setActive={setActive} />
    </div>
  );
};

export default ListHeader;
