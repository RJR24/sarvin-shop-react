import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin:false,
    username: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.username = action.payload.username;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.username = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
