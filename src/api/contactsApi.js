import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios(
    'https://6489b6185fa58521cab01a22.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    `https://6489b6185fa58521cab01a22.mockapi.io/contacts`,
    contact
  );
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://6489b6185fa58521cab01a22.mockapi.io/contacts/${id}`
  );
  return data;
};
