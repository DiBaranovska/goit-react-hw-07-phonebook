import { getContactsThunk } from './contacts/thunks';
import { initialStateContact } from './contacts/initialStateContact';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContact,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
/*export const { aadContacts, deleteContacts } = contactsSlice.actions;*/

const initialStateFilter = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
