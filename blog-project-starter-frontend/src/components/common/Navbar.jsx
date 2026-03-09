import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Navbar() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [log, setlog] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setlog(true);
      } else {
        setlog(false);
      }
    });

    return () => unsubscribe();

  }, []);

  async function logOut() {
    await signOut(auth);
    setMenuOpen(false);
    navigate("/login");
  }

  return (
    <div className="flex justify-between items-center px-5 py-4 backdrop-blur-md bg-white/70 sticky top-0 z-50 border-b">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        <span className="text-gray-800">Per</span>
        <span className="text-orange-500">sonal</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

        <Link to="/home" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/blogs" className="relative group">
          Blogs
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/about" className="relative group">
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {
          log ? (
            <button
              onClick={logOut}
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:shadow-xl transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:shadow-xl transition duration-300"
            >
              Login
            </button>
          )
        }

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-bold text-xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300 ease-in-out ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >

        <Link to="/home" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/blogs" onClick={() => setMenuOpen(false)}>
          Blogs
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        {
          log ? (
            <button
              onClick={() => {
                logOut();
                setMenuOpen(false);
              }}
              className="button-style mt-2"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="button-style mt-2"
            >
              Login
            </button>
          )
        }

      </div>


    </div>
  );
}

export default Navbar;