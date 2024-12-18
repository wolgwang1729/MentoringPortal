import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/Login.jpeg";
import { useDispatch } from "react-redux";
import { Authorize } from "../services/auth.services";
import { login} from "../features/authSlice";

export default function Register() {


  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    desig: "student",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("")

  const desigs = ["student","mentor"]

  const registerFn = async () => {
    try {

      setErrors("");
      if (!data.email || !data.password || !data.desig || !data.fullname) {
        setErrors("Please fill all fields");
        return;
      }

      console.log(data);
      const res = await Authorize.register(data);
      console.log(res);
      dispatch(login({ data: res.data }));
      navigate("/");
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-4 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="hidden lg:w-auto lg:flex lg:rounded-tl-lg lg:rounded-bl-lg ">
            <img src={LoginImage} className="rounded-tl-lg rounded-bl-lg" alt="" />
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex items-center justify-center">
              <div className="font-serif text-lg md:text-5xl">Mentoring</div>
              <div
                className="text-3xl md:text-7xl"
                style={{ fontFamily: "'Corinthia', serif" }}
              >
                Portal
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              {errors && <h2 className="mt-4 text-bold text-red-600">{errors}</h2>}
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="mb-4 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Fullname"
                    onChange={(e) => setData(prev=>({ ...prev, fullname: e.target.value }))}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setData(prev=>({ ...prev, email: e.target.value }))}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setData(prev=>({ ...prev, password: e.target.value }))}
                  />
                  <select
                    className="w-full px-8 py-4 rounded-lg font-mono text-gray-500 font-bold bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    onChange={(e) => setData(prev=>({ ...prev, desig: e.target.value }))}
                  > 
                      {
                        desigs.map((desig) => (
                            <option key={desig} value={desig}>{desig[0].toUpperCase() + desig.substring(1)}</option>
                        ))
                      }
                  </select>
                  <button 
                  onClick={registerFn}
                  className="mt-5 tracking-wide font-semibold bg-orange-700 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign up</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by MentoringPortal's <span> </span>
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service <span> </span>
                    </a>
                    and its <span> </span>
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
