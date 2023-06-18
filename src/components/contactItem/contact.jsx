import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactThunk } from '../../redux/contacts/thunks';
import css from './contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <li className={css.contact_item}>
      {name}: {number}
      <button className={css.contact_btn} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
