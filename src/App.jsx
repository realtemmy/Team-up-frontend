import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import User from "./components/user/User";
import Navigation from "./components/navigation/Navigation";

import Chat from "./pages/chat/chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/Not-found/NotFound";
import Home from "./pages/home/Home";
import UserSettings from "./pages/settings/UserSettings";
import Projects from "./pages/projects/Projects";

import "react-toastify/dist/ReactToastify.css";

// create a create/join a project, join a hackathon
// create a project - send invites to collaborators,
// Assign tasks
// Header - sidebar, Breadcrumb and navigation.
// latest project route project/latest -- would get by project creation date only


// ====== This night ==========
// create uploading of images on the server
// allow uploading of image for project creation, user profile picture

// projects/:projectId - project page to join/view projects
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/user/settings" element={<UserSettings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
