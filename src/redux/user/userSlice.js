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
    setProfilePhoto: (state, action) => {
      state.user.photo = action.payload;
    },
    addProjectId: (state, action) => {
      state.user.projects.push(action.payload);
    }
    // updateuser: (state, action) => {},
    // clearUser: (state, action) => {},
  },
});

export const { setUser, clearUser, updateuser, setProfilePhoto, addProjectId } = userSlice.actions;

export default userSlice.reducer;
