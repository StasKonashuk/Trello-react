import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskList } from '../../../redux/boardsSlise';
import style from './AddListForm.module.css';
import { AddListFormPropsType } from '../../../types/types';

const AddListForm: FC<AddListFormPropsType> = ({ setActive, boardId }) => {
  const [listName, setListName] = useState<string>('');

  const dispatch = useDispatch();

  const addTaskListHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (listName.trim() !== '') {
      dispatch(addTaskList({ boardId, listName }));
      setListName('');
      setActive(false);
    }
  };

  return (
    <div className={style.addListInputContainer}>
      <form onSubmit={addTaskListHandler}>
        <input
          className={style.addListInput}
          value={listName}
          type="text"
          onChange={(e) => setListName(e.target.value)}
          placeholder="Ввести заголовок списка"
        />
        <div className={style.addListInputButtonContainer}>
          <button className={style.addListInputButton} type="submit">
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
      </form>
    </div>
  );
};

export default AddListForm;
