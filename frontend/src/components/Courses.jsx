import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "./Cards";
import { useEffect, useState } from "react";
function Courses() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-[1800px] mx-auto md:px-20 px-4">
        <div className="mt-40 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Discover <span className="text-pink-500">Amazing</span> Books!!!😍
          </h1>
          <p className=" text-xl mt-10">
            Welcome to our book section! Here, you will discover a wide range of
            amazing books that will captivate your imagination and enrich your
            reading experience. From thrilling adventures to thought-provoking
            novels, our collection offers something for every book lover.
            Explore our carefully curated selection and embark on a literary
            journey like no other. Get ready to dive into the world of words and
            let the magic of books transport you to new and exciting places.
            Happy reading!
          </p>
          <button className="mt-10 btn btn-secondary text-lg text-white font-bold py-2 px-4 rounded-full">
            <Link to="/">Go to Home</Link>
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 justify-items-center align-items-center">
          {books.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
