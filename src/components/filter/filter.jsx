import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterContacts } from '../../redux/contactsSlice';

const Filter = () => {
  const filterInputId = nanoid();
  const {filter} = useSelector(state => state);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContacts(event.target.value.toLowerCase()));
  };

  return (
    <div className={css.contacts_filter}>
      <label className={css.contacts__name} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className={css.contacts__input}
        id={filterInputId}
        value={filter.filter}
        type="text"
        onChange={changeFilter}
      ></input>
    </div>
  );
};

export default Filter;
