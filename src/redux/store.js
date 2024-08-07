import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chat-redux/chatSlice"


const store = configureStore({
    reducer: {
        chat: chatReducer,
    }
});

export default store