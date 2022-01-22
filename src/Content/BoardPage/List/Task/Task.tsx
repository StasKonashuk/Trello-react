import React, { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import style from './Task.module.css';
import EditTaskNameModal from '../../../../Modal/EditTaskModals/EditTaskNameModal/EditTaskNameModal';
import EditTaskDescriptionModal from '../../../../Modal/EditTaskModals/EditTaskDescriptionModal/EditTaskDescriptionModal';
import { TaskPropsType } from '../../../../types/types';
import EditTaskButton from './EditTaskButton/EditTaskButton';

const Task: FC<TaskPropsType> = ({
  boardId,
  listId,
  taskId,
  index,
  taskName,
  taskDescription,
}) => {
  const [editTaskNameModalActive, setEditTaskNameModalActive] =
    useState<boolean>(false);
  const [editTaskDescriptionModalActive, setEditTaskDescriptionModalActive] =
    useState<boolean>(false);

  return (
    <div>
      <Draggable draggableId={String(taskId)} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <EditTaskButton
              taskName={taskName}
              taskDescription={taskDescription}
              setEditNameActive={setEditTaskNameModalActive}
              setEditDescriptionActive={setEditTaskDescriptionModalActive}
            />
          </div>
        )}
      </Draggable>
      {editTaskNameModalActive && (
        <EditTaskNameModal
          boardId={boardId}
          listId={listId}
          taskId={taskId}
          taskName={taskName}
          active={editTaskNameModalActive}
          setActive={setEditTaskNameModalActive}
        />
      )}
      {editTaskDescriptionModalActive && (
        <EditTaskDescriptionModal
          boardId={boardId}
          listId={listId}
          taskId={taskId}
          taskName={taskName}
          taskDescription={taskDescription}
          active={editTaskDescriptionModalActive}
          setActive={setEditTaskDescriptionModalActive}
        />
      )}
    </div>
  );
};

export default Task;
