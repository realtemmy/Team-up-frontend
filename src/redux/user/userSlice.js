import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
//   bio: "",
//   email: "",
//   address: "",
//   projectName: "",
//   skills: [],
//   projectUrl: "",
//   contributors: [],
//   certificationName: "",
//   certificateUrl: "",
//   certificateDateIssued: "",
//   phone: "",
//   //   socials
// };

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
    // updateuser: (state, action) => {},
    // clearUser: (state, action) => {},
  },
});

export const { setUser, clearUser, updateuser } = userSlice.actions;

export default userSlice.reducer;
