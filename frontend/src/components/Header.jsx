import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RiBarChartHorizontalFill } from "@remixicon/react";
import { Authorize } from "../services/auth.services";
import { logout } from "../features/authSlice";
import { useState } from "react";

export default function Header() {
  const status = useSelector((state) => state.auth.status);

  const userData = useSelector((state) => state.auth.data);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutFn = async () => {
    try {
      await Authorize.logout();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="mr-3 h-8 lg:h-12" alt="Logo" />
            </Link>
            <Link to="/" className="flex items-center">
              <div className="font-serif text-xl sm:text-3xl md:text-3xl">
                Mentoring
              </div>
              <div
                className="text-3xl sm:text-3xl md:text-5xl"
                style={{ fontFamily: "'Corinthia', serif" }}
              >
                Portal
              </div>
            </Link>
          </div>
          <div className=" hidden sm:flex items-center lg:order-2">
            {status ? (
              <button
                className="text-white font-bold px-4 py-1 bg-blue-400 rounded-md"
                onClick={logoutFn}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs sm:text-sm px-1 sm:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs sm:text-sm px-1 sm:px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Resources
                </NavLink>
              </li>
              {/* <li>
                                <NavLink
                                    to='/events'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Events
                                </NavLink>
                            </li> */}
              <li>
                <NavLink
                  to="/q&a"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Q&A
                </NavLink>
              </li>
              {status && userData.type === "student" && (
                <li>
                  <NavLink
                    to="/my-queries"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    My-Queries
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/mentor-connect"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Mentor Connect
                </NavLink>
              </li>
              {status && (
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          {/* 3 Dashes */}
          <div className="sm:hidden">
            <div className="flex items-center lg:order-2">
              <button
                className="text-gray-800 focus:ring-4 focus:ring-gray-300 hover:bg-gray-50 px-2 rounded-md focus:outline-none"
                onClick={toggleMenu}
              >
                &#9776; {/* Three dashes icon */}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:hidden`}
          id="mobile-menu-2"
        >
          <ul className="bg-blue-50 rounded-lg text-lg flex flex-col mt-4 mb-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/q&a"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Q&A
              </NavLink>
            </li>
            {status && userData.type === "student" && (
              <li>
                <NavLink
                  to="/my-queries"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  My-Queries
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/mentor-connect"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Mentor Connect
              </NavLink>
            </li>
            {status && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="w-full hidden sm:flex sm:justify-center lg:hidden ">
          <ul className="flex items-center justify-center text-xs sm:text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Resources
              </NavLink>
            </li>
            {/* <li>
                                <NavLink
                                    to='/events'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Events
                                </NavLink>
                            </li> */}
            <li>
              <NavLink
                to="/q&a"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Q&A
              </NavLink>
            </li>
            {status && userData.type === "student" && (
              <li>
                <NavLink
                  to="/my-queries"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  My-Queries
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/mentor-connect"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Mentor Connect
              </NavLink>
            </li>
            {status && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* Mobile Login Register */}
        <div className={`sm:hidden flex ${status ? 'justify-center' : 'justify-between'} items-center`}>
          {status ? (
            <button
              className="text-white text-sm font-medium px-4 py-1 bg-blue-400 rounded-lg"
              onClick={logoutFn}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
