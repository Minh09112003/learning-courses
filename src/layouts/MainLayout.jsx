// src/layouts/MainLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import FloatingChatButtons from "../components/FloatingChatButtons";
import ChatbotGemini from "../components/ChatbotGemini";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleSidebar={handleToggleSidebar} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

        <main className="flex-1 bg-gray-50 p-4 overflow-y-auto md:pl-28">
          <Outlet />
        </main>
      </div>

      <Footer />
      <FloatingChatButtons />
      <ToastContainer />
      <ChatbotGemini />
    </div>
  );
};

export default MainLayout;
