import React from "react";
import Card1 from "./Card/Card1";

export default function MentorConnect() {
  return (
    <div className="min-h-screen text-gray-900 mb-6 justify-center items-center">
      <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mb-8 mx-2 md:mx-16 mt-4">
        <h1 className="font-serif text-xl sm:text-3xl font-bold mb-4">
          Mentor Connect
        </h1>
        <p className="font-serif sm:text-xl text-center max-w-5xl">
          Connect with our esteemed mentors from various domain and expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center px-4 lg:mx-24">
        <Card1 />
      </div>
    </div>
  );
}
