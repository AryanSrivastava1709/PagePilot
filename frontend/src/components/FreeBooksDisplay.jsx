import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function FreeBooksDisplay() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://page-pilot-api.vercel.app/book");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const filteredData = books.filter((x) => x.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[1800px] mx-auto md:px-20 px-4 my-16">
        <div>
          <h1 className="font-semibold text-2xl text-white">Free Books</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {filteredData.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooksDisplay;
