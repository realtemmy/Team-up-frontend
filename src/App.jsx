import { Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import User from "./components/user/User";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// dialogue, drawer, hover card
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
