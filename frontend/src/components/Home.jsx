import React from "react";
import HomeImage from "../assets/Home2.jpg";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative mx-auto max-w-full">
          <img className="w-full h-auto" src={HomeImage} alt="Landing Image" />
          <div className="absolute inset-0 flex flex-col justify-left pt-4 pl-3 sm:pt-4 md:pt-4 lg:pt-12 xl:pt-20 text-blue-600">
            <div className="max-w-2xl sm:text-lg md:text-3xl lg:text-5xl xl:text-6xl sm:pl-2 md:pl-4 lg:pl-8 lg:text-left xl:text-center font-serif">
              <div>Bridging Gaps,</div>
              <div>Building Futures</div>
            </div>
            <div className="hidden sm:flex sm:max-w-60 md:max-w-72 lg:max-w-md xl:max-w-xl md:pt-1 lg:pt-4 text-left xl:text-center sm:text-sm md:text-md lg:text-xl xl:text-2xl  sm:pl-1 md:pl-2 lg:pl-6 xl:pl-14">
              At MentoringPortal, we understand the challenges faced by
              underprivileged high school students. Our mission is to bridge the
              gaps in education and opportunities by connecting you with
              dedicated mentors who are committed to your success.
            </div>
            <div className=" px-25 lg:pt-5  flex lg:justify-start xl:justify-center max-w-xl sm:pl-1 md:pl-1 lg:pl-11">
            <Link
              to="register"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-3xl text-xs sm:text-sm md:text-md lg:text-lg px-1 sm:px-1 md:px-1 lg:px-5 md:py-1 lg:py-2 mr-2 focus:outline-none"
            >
              Know More
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}