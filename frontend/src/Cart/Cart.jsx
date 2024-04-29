import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import CartMenu from "../components/CartMenu";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceDisplay from "../components/PriceDisplay";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const handleDelete = (id) => {
    let auth = localStorage.getItem("auth");

    auth = auth ? JSON.parse(auth) : {};

    const orderedBooks = auth.orderedBooks || {};

    if (orderedBooks[id] && orderedBooks[id].count > 1) {
      orderedBooks[id].count -= 1;
      toast.success("Item removed from the cart successfully!!👍", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      delete orderedBooks[id];
      toast.success("Item removed from the cart successfully!!👍", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    auth.orderedBooks = orderedBooks;

    localStorage.setItem("auth", JSON.stringify(auth));

    setCartItems(() => Object.values(orderedBooks));
  };
  useEffect(() => {
    let auth = localStorage.getItem("auth");

    auth = auth ? JSON.parse(auth) : {};

    const orderedBooks = auth.orderedBooks || {};

    setCartItems(() => Object.values(orderedBooks));
  }, []);
  return (
    <>
      <Toaster position="top" reverseOrder={true} />
      <Navbar />
      <div>
        <h1 className="text-4xl text-white font-bold mt-40 ml-16">Your Cart</h1>
      </div>
      {cartItems && cartItems.length !== 0 ? (
        <div className="text-white flex space-x-40">
          <div className="max-w-[1800px] mx-10 md:px-20 px-4  h-[800px] overflow-y-scroll scroll-smooth bg-base-200 my-24 rounded-xl border border-pink-500">
            <div className="p-10">
              {cartItems.map((item) => (
                <CartMenu
                  key={item._id}
                  items={item}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
          <div className="">
            <PriceDisplay items={cartItems} />
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <h1 className="text-4xl text-white font-normal mt-24 ml-16">
            You have no items in your cart🙃
          </h1>
          <button>
            <Link
              to="/course"
              className="btn btn-secondary text-white mt-6 ml-16"
            >
              Go for shopping 🛍️
            </Link>
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
