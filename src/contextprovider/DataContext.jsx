import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase.init";

export const AllContext = createContext();
const DataContext = ({ children }) => {
  const [service, setService] = useState();
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("./service.json");
      const data = await response.json();
      setService(data);
    };
    loadData();
  }, []);

  // sign up method implement
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login method implement
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signIn with google implement
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // save the state changes on auth
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("successfully loggedIn", currentUser);
        setUser(currentUser);
      } else {
        console.log("user not logged in");
        setUser(null);
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  //   handle sign out
  const signOutUser = () =>{
    return signOut(auth)
  }

  const DataInfo = {
    service,
    createUser,
    loginUser,
    signInGoogle,
    signOutUser,
    user,
    setUser,

  };

  return <AllContext.Provider value={DataInfo}>{children}</AllContext.Provider>;
};

export default DataContext;
