import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux-store';
import style from './EditTaskDescriptionModal.module.css';
import { editTask, editTaskDescription } from '../../../redux/boardsSlise';
import {
  EditTaskDescriptionModalPropsType,
  listType,
} from '../../../types/types';

const EditTaskDescriptionModal: FC<EditTaskDescriptionModalPropsType> = ({
  boardId,
  listId,
  taskId,
  taskName,
  taskDescription,
  active,
  setActive,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editDescriptionMode, setEditDescriptionMode] =
    useState<boolean>(false);
  const [taskNameValue, setTaskNameValue] = useState<string>(taskName);
  const [taskDescriptionValue, setTaskDescriptionValue] =
    useState<string>(taskDescription);

  const dispatch = useDispatch();

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    dispatch(editTask({ boardId, listId, taskId, taskName: taskNameValue }));
    setEditMode(false);
  };

  const list = useSelector((state: RootState) =>
    state.boards.boards
      .find((board) => board.boardId === boardId)
      ?.taskLists.find((list: listType) => list.id === listId)
  );

  const setEditDescriptionModeHandler = (e: React.MouseEvent<EventTarget>) => {
    e.stopPropagation();
    setEditDescriptionMode(false);
  };

  const editTaskDescriptionHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(
      editTaskDescription({
        boardId,
        listId,
        taskId,
        description: taskDescriptionValue,
      })
    );
    setEditDescriptionMode(false);
  };

  return (
    <div
      className={classNames(style.modal, {
        [style.modalActive]: active,
      })}
    >
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.contentWrapper}>
            <button
              className={style.closeButton}
              type="button"
              onClick={() => setActive(false)}
            >
              <span className={style.closeButtonIcon} />
            </button>
            <div className={style.taskDetailWindow}>
              <div className={style.windowHeader}>
                <span className={style.windowHeaderIcon} />
                <div className={style.windowTitle}>
                  {!editMode && (
                    <div onClick={activateEditMode}>
                      <h2>{taskName}</h2>
                    </div>
                  )}
                  {editMode && (
                    <input
                      type="text"
                      autoFocus
                      className={style.taskTitleInput}
                      onChange={(e) => setTaskNameValue(e.target.value)}
                      value={taskNameValue}
                      onBlur={deactivateEditMode}
                    />
                  )}
                  <div className={style.windowHeaderInlineContent}>
                    <p>в колонке {list?.listName}</p>
                  </div>
                </div>
              </div>
              <div className={style.windowMainCol}>
                <div className={style.windowModuleTitle}>
                  <span className={style.iconDescription} />
                  <h3 className={style.moduleTitle}>Описание</h3>
                  <button
                    className={classNames(style.editDescriptionButtonActive, {
                      [style.editDescriptionButton]:
                        editDescriptionMode || !taskDescription,
                    })}
                    type="button"
                    onClick={() => setEditDescriptionMode(true)}
                  >
                    Изменить
                  </button>
                </div>
                {taskDescription && (
                  <div
                    onClick={() => setEditDescriptionMode(true)}
                    className={classNames(
                      style.taskDescriptionContainerActive,
                      {
                        [style.taskDescriptionContainer]: editDescriptionMode,
                      }
                    )}
                  >
                    <p className={style.taskDescriptionText}>
                      {taskDescription}
                    </p>
                  </div>
                )}
                <div onClick={() => setEditDescriptionMode(true)}>
                  {!taskDescription && !editDescriptionMode && (
                    <div className={style.descriptionContainer}>
                      <p>Добавить более подробное описание...</p>
                    </div>
                  )}
                  {editDescriptionMode && (
                    <div>
                      <form onSubmit={editTaskDescriptionHandler}>
                        <textarea
                          autoFocus
                          placeholder="Добавить более подробное описание..."
                          className={style.descriptionInput}
                          onChange={(e) =>
                            setTaskDescriptionValue(e.target.value)
                          }
                          value={taskDescriptionValue}
                        />
                        <div className={style.buttonsContainer}>
                          <button
                            className={style.saveDescriptionButton}
                            type="submit"
                            onSubmit={editTaskDescriptionHandler}
                          >
                            Сохранить
                          </button>
                          <button
                            className={style.closeDescriptionButton}
                            onClick={setEditDescriptionModeHandler}
                            type="button"
                          >
                            <span className={style.closeDescriptionInputIcon} />
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskDescriptionModal;
