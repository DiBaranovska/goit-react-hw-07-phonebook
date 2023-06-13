import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('contacts/aadContacts');
export const deleteContactAction = createAction('contacts/deleteContacts');
export const addFilterAction = createAction('filter/filterContacts');
