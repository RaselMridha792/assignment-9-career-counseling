import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase.init";
import "react-toastify/dist/ReactToastify.css";

export const AllContext = createContext();
const DataContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  // sign up method implement
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login method implement
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signIn with google implement
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // save the state changes on auth
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  //   handle sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  // handle reset password
  const [resetmail, setResetMail] = useState("");
  const handleResetPassword = (email) => {
    const resetEmail = email.current.value;
    setResetMail(resetEmail);
  };

  // handle reset password

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const [id, setId] = useState(null);
  const handleDetailsId = (id) => {
    if (id) {
      setId(id);
    } else {
      setId(null);
    }
  };

  const DataInfo = {
    createUser,
    loginUser,
    signInGoogle,
    signOutUser,
    user,
    setUser,
    updateUserProfile,
    handleResetPassword,
    resetmail,
    handleDetailsId,
    loading,
    id,
    setLoading,
  };

  return <AllContext.Provider value={DataInfo}>{children}</AllContext.Provider>;
};

export default DataContext;
