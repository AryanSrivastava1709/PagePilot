import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hijiggi", "template_dwp9i7n", form.current, {
        publicKey: "xRv0sgTR49eb2YqxD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="max-w-[1800px] mx-auto md:px-20 px-4">
        <div className="mt-40 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-pink-500">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 mb-48">
        <form
          ref={form}
          className="border border-pink-500 px-16 pt-6 pb-20 rounded-2xl w-3/5 bg-base-200"
          onSubmit={sendEmail}
        >
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Name</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow text-white focus-within:text-white"
                placeholder="Your Name"
                name="user_name"
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Email</h2>
            <label className="input text-xl input-bordered flex items-center h-16 gap-2 text-white focus-within:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70 "
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow text-white"
                placeholder="Your Email"
                name="user_email"
              />
            </label>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-2xl mt-2 mb-4 ml-2">Email</h2>
            <label className="input text-xl input-bordered flex items-center h-24 gap-2 text-white focus-within:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-5 h-5 opacity-70 "
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
              </svg>
              <input
                type="text"
                className="grow text-white"
                placeholder="Your Message"
                name="message"
              />
            </label>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="btn btn-outline btn-secondary mr-10 mt-8"
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

export default ContactForm;
