import { createSlice } from "@reduxjs/toolkit";

// userlist - just user name and id
const initialState = {
  messages: [],
  showProfile: true,
  showDM: false,
};

const chatSlice = createSlice({
  initialState,
  name: "chat",
  reducers: {
    toggleProfile(state, action) {
      state.showProfile = action.payload;
    },
    toggleDM(state, action) {
      state.showDM = action.payload;
    },
    setMessages(state, action){
      state.messages = action.payload;
    }
  },
});

export const { toggleProfile, toggleDM } = chatSlice.actions;

export default chatSlice.reducer;
