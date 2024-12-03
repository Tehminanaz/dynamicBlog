"use client";

import { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AppContext } from "@/app/context/AppContext";

const categories: Array<string> = [
  "All", "Development", "Projects", "Lifestyle", "Technology"
];

export default function Header() {
  const [activated, setActivated] = useState<number>(0);
  const { setFilterString, setSearch } = useContext(AppContext);

  return (
    <section className="w-full border-x border-gray-300 p-8 mt-20 ml-40">
      {/* Main Header Section */}
      <div className="flex justify-between w-full mb-10 flex-col lg:flex-row">
        <div className="w-full lg:w-3/5">
          <h2 className="text-2xl font-bold mb-2">Learning made simple by Tehmina</h2>
          <p className="text-lg text-gray-300">
            I am committed to using blogs to teach pupils computer science. I provide interesting and <b className="text-white">educational blog</b> postings on a variety of <b className="text-white">computer science</b> subjects, including <b className="text-white">coding languages</b> and machine learning algorithms. My materials are created to be approachable and simple to comprehend, making them perfect for <b className="text-white">students</b> of all levels.
          </p>
        </div>
        <div className="flex gap-4 mt-4 lg:mt-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="text-white"
          >
            <BsInstagram className="text-pink-600 text-xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="text-white"
          >
            <BsLinkedin className="text-blue-700 text-xl" />
          </a>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg w-full lg:w-2/5">
          <AiOutlineSearch className="text-xl text-white" />
          <input
            type="search"
            placeholder="Search for blogs..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm text-black"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                setActivated(index);
                setFilterString(category);
              }}
              className={`px-4 py-2 rounded-lg cursor-pointer text-sm ${
                activated === index
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200 text-blue-300"
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
