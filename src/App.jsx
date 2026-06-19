import "./App.css";
import Login from "./pages/auth/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/RestPassword";
import DashboardLayout from "./layout/DashboardLayout";
import AnalyticsDashboard from "./pages/dashboard/AnalyticsDashboard";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        
        {/* أول صفحة تفتح تلقائي */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<AnalyticsDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;