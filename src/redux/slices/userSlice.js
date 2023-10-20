import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin:false,
    username: "kaveh2023",
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.username = action.payload.username;
    },
    logout: () => {},
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
