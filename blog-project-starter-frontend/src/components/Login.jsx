import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,seterr]=useState("")

  useEffect(() => {
    window.scrollTo(0, 0);
     auth.onAuthStateChanged(function (user) {
      if (user) {
        navigate("/home")
      }
      else{
        navigate("/login")
      }
    });
     

  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password).then((res)=>{
      navigate("/home")
    }).catch(()=>{
      seterr("Error Signing in Please try again")
    })

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-200"
      >

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Welcome Back
        </h2>

        {/* Email */}
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

        {/* Password */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* {error throw} */}
        <p
          className="text-sm text-red-600 mb-6"
        >
          {err}
        </p>

        {/* Register link */}
        <p
          className="text-sm text-blue-600 cursor-pointer mb-6 hover:underline"
          onClick={() => navigate("/signup")}
        >
          New user? Register here
        </p>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;