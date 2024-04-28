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
        <Link to="/" className="hover:text-pink-400">
          Home
        </Link>
      </li>
      <li>
        <Link to="/course" className="hover:text-pink-400">
          Books
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-pink-400">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-pink-400">
          About
        </Link>
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
            <div>
              {authUser && (
                <div>
                  <Link to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fill="#ffffff"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
