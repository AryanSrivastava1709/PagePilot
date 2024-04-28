import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function Sign() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    //console.log(userData); for test purpose
    await axios
      .post("https://page-pilot-api.vercel.app/user/signup", userData)
      .then((res) => {
        console.log(res.data);

        if (res.status === 201) {
          toast.success(
            "User registered successfully!!😍 Now please login yourself",
            {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            }
          );
          setTimeout(() => {
            navigate("/"); // Redirect to home page
          }, 2000); // Delay of 2 seconds
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      });
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-radial">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border bg-base-200 px-20 pt-6 pb-36 rounded-2xl"
        >
          <div className="mt-6">
            <h2 className="text-white text-xl mt-2 mb-4 ml-2">Name</h2>
            <input
              {...register("fullname", { required: true })}
              type="text"
              placeholder="Name"
              className=" input input-bordered w-full"
            />
            {errors.fullname && (
              <div className=" mt-3 text-lg text-red-500">
                Enter your name!!
              </div>
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-white text-xl mt-2 mb-4 ml-2">Email</h2>
            <label className="input input-bordered flex items-center gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                {...register("email", { required: true })}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            {errors.email && (
              <div className=" mt-3 text-lg text-red-500">
                Enter your email!!
              </div>
            )}
          </div>
          <div className=" my-6">
            <h2 className="text-white text-xl mb-4 ml-2">Password</h2>
            <label className="input input-bordered flex items-center gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                {...register("password", { required: true })}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            {errors.name && (
              <div className=" mt-3 text-lg text-red-500">
                Enter your password!!
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button className="btn btn-outline btn-secondary mr-10">
              Sign in
            </button>
            <p className="text-white">
              Have an account?{" "}
              <span className="text-blue-400 cursor-pointer">
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Sign;
