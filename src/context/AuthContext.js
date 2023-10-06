import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,

} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { doc, setDoc } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      if (userCredential.user) {
        // Send email verification
        await sendEmailVerification(userCredential.user);

        // Create the user's bookmarks collection
        createUserBookmarksCollection(userCredential.user.uid);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error("Error creating user account.");
    }
  };

  const createUserBookmarksCollection = async (uid) => {
    try {
      // Create the user's bookmarks collection
      await setDoc(doc(db, 'users', uid, 'bookmarks', 'placeholder'), {
        placeholder: true,
      }); // Create an initial document as a placeholder
    } catch (error) {
      console.error('Error creating user bookmarks collection:', error);
      toast.error("Error creating user bookmarks.");
    }
  };

  const sendPasswordResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Please check your inbox.");
    } catch (error) {
      toast.error("Error sending password reset email.");
    }
  };

  const signIn = async (loginEmail, loginPassword) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error("Error signing in.");
      return null;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser({});
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error("Error logging out.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, sendPasswordResetEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
