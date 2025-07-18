import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { SearchProvider } from "./contexts/SearchContext"; // ✅

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider> {/* ✅ Bọc app */}
      <App />
    </SearchProvider>
  </StrictMode>
);
