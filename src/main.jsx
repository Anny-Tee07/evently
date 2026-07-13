
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import AuthProvider from "./context/AuthContext";
import EventProvider from "./context/EventContext";
import BookmarkProvider from "./context/BookmarkContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <BookmarkProvider>
            <App />
          </BookmarkProvider>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);



