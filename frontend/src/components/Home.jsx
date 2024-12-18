import React from "react";
import HomeImage from "../assets/Home2.jpg";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative mx-auto max-w-full">
          <img className="w-full h-auto" src={HomeImage} alt="Landing Image" />
          <div className="absolute inset-0 flex flex-col justify-left pt-20 text-blue-600">
            <div className="max-w-2xl text-6xl text-center font-serif">
              <div>Bridging Gaps,</div>
              <div>Building Futures</div>
            </div>
            <div className="max-w-xl pt-4 text-center text-2xl pl-14">
              At MentoringPortal, we understand the challenges faced by
              underprivileged high school students. Our mission is to bridge the
              gaps in education and opportunities by connecting you with
              dedicated mentors who are committed to your success.
            </div>
            <div className=" px-25 pt-5  flex justify-center max-w-xl pl-11">
            <Link
              to="register"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-3xl text-lg px-4 lg:px-5 py-2 lg:py- mr-2 focus:outline-none"
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