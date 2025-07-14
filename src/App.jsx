// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import LearningPaths from "./pages/LearningPaths";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import LearningPathDetail from "./pages/LearningPathDetail";
import MainLayout from "./layouts/MainLayout";

import { SearchProvider } from "./contexts/SearchContext"; // ✅ Thêm

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          {/* Trang không dùng layout */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          {/* Các trang dùng chung layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/learning-paths" element={<LearningPaths />} />
            <Route path="/learning-paths/:pathId" element={<LearningPathDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
