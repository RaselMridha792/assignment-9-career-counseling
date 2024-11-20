import React, { useContext } from "react";
import { AllContext } from "../../contextprovider/DataContext";
import { Navigate } from "react-router-dom";

const PrivetProfile = ({ children }) => {
  const { user, loading } = useContext(AllContext);
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
  return <Navigate to="/login"></Navigate>;
};

export default PrivetProfile;
