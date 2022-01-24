import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import style from './EditTaskNameModal.module.css';
import { editTask, deleteTask } from '../../../redux/boardsSlise';
import { EditTaskNameModalPropsType } from '../../../types/types';

const EditTaskNameModal: FC<EditTaskNameModalPropsType> = ({
  boardId,
  listId,
  taskId,
  taskName,
  active,
  setActive,
}) => {
  const [taskNameValue, setTaskNameValue] = useState<string>(taskName);

  const dispatch = useDispatch();

  const editTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskNameValue.trim() !== '') {
      dispatch(editTask({ boardId, listId, taskId, taskName: taskNameValue }));
      setActive(false);
    }
  };

  const removeTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskNameValue.trim() !== '') {
      dispatch(deleteTask({ boardId, listId, taskId }));
      setActive(false);
    }
  };

  return (
    <div
      className={classNames(style.modal, {
        [style.modalActive]: active,
      })}
    >
      <button
        type="button"
        onClick={() => setActive(false)}
        className={style.closeModalButton}
      >
        <span className={style.closeModalIcon} />
      </button>
      <div className={style.modalContentContainer}>
        <div className={style.modalContent}>
          <form onSubmit={editTaskHandler}>
            <div className={style.editInputContainer}>
              <div className={style.editTextAreaContainer}>
                <textarea
                  className={style.editTextArea}
                  onChange={(e) => setTaskNameValue(e.target.value)}
                  value={taskNameValue}
                />
              </div>

              <button type="submit" className={style.saveButton}>
                Сохранить
              </button>
            </div>
          </form>
          <form onSubmit={removeTaskHandler}>
            <div className={style.editMenuContainer}>
              <button type="submit" className={style.removeTaskButton}>
                <span className={style.removeTaskIcon} />
                <span className={style.removeTaskText}>Удалить карточку</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskNameModal;
