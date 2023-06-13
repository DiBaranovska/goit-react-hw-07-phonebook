const { createSlice } = require("@reduxjs/toolkit");


const initialStateContact = { contacts: [] }

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialStateContact,
    reducers: {
        aadContacts: (state, { payload }) => {
        state.contacts= [...state.contacts, payload] ;
    },
        deleteContacts: (state, { payload }) => {
        state.contacts = state.contacts.filter(contact => contact.id !== payload) ;
    } 
    }
})
export const contactsReducer = contactsSlice.reducer
export const { aadContacts, deleteContacts } = contactsSlice.actions



const initialStateFilter = { filter: "" }

const filterSlice = createSlice({
    name: "filter",
    initialState: initialStateFilter,
    reducers: {
         filterContacts: (state, { payload }) => {
        state.filter =  payload ;
    }
    }
})

export const filterReducer = filterSlice.reducer
export const { filterContacts } = filterSlice.actions