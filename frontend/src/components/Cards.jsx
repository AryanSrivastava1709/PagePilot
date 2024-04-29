import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Cards({ item }) {
  const [isToasted, setIsToasted] = useState(false);
  const handleBuy = async () => {
    let auth = localStorage.getItem("auth");
    auth = auth ? JSON.parse(auth) : {};
    auth.orderedBooks = auth.orderedBooks || {};
    if (auth.orderedBooks[item._id]) {
      auth.orderedBooks[item._id].count += 1;
      setIsToasted(true);
      toast.success("Added to Cart👍", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsToasted(false);
    } else {
      auth.orderedBooks[item._id] = { ...item, count: 1 };
      setIsToasted(true);
      toast.success("Added to Cart👍", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsToasted(false);
    }
    localStorage.setItem("auth", JSON.stringify(auth));
  };

  return (
    <>
      {isToasted && <Toaster position="top" reverseOrder={true} />}
      <div className="mt-10">
        <div className="card w-96 bg-base-100 shadow-xl text-white">
          <figure className="h-96">
            <img
              src={item.image}
              alt="Books"
              className="object-fill h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end ">
              <div className="badge text-white border-white">{item.genre}</div>
              <div className="badge text-white border-white">{item.type}</div>
            </div>
            <div className="card-actions justify-between items-end">
              <button
                className="btn hover:bg-pink-500 text-white text-md"
                onClick={handleBuy}
              >
                Buy Now
              </button>
              <div className="text-xl font-semibold">₹{item.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
