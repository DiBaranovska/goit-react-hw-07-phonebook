import { getContacts, postContact } from '../../api/contactsApi';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  () => {
    return getContacts();
  }
);

export const postContactThunk = createAsyncThunk('contacts/postContact', () => {
  return postContact();
});
