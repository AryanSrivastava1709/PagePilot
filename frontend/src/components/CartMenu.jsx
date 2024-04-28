function CartMenu({ items, handleDelete }) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-10">
        <figure>
          <img src={items.image} alt="Books Image" className="h-60 w-full" />
        </figure>
        <div className="card-body p-10 flex">
          <h2 className="card-title">{items.name}</h2>
          <p>₹ {items.price}</p>
          <div className="card-actions justify-start">
            <div className="badge text-white border-white">{items.genre}</div>
            <div className="badge text-white border-white">{items.type}</div>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn mt-5 bg-red-500 text-white hover:bg-red-700"
              onClick={() => handleDelete(items._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartMenu;
