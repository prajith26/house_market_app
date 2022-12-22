import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import googleIcon from "../assets/svg/googleIcon.svg";

export const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
        const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // check user
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    // no user create user
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        timeStamp: serverTimestamp(),
      });
    }
    navigate('/')
    } catch (error) {
        toast.error('Not Possible')
    }
  };

  return (
    <div className="socialLogin">
      <p>
        Sign {location.pathname === "/sign-up" ? "up" : "in"}
        with
      </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
};
