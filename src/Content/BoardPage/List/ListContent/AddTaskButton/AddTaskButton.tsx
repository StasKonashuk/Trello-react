import React, { FC } from 'react';
import { AddListButtonPropsType } from '../../../../../types/types';
import style from './AddTaskButton.module.css';

const AddTaskButton: FC<AddListButtonPropsType> = ({ setActive }) => {
  return (
    <div className={style.addTaskContainer}>
      <button
        type="button"
        className={style.addTaskButton}
        onClick={() => setActive(true)}
      >
        <span className={style.addTaskIcon} />
        <span className={style.addTaskButtonText}>Добавить карточку</span>
      </button>
    </div>
  );
};

export default AddTaskButton;
