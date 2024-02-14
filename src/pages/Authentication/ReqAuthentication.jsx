/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Utls/Spinner";

export default function ReqAuthentication({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
