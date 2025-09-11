import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../utils/ProtectedRoute";
import LandingPage from "../pages/LandingPage";
import LandingPageLayout from "../layouts/LandingPageLayout";
import Events from "../pages/EventsPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <LandingPageLayout>
            <LandingPage />
          </LandingPageLayout>
        }
      />

      {/* Auth Routes */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />

      {/* Dashboard Route (Protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Events />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Redirect unknown routes */}
      <Route
        path="*"
        element={
          <LandingPageLayout>
            <LandingPage />
          </LandingPageLayout>
        }
      />
    </Routes>
  );
}
