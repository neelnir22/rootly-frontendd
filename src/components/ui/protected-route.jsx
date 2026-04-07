import toast from "react-hot-toast";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("user_token");

  const { decodedToken } = useJwt(token);

  if (!token) {
    toast.error("user need to logged in");
    return <Navigate to="/login" replace />;
  }

  if (!decodedToken?.emailVerified) {
    toast.error("user need to verify thier email first");
    return <Navigate to="/verifyMyEmail" replace />;
  }
  return children;
}

export default ProtectedRoute;
