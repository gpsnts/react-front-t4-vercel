import React from "react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Biznet</span>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Your Business
          </a>
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Networking
          </a>
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
