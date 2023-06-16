import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios(
    'https://6489b6185fa58521cab01a22.mockapi.io/contacts'
  );
  return data;
};

export const postContact = async contact => {
  const { data } = await axios({
    method: 'post',
    url: `https://6489b6185fa58521cab01a22.mockapi.io/contacts`,
    data: { contact },
  });
  return data;
};
