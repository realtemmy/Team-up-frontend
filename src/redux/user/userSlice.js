import { createSlice } from "@reduxjs/toolkit";
import chatSlice from "../chat-redux/chatSlice";

const initialState = {
  name: "",
  bio: "",
  email: "",
  address: "",
  projectName: "",
  skills: [],
  projectUrl: "",
  contributors: [],
  certificationName: "",
  certificateUrl: "",
  certificateDateIssued: "",
  phone: "",
  //   socials
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    addUser: (state, action) => {},
    updateuser: (state, action) => {},
    clearUser: (state, action) => {},
  },
});

export const {addUser, clearUser, updateuser} = userSlice.actions;
export default chatSlice.reducer
