import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from '../contactItem/contact';
import css from './contacts.module.css';
import Loader from '../Loader';
import { filterSelector } from '../../redux/selectors';
import { getContactsThunk } from '../../redux/contacts/thunks';

const Contacts = () => {
  const [visibleContacts, setVisivbleContacts] = useState([]);
  const filter = useSelector(filterSelector);

  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    setVisivbleContacts(state => {
      state = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.filter)
      );
      return state;
    });
  }, [filter, contacts]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <Loader />}
      <ul className={css.contacts_list}>
        {visibleContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
            />
          );
        })}
      </ul>
    </>
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
