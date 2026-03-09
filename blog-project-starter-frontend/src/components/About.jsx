import React, { useEffect } from "react";
import Footer from "./common/Footer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-orange-500">Me</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm Mohamed Asif, a passionate MERN stack developer who enjoys
          building modern web applications and solving real-world problems
          through code.
        </p>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Who I Am
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I'm a developer who loves creating clean and modern websites.
            I focus mainly on the MERN stack (MongoDB, Express, React,
            Node.js) to build full-stack applications.
          </p>

          <p className="text-gray-600 mt-4">
            I enjoy learning new technologies, building real projects,
            and continuously improving my coding skills.
          </p>
        </div>

        {/* SKILLS */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            My Skills
          </h2>

          <div className="grid grid-cols-3 gap-6 text-center">

            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition">
              <FaHtml5 className="text-4xl text-orange-500 mb-2" />
              <p className="text-sm font-medium">HTML</p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition">
              <FaCss3Alt className="text-4xl text-blue-500 mb-2" />
              <p className="text-sm font-medium">CSS</p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition">
              <FaJs className="text-4xl text-yellow-500 mb-2" />
              <p className="text-sm font-medium">JavaScript</p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition">
              <FaReact className="text-4xl text-cyan-500 mb-2" />
              <p className="text-sm font-medium">React</p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition">
              <FaNodeJs className="text-4xl text-green-600 mb-2" />
              <p className="text-sm font-medium">Node.js</p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition">
              <FaDatabase className="text-4xl text-purple-600 mb-2" />
              <p className="text-sm font-medium">MongoDB</p>
            </div>

          </div>

        </div>

      </div>

      {/* JOURNEY */}
      <div className="bg-white py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            My <span className="text-orange-500">Journey</span>
          </h2>

          <div className="border-l-4 border-orange-500 pl-6 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Started Learning Web Development
              </h3>
              <p className="text-gray-600 text-sm">
                Learned HTML, CSS and JavaScript fundamentals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Learned React & Modern Frontend
              </h3>
              <p className="text-gray-600 text-sm">
                Built responsive websites and improved UI skills.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Started MERN Stack Development
              </h3>
              <p className="text-gray-600 text-sm">
                Building full stack applications using MongoDB,
                Express, React and Node.js.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* GOAL */}
      <div className="py-16 px-6">

        <div className="max-w-4xl mx-auto bg-orange-50 border border-orange-200 p-10 rounded-xl text-center">

          <h2 className="text-3xl font-bold mb-4">
            My Goal
          </h2>

          <p className="text-gray-700 leading-relaxed">
            My goal is to become a professional full-stack developer and
            build impactful applications that solve real-world problems.
            I aim to continuously learn new technologies and improve my
            development skills while creating meaningful projects.
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default About;