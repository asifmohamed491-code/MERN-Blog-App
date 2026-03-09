import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 w-full">

      {/* top gradient border */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-400"></div>

      <div className="w-full px-6 md:px-10 py-10 flex flex-col md:flex-row items-center md:items-start justify-between">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Mohamed <span className="text-orange-400">Asif</span>
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            MERN Stack Developer | Building modern web applications.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-xl mt-6 md:mt-0">
          <a href="https://github.com/asifmohamed491-code" className="hover:text-orange-400 transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/mohamedasif07/" className="hover:text-orange-400 transition">
            <FaLinkedin />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asifmohamed491@gmail.com" className="hover:text-orange-400 transition">
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="w-full px-6 md:px-10 pb-8 text-gray-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Mohamed Asif. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;