import { useContext } from "react";
import { AllContext } from "../../contextprovider/DataContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetBookDetails = ({ children }) => {
  const { user, loading } = useContext(AllContext);
  const location = useLocation()
  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
//   return <Navigate to="login"></Navigate>;
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetBookDetails;
