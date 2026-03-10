import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../config/firebase";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // if user already logged in redirect to home
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });

    return () => unsubscribe();

  }, [navigate]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {

        // logout immediately after signup
        await signOut(auth);

        // redirect to login page
        navigate("/login");

      })
      .catch(() => {
        setError("Failed to create account");
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-200"
      >

        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Create Account
        </h2>

        <div className="mb-5">
          <label className="text-sm text-gray-600">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-5">
          <label className="text-sm text-gray-600">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-5">
          <label className="text-sm text-gray-600">Confirm Password</label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm password"
            className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

        </div>

        <p
          className="text-sm text-blue-600 cursor-pointer mb-6 hover:underline"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login here
        </p>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Signup;