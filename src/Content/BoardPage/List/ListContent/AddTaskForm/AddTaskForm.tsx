import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../../../redux/boardsSlise';
import { AddTaskFormPropsType } from '../../../../../types/types';
import style from './AddTaskForm.module.css';

const AddTaskForm: FC<AddTaskFormPropsType> = ({
  boardId,
  listId,
  setActive,
}) => {
  const [taskName, setTaskName] = useState<string>('');

  const dispatch = useDispatch();

  const addTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      dispatch(addTask({ boardId, listId, taskName }));
      setTaskName('');
      setActive(false);
    }
  };

  return (
    <form onSubmit={addTaskHandler}>
      <div className={style.addTaskFormContainer}>
        <div className={style.addTaskInputContainer}>
          <textarea
            placeholder="Ввести заголовок для этой карточки"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className={style.addTaskInput}
          />
        </div>
        <div className={style.addTaskFooterContainer}>
          <div className={style.addTaskButtonContainer}>
            <button className={style.addTaskInputButton} type="submit">
              Добавить список
            </button>
            <button
              className={style.closeButton}
              type="button"
              onClick={() => setActive(false)}
            >
              <span className={style.closeButtonContent} />
            </button>
          </div>
          <div className={style.addTaskExtrasMenuContainer}>
            <a className={style.addTaskExtrasMenu} href="/">
              {' '}
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
