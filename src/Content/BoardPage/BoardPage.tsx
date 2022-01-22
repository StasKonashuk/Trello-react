import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import style from './BoardPage.module.css';
import { RootState } from '../../redux/redux-store';
import { addTaskList, sort } from '../../redux/boardsSlise';
import List from './List/List';
import SidePane from '../SidePane/SidePane';
import AddListButton from './AddListButton/AddListButton';
import AddListForm from './AddListForm/AddListForm';

const BoardPage = () => {
  const [addMode, setAddMode] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { id } = useParams<'id'>();

  const boardId = Number(id);

  const tasksLists = useSelector(
    (state: RootState) =>
      state.boards.boards.find((board) => board.boardId === boardId)?.taskLists
  );

  const deactivateAddMode = () => {
    setAddMode(false);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort({
        boardId,
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
      })
    );
  };

  const tasksList = tasksLists?.map((list) => (
    <List
      key={list.id}
      boardId={boardId}
      listId={list.id}
      listName={list.listName}
      tasks={list.tasks}
    />
  ));

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={style.boardPageContainer}>
        <SidePane />
        <div className={style.listsContainer}>
          {tasksList}
          {!addMode && <AddListButton setActive={setAddMode} />}
          {addMode && <AddListForm setActive={setAddMode} boardId={boardId} />}
        </div>
      </div>
    </DragDropContext>
  );
};

export default BoardPage;
