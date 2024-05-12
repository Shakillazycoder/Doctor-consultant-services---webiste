import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [profileUpdate, setProfileUpdate] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const SignOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      console.log(userEmail);

      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:3000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("http://localhost:3000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [profileUpdate, user?.email]);
  const AuthInfo = {
    user,
    loading,
    setProfileUpdate,
    CreateUser,
    googleSignIn,
    signInUser,
    SignOutUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
// import axios from "axios";
import auth from "../Firebase/firebase.config";
import axios from "axios";
