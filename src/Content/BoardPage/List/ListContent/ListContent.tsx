import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ListContentPropsType } from '../../../../types/types';
import Task from '../Task/Task';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import style from './ListContent.module.css';

const ListContent: FC<ListContentPropsType> = ({
  boardId,
  listId,
  active,
  setActive,
  tasks,
}) => {
  const task = tasks.map((task, index) => (
    <Task
      key={task.id}
      boardId={boardId}
      listId={listId}
      index={index}
      taskId={task.id}
      taskName={task.taskName}
      taskDescription={task.description}
    />
  ));

  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className={style.tasksContainer}>
            <div>{task}</div>
          </div>
          {provided.placeholder}
          {!active && <AddTaskButton setActive={setActive} />}

          {active && (
            <AddTaskForm
              boardId={boardId}
              listId={listId}
              setActive={setActive}
            />
          )}
        </div>
      )}
    </Droppable>
  );
};

export default ListContent;
