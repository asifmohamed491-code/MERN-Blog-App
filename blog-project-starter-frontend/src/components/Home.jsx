import React from "react";
import Footer from "./common/Footer";
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      <div className="px-10 md:px-16">

        {/* HERO */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-12">

          <div className="w-full md:w-1/2 text-center md:text-left">

            <h2 className="text-3xl md:text-6xl font-bold pb-2">
              Hy! I Am
            </h2>

            <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
              Mohamed Asif
            </h2>

            <p className="py-4 text-gray-600">
              I can create stunning website for your company. Do check my works.
              I won't disappoint you.
            </p>

            <button className="button-style mt-3">
              Hire Me
            </button>

          </div>

          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src={BlogProfileImage}
              className="w-56 md:w-96"
              alt="Mohamed Asif profile"
            />
          </div>

        </div>

        {/* TECH STACK */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-items-center py-12">

          <img src={HTML} alt="HTML logo" className="w-12" />
          <img src={CSS} alt="CSS logo" className="w-12" />
          <img src={JS} alt="JavaScript logo" className="w-12" />
          <img src={REACTICON} alt="React logo" className="w-12" />
          <img src={DB} alt="Database icon" className="w-12" />
          <img src={NODE} alt="NodeJS logo" className="w-12" />

        </div>

        {/* SERVICES */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-16">

          <div className="flex flex-col items-center gap-6">

            <div className="border-[6px] border-purple-500 border-t-0 rounded-lg p-6 w-60 text-center">

              <div className="rounded-full p-5 font-bold text-white bg-gradient-to-br from-purple-200 to-purple-600">
                6
              </div>

              <p className="mt-2 font-medium">
                Projects Completed
              </p>

            </div>

            <div className="border-[6px] border-green-500 border-t-0 rounded-lg p-6 w-60 text-center">

              <div className="rounded-full p-5 font-bold text-white bg-gradient-to-br from-green-200 to-green-600">
                6
              </div>

              <p className="mt-2 font-medium">
                Months of Experience
              </p>

            </div>

          </div>

          <div className="text-center md:text-left">

            <h2 className="text-4xl md:text-7xl font-bold">
              My Awesome
            </h2>

            <h2 className="text-4xl md:text-7xl font-bold text-orange-400">
              Services
            </h2>

            <p className="my-4 text-gray-600">
              I have attached my Resume here for your reference.
            </p>

            <button className="button-style">
              Download CV
            </button>

          </div>

        </div>

        {/* PROJECTS */}
        <div className="mt-20">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
            Checkout My Live
            <span className="text-orange-400"> Projects</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">

            <img
              src={P1}
              alt="Project 1 preview"
              className="w-72 rounded-md shadow hover:scale-105 transition cursor-pointer"
            />

            <img
              src={P2}
              alt="Project 2 preview"
              className="w-72 rounded-md shadow hover:scale-105 transition cursor-pointer"
            />

            <img
              src={P3}
              alt="Project 3 preview"
              className="w-72 rounded-md shadow hover:scale-105 transition cursor-pointer"
            />

          </div>

        </div>

        {/* BLOG */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 my-20">

          <div>
            <img
              src={BlogImage}
              alt="Blog illustration"
              className="w-56 md:w-96"
            />
          </div>

          <div className="text-center md:text-left">

            <h2 className="text-3xl md:text-6xl font-bold">
              I like to Write
            </h2>

            <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
              Blogs about tech
            </h2>

            <p className="py-3 text-gray-600">
              You can know better about me by reading my blogs here.
            </p>

            <button
              className="button-style mt-2"
              onClick={() => navigate("/blogs")}
            >
              Read My Blogs
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;