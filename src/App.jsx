import { Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
