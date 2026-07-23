import { Navigate } from "react-router-dom";
import AdminDashboard from "../admin/adminDashboard";

function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  return token ? children : <Navigate to="/admin-login" replace />;
}

export default ProtectedAdminRoute;
