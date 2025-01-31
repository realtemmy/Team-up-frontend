import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Toaster } from "@/components/ui/sonner";

import MainLayout from "./components/main-layout/MainLayout";
import UserProfile from "./components/user/user-profile/UserProfile";
import Chat from "./pages/chat/chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/Not-found/NotFound";
import Home from "./pages/home/Home";
import UserSettings from "./pages/settings/UserSettings";
import Projects from "./pages/projects/Projects";
import CreateProject from "./features/project/create-project/CreateProject";

import Posts from "./pages/posts/Posts";
import NewsFeed from "./pages/News-feed/NewsFeed";
import Bookmarks from "./pages/bookmarks/Bookmarks";

import "react-toastify/dist/ReactToastify.css";
import ProjectPage from "./features/project/project-page/ProjectPage";

// Change redux to react query

// create a create/join a project, join a hackathon
// create a project - send invites to collaborators,
// Edit project, remove and add collaborators
// Assign tasks, update tasks, mark as complete
// Header - sidebar, Breadcrumb and navigation.
// latest project route project/latest -- would get by project creation date only
// Get all logged in users team
// keep track of post's bookmarks, and user's that bookmarked
// Add Bookmarked section
// Send mail to all contributors before their id is added to the project
// Chat feature/functionality
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/user/settings" element={<UserSettings />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/feed" element={<NewsFeed />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<CreateProject />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />

          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" richColors />
      <ToastContainer />
    </>
  );
}

export default App;
