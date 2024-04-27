import { Link } from "react-router-dom";
import Login from "./Login/Login";
import { AuthContext, useAuth } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useContext } from "react";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogin = () => {
    const intitalAuthUser = localStorage.getItem("auth");
    if (intitalAuthUser) {
      setAuthUser(JSON.parse(intitalAuthUser));
    }
  };
  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("auth");
      toast.success("Logout Successfully!!😢", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      toast.error("Please login first!!🙃", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  const navItems = (
    <>
      <li>
        <a href="/" className="hover:text-pink-400">
          Home
        </a>
      </li>
      <li>
        <a href="/course" className="hover:text-pink-400">
          Books
        </a>
      </li>
      <li>
        <a href="/contact" className="hover:text-pink-400">
          Contact
        </a>
      </li>
      <li>
        <a href="/about" className="hover:text-pink-400">
          About
        </a>
      </li>
    </>
  );
  return (
    <>
      <Toaster position="top" reverseOrder={true} />
      <div className="w-full bg-base-200 fixed inset-x-0 top-0 mx-auto md:px-8 px-2 z-50 shadow-md shadow-pink-500/80 text-white">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl cursor-pointer font-bold text-pink-500">
              PagePilot
            </a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <label className=" input input-secondary flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <a
                onClick={
                  authUser
                    ? handleLogout
                    : () => {
                        document.getElementById("my_modal_2").showModal();
                      }
                }
                className={`btn  ${
                  authUser ? "hover:bg-red-500" : "hover:bg-blue-500"
                } text-white`}
              >
                {authUser ? "Logout" : "Login"}
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
