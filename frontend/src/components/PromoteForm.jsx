import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PromoteForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const bookData = new FormData();
    bookData.append("name", data.name);
    bookData.append("description", data.description);
    bookData.append("price", data.price);
    bookData.append("category", data.category);
    bookData.append("image", data.image[0]); // assuming image is a File object
    bookData.append("genre", data.genre);
    bookData.append("type", data.type);
    // console.log(bookData); for test purpose
    await axios
      .post("https://page-pilot-api.vercel.app/book/create", bookData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          toast.success("Book promoted successfully!!😍", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
        setTimeout(() => {
          navigate("/course");
        }, 1500);
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
      <Toaster position="top" reverseOrder={true} />
      <div className="max-w-[1800px] mx-auto md:px-20 px-4">
        <div className="mt-40 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-pink-500">
            Promote Your Book
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
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Book Name"
                {...register("name", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Description</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Description"
                {...register("description", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Price</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Category</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Category"
                {...register("category", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Image</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                type="file"
                className="file-input file-input-bordered grow text-white focus-within:text-white"
                {...register("image", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Genre</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Genre"
                {...register("genre", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Book Type</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <input
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Book Type"
                {...register("type", { required: true })}
              />
            </label>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="btn btn-outline btn-secondary mr-10 mt-8 text-md"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PromoteForm;
