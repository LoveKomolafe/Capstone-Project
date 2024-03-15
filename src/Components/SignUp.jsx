import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate} from "react-router-dom";
import "../assets/Styles/signup.css";



const SignUp = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Handling error messages
  const handleAuthError = (error) => {
    console.log('Authentication Error:', error);
    if (error.code === "auth/weak-password") {
      setError("Password should be at least 6 characters");
    } else if (error.code === "auth/email-already-in-use") {
      setError("This Email address is already in use");
    } else if (error.code === "auth/invalid-email") {
      setError("The Email address is invalid");
    } else {
      setError(
        "An error occurred while creating the account. Please try again"
      );
    }
  };

  const signUp = async (e) => {
    e.preventDefault();

    // Validating the email and password
    if (!email || !password) {
      setError("Please fill the Email and Password fields to sign up");

      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");

      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
        // if (userCredential && userCredential.user) {
        //   await userCredential.user.sendEmailVerification();
        //   };

      // User Created
      navigate("/dashboard"); // Redirecting to the dashboard after successful sign up
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // User signed in
      navigate("/dashboard"); // Redirecting to the dashboard after successful sign up with Google
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <div className="sign-card">
      <h2>Sign Up</h2>

      <p>Create an Account on Carefinder and filling your details below:</p>
      <form onSubmit={signUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <div className="error-message">{error}</div>}
        <button onClick={signUp}>Sign In</button>
        <p>Or</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>

        
      </form>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignUp;
