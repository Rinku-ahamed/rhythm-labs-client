import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster />
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto relative">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </React.StrictMode>
  </AuthProvider>
);
