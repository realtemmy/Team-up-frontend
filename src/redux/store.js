import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chat-redux/chatSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
});

export default store;
