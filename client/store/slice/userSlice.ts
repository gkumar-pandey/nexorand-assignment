import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  username: string;
  Points: number | null;
  firstName: string;
  lastName: string;
  token: string;
}

const initialState: UserState = {
  email: "",
  username: "",
  Points: null,
  firstName: "",
  lastName: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      state.email = user?.email;
      state.username = user?.username;
      state.firstName = user?.firstName;
      state.lastName = user?.lastName;
      state.Points = user?.Points;
      state.token = user?.token;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
