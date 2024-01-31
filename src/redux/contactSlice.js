import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const stateState = { contacts: [], filter: '' };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: stateState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number, id) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
