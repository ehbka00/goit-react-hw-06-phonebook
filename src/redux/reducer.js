// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from './actions';

// const initialState = {
//   contacts: [],
// };

// export const contactReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     })
//     .addCase(deleteContact, (state, action) => {
//       return {
//         ...state,
//         contacts: [
//           state.contacts.filter(contact => contact.id !== action.payload.id),
//         ],
//       };
//     })
//     .addCase(fiter, name);
// });
