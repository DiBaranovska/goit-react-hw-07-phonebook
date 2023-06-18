import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './form.module.css';
import { nanoid } from 'nanoid';
import Loader from '../Loader';
import { addContactThunk } from '../../redux/contacts/thunks';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };
  const formSubmit = event => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      phone: event.target.number.value,
    };
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactThunk(data));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={formSubmit} className={css.form}>
        <label className={css.form__name} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={css.form__input}
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.form__name} htmlFor={telInputId}>
          Number
        </label>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          onChange={handleInputChange}
          value={number}
          id={telInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.form__btn}>
          Add contact
        </button>
      </form>
      {error && <h2>{error}</h2>}
      {isLoading && <Loader />}
    </>
  );
};

export default Form;
