import { Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import User from "./components/user/User";
import NotFound from "./pages/Not-found/NotFound";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/navigation/Navigation";

import "react-toastify/dist/ReactToastify.css";

// dialogue, drawer, hover card
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
