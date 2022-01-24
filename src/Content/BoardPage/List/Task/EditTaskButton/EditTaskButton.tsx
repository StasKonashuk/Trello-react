import React, { FC } from 'react';
import { EditTaskButtonPropsType } from '../../../../../types/types';
import style from '../Task.module.css';

const EditTaskButton: FC<EditTaskButtonPropsType> = ({
  taskName,
  taskDescription,
  setEditDescriptionActive,
  setEditNameActive,
}) => {
  const setTaskNameModalHandler = (e: React.MouseEvent<EventTarget>) => {
    e.stopPropagation();
    setEditNameActive(true);
  };
  return (
    <div
      className={style.taskContainer}
      onClick={() => setEditDescriptionActive(true)}
    >
      <div className={style.taskNameContainer}>
        <div>{taskName}</div>
        {taskDescription && (
          <div>
            <span className={style.iconDescription} />
          </div>
        )}
      </div>
      <button
        type="button"
        className={style.editTaskButton}
        onClick={setTaskNameModalHandler}
      >
        <span className={style.editTaskIcon} />
      </button>
    </div>
  );
};

export default EditTaskButton;
