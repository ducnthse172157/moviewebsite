import { createSlice } from '@reduxjs/toolkit';
import UsersData from '../shared/ListOfUsers';

export const userSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData }, // Use the data from UsersData
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
        return user;
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
