import { useDispatch } from "react-redux";
import { signOutAsync } from "../store/auth/authSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOutAsync());
  }, [dispatch]);

  return <Navigate to="/login" />;
}
