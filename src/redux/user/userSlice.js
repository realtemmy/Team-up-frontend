import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loggedIn: false,
  active: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      console.log("payload: ", action.payload);

      state.user = action.payload;
      state.loggedIn = true;
      state.active = true;
    },
    setPhoto: (state, action) => {
      state.user.photo = action.payload;
    }
    // updateuser: (state, action) => {},
    // clearUser: (state, action) => {},
  },
});

export const { setUser, clearUser, updateuser, setPhoto } = userSlice.actions;

export default userSlice.reducer;
