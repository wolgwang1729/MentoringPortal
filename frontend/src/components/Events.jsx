import React from "react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <>
      <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mx-4 md:mx-16 mt-4">
        <h1 className="font-serif text-3xl font-bold mb-4">Events</h1>
        <p className="font-serif sm:text-xl text-center max-w-5xl">
          Stay updated with the latest mentoring events and activities
          happening.
        </p>
        <div className="flex items-center lg:order-2 mt-5 gap-6">
          <Link
            to="/login"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm md:text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Attend an Event
          </Link>
          <Link
            to="/login"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm md:text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Register for an Event
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full p-4 py-6 bg-white text-black lg:py-8">
        <div className="md:flex md:justify-between flex-col">
          <div className="flex flex-col px-8 my-8">
            <h2 className="font-serif mb-6 text-3xl text-orange-800">
              2025 National Mentoring Summit
            </h2>

            <div className="text-gray-600 flex flex-col gap-4 px-8">
              <div>
                The 2025 National Mentoring Summit will take place from January
                29 to 31, 2025, at The Westin Washington, DC Downtown. This
                annual event, convened by MENTOR during National Mentoring
                Month, aims to unite mentoring practitioners, researchers, and
                youth leaders to drive positive change for young people. The
                summit will feature a Youth Track specifically designed for
                young people aged 18-22, focusing on personal and professional
                growth through specialized workshops and networking
                opportunities.
              </div>

              <div>
                Key sessions will include discussions on building a workforce
                through mentoring and exploring specialized mentoring models to
                serve diverse populations. This event is an excellent
                opportunity for those involved in mentoring high school students
                to learn and connect with others in the field.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
