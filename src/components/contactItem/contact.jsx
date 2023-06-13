import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContacts } from '../../redux/contactsSlice'
import css from './contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    dispatch(deleteContacts(id))
  }
  return (
    <li className={css.contact_item}>
      {name}: {number}
      <button
        className={css.contact_btn}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  )
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
