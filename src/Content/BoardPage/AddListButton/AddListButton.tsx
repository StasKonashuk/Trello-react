import React, { FC } from 'react';
import style from './AddListButton.module.css';
import { AddListButtonPropsType } from '../../../types/types';

const AddListButton: FC<AddListButtonPropsType> = ({ setActive }) => {
  return (
    <div className={style.addListButtonContainer}>
      <button
        type="button"
        className={style.addListButton}
        onClick={() => setActive(true)}
      >
        <span className={style.addListIcon} />
        <span>Добавить еще одну колонку</span>
      </button>
    </div>
  );
};

export default AddListButton;
