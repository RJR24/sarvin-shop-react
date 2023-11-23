import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    openRegisterModal: false,
    username: "",
  },
  reducers: {
    setRegisterModal: (state) => {
      state.openRegisterModal = !state.openRegisterModal;
    },
    login: (state, action) => {
      state.isLogin = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = "";
    },
  },
});

export const { setRegisterModal, login, logout } = userSlice.actions;
export default userSlice.reducer;
