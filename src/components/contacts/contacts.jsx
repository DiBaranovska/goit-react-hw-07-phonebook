import React from 'react';
import {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from '../contactItem/contact';
import css from './contacts.module.css';


const Contacts = () => {
  const [visibleContacts, setVisivbleContacts] = useState([]);
  const {contacts, filter} = useSelector(state => state);
 
 
  useEffect(() => {
    setVisivbleContacts(state => {
      state = contacts.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.filter)
      );
      return state;
    })
  }
, [filter, contacts]);
  

  return (
    <ul className={css.contacts_list}>
      {visibleContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
