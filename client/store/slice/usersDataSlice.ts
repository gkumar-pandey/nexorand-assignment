import { createSlice } from "@reduxjs/toolkit";

interface User {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  Points: number;
}

interface UsersDataState {
  users: User[] | [];
}

const initialState: UsersDataState = {
  users: [],
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.users = action.payload;
    },
    updateUserData: (state, action) => {
      state.users = state.users.map((user, idx) => {
        return user._id === action.payload._id ? action.payload : user;
      });
    },
  },
});

export const { setUsersData, updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
