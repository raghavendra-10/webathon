import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";

import { sendEmailVerification } from "firebase/auth";
import { FaSpinner } from "react-icons/fa";
import { auth, db } from "../firebaseConfig";  // If it's not already imported
import { setDoc, doc } from "firebase/firestore";

import "./login.css";

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const { createUser } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            await createUser(email, password);
            await sendEmailVerification(auth.currentUser); // Use the auth object
       

        } catch (e) {
            toast.success(
                "Registered Successfully. Please check your email for verification."
            );
        } finally {
            setIsLoading(false);
        }
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signIn(loginEmail, loginPassword);

            const user = auth.currentUser;
            if (user && !user.emailVerified) {
                toast.warning("Please verify your email before logging in.");
            } else {
                navigate("/dashboard");
            }
        } catch (e) {
            toast.error(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };
    // const handleForgotPassword = async () => {
    //   try {
    //     await sendPasswordResetEmail(loginEmail);
    //     toast.success("Password reset email sent. Check your inbox.");
    //   } catch (error) {
    //     toast.error(error.message);
    //   }
    // };

    return (
        <div className="body">
            <div className={`cont ${isSignup ? "right-panel-active" : ""}`}>
                <div className="form-cont sign-up-cont">
                    <div className="font-thin text-sm pl-2 pt-1 ">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="h1 sm:text-3xl">Create Account</h1>
                        <input
                            className="input  "
                            type="email"
                            name="email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            placeholder="email address"
                        />
                        <input
                            className="input "
                            type="password"
                            name="password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            placeholder="Password"
                        />
                        <button className="button" type="submit" disabled={isLoading}>
                            {isLoading ? (<>
                                <FaSpinner size={20} className="animate-spin ml-1" />
                            </>) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>
                </div>
                <div className="form-cont sign-in-cont">
                    <div className="font-thin text-sm pl-2 pt-1 ">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </div>
                    <form onSubmit={handleLoginSubmit} className="form">
                        <h1 className="h1 sm:text-3xl">Sign In</h1>
                
                        <input
                            className="input "
                            type="email"
                            name="email"
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                            placeholder="email address"
                        />
                        <input
                            className="input "
                            type="password"
                            name="password"
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                            placeholder="Password"
                        />
                  
                        <button className="button" type="submit" disabled={isLoading}>
                            {isLoading ? (<>
                                <FaSpinner size={20} className="animate-spin ml-1" />
                            </>) : (
                                "Sign In"
                            )}
                        </button>
                    </form>
                </div>
                <div className="overlay-cont">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="h1 sm:text-3xl">Welcome Back!</h1>
                            <p className="p">
                                To keep connected with us please login with your personal info
                            </p>
                            <button className="button ghost" onClick={toggleForm}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right ">
                            <h1 className="h1 sm:text-3xl">Hello, Friend!</h1>
                            <p className="p">
                                Enter your details and start the journey with us
                            </p>
                            <button className="button ghost" onClick={toggleForm}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
