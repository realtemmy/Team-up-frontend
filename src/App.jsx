import { Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// google api key - AIzaSyBE16gMqR6XG9skX8x8JZVzdm-aoDOO5V0
// clientId - 531103568928-phrlu71k9e07e1775nec9otbdiuoje60.apps.googleusercontent.com
// client secret - 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

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
