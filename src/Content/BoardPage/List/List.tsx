import React, { FC, useState } from 'react';
import style from '../BoardPage.module.css';
import { ListPropsType } from '../../../types/types';
import ListHeader from './ListHeader/ListHeader';
import ListContent from './ListContent/ListContent';

const List: FC<ListPropsType> = ({ boardId, listId, listName, tasks }) => {
  const [addTaskMode, setAddTaskMode] = useState<boolean>(false);

  return (
    <div className={style.listContainer}>
      <ListHeader
        boardId={boardId}
        listId={listId}
        listName={listName}
        setActive={setAddTaskMode}
      />
      <ListContent
        boardId={boardId}
        listId={listId}
        tasks={tasks}
        active={addTaskMode}
        setActive={setAddTaskMode}
      />
    </div>
  );
};

export default List;
