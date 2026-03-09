import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";
import { FaHeart } from "react-icons/fa";
import auth from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Blogs() {

  const [blogs, setBlogs] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [admin, setAdmin] = useState(false);

  const fetchBlogs = () => {
    axios
      .get("https://blog-backend-dg7v.onrender.com/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch(() => console.log("Error fetching data"));
  };

  useEffect(() => {

    window.scrollTo(0, 0);
    fetchBlogs();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "G8njrAfapCNdCsookEChof95lrV2") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    });

    return () => unsubscribe();

  }, []);

  const handleLike = async (blog_id) => {
    try {

      const res = await axios.patch(
        `https://blog-backend-dg7v.onrender.com/api/blogs/like/${blog_id}`
      );

      if (res.status === 200) {
        fetchBlogs();
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleNewBlogSubmit = (event) => {

    event.preventDefault();

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    axios
      .post("https://blog-backend-dg7v.onrender.com/api/blogs", {
        newTitle,
        newContent,
        date,
        likes: 0,
      })
      .then(() => {
        fetchBlogs();
      });

    setNewTitle("");
    setNewContent("");

  };

  return (

    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 pt-16">

      {/* CONTENT WRAPPER */}
      <div className="flex-grow">

        {/* HEADER */}
        <div className="text-center mb-14 px-4">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="text-orange-500">Tech Blogs</span>
          </h1>

          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Thoughts, tutorials and insights about development
          </p>

        </div>

        {/* ADMIN BLOG CREATE */}
        {admin && (

          <div className="px-4">

            <div className="w-full max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg mb-16">

              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700">
                Write a New Blog
              </h2>

              <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Blog Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                  required
                />

                <textarea
                  placeholder="Write your blog content..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                  rows="4"
                  required
                />

                <button
                  type="submit"
                  className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition w-full"
                >
                  Publish Blog
                </button>

              </form>

            </div>

          </div>

        )}

        {/* BLOG LIST */}
        <div className="flex flex-wrap gap-10 px-6">

          {blogs.map((blog) => (

            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition flex-grow basis-[31%] min-w-[260px]"
            >

              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {blog.newTitle}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {blog.date}
              </p>

              <p className="text-gray-600 mb-5">
                {blog.newContent}
              </p>

              <div className="flex justify-between items-center">

                <button
                  onClick={() => handleLike(blog._id)}
                  className="flex items-center gap-2 text-red-500 hover:scale-110 transition"
                >
                  <FaHeart />
                  Like
                </button>

                <span className="text-gray-500 text-sm">
                  {blog.likes} Likes
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Blogs;