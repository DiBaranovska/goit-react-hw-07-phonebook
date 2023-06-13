import { combineReducers } from 'redux';
import { contactsReducer, filterReducer } from './contactsSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
