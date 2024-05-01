import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

function EditPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fullname: "", email: "", address: "" });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      setUser(JSON.parse(data));
    }
    return () => setUser({ fullname: "", email: "", address: "" });
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const updatedData = {
      fullname: data.fullname,
      email: data.email,
      address: data.address,
    };
    console.log(updatedData);
    let existingData = JSON.parse(localStorage.getItem("auth"));
    existingData = { ...existingData, ...updatedData };
    localStorage.setItem("auth", JSON.stringify(existingData));
    await axios
      .post(
        `https://page-pilot-api.vercel.app/user/edit/${existingData._id}`,
        updatedData
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Details updated successfully!!😍", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          toast.error(err.message, {
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
      <Toaster position="top" reverseOrder={true} />
      <NavBar />
      <div className="max-w-[1800px] mx-auto md:px-20 px-4">
        <div className="mt-40 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-pink-500">
            Edit Details
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 mb-48">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-pink-500 px-16 pt-6 pb-20 rounded-2xl w-3/5 bg-base-200"
        >
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Name</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                defaultValue={user.fullname}
                onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Your Name"
                {...register("fullname", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Email</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                defaultValue={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Address</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                defaultValue={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Your Address"
                {...register("address", { required: true })}
              />
            </label>
          </div>

          <div className="flex items-center">
            <button
              className="btn btn-outline btn-secondary mr-3 mt-8 text-md"
              type="submit"
            >
              Save Changes
            </button>
            <button
              className="btn btn-outline btn-error mr-10 mt-8 text-md"
              type="button"
            >
              <Link to="/">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditPage;
