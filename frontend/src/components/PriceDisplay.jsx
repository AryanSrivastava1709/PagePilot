function PriceDisplay({ items }) {
  return (
    <>
      <div className="text-white">
        <div className="mx-10 px-4 max-h-[500px] w-[500px] scroll-smooth bg-base-200 my-24 rounded-xl border border-pink-500">
          <div className="mt-10 mx-10">
            {items.map((item) => (
              <div
                key={item._id}
                className="flex flex-row justify-between py-3"
              >
                <p>
                  {item.name} X {item.count}
                </p>
                <p>₹ {item.price}</p>
              </div>
            ))}
          </div>
          <div className="mx-10 mb-6 border-t border-pink-500">
            <div className="flex flex-row justify-between py-3">
              <p>Total</p>
              <p>
                ₹{" "}
                {items.reduce((acc, item) => acc + item.price * item.count, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceDisplay;
