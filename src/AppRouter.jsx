import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";
import ProjectDetails from "./pages/ProjectDetails";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>

      {/* Homepage */}
      <Route path="/" element={<Home />} />

      {/* Project Details */}
      <Route
        path="/projects/:slug"
        element={<ProjectDetails />}
      />

      {/* Admin Login */}
      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/* Protected Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}