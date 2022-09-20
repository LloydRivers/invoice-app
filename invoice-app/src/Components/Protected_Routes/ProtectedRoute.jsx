import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/Slices/user/userSlice";

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsLoggedIn);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  return;
}

export default ProtectedRoute;
