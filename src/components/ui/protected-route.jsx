import toast from "react-hot-toast";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router";
import { Spinner } from "./spinner";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("user_token");

  const { decodedToken } = useJwt(token);

  if (!token) {
    toast.error("user need to logged in");
    return <Navigate to="/login" replace />;
  }

  console.log(decodedToken);
  if (decodedToken === null) {
    return <Spinner />;
  }
  if (!decodedToken?.emailVerified) {
    toast.error("user need to verify thier email first");
    return <Navigate to="/verify-email" replace />;
  }
  return children;
}

export default ProtectedRoute;
