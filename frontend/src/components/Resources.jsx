import React from "react";
import { Link } from "react-router-dom";
import ResourcesCard from "./Card/ResourcesCard";

export default function Resources() {
  return (
    <>
      <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mx-4 md:mx-16 mt-4">
        <h1 className="font-serif text-3xl font-bold mb-4">Resources</h1>
        <p className="font-serif sm:text-xl text-center max-w-5xl">
          Stay updated with the latest Resources.
        </p>
      </div>

      <ResourcesCard/>

    </>
  );
}
