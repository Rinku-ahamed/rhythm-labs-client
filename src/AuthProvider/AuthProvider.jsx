// import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [darkLight, setDarkLight] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxios();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
      // Get the token
      if (currentUser) {
        axiosSecure
          .post("/jwt", { email: currentUser.email })
          .then((response) => {
            const { token } = response.data;
            if (token) {
              localStorage.setItem("access-token", token);
            }
          })
          .catch((error) => {
            // Handle error while getting the token
            console.error("Error getting token:", error);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      // Cleanup function
      unsubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
    googleLogin,
    setLoading,
    darkLight,
    setDarkLight,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
