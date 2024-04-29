import { Link } from "react-router-dom";
import HeroBanner from "./../../src/assets/banner_hero.png";
function Hero() {
  return (
    <>
      <div className="max-w-[1800px] mx-auto md:px-20 px-4 flex flex-col md:flex-row md:space-x-14 my-10 text-white">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
              😁
            </h1>
            <p className=" text-xl">
              Welcome to our book store! We offer a wide range of books on
              various topics. Whether you're looking for fiction, non-fiction,
              self-help, or educational books, we have it all. Explore our
              collection and start your reading journey today!
            </p>
            <button className="btn btn-secondary text-white">
              <Link to="/course">Browse Books</Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 mt-10 md:mt-20 overflow-hidden">
          <img src={HeroBanner} className=" w-[750px] h-[600px]"></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
