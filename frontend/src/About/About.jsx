import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function About() {
  return (
    <>
      <NavBar />
      <div className="text-white">
        <div className="mt-40 mx-16 h-[500px] flex flex-col">
          <h1 className="text-4xl text-pink-500 font-bold">About Us</h1>
          <p className="mt-10 text-lg">
            PagePilot is a cutting-edge book store web application designed to
            revolutionize the way people discover, explore, and purchase their
            favorite books. With a sleek and intuitive user interface, PagePilot
            offers a seamless browsing experience, allowing users to
            effortlessly navigate through a vast collection of literary
            masterpieces.
          </p>
          <p className="mt-10 text-lg">
            At PagePilot, we understand the importance of personalized
            recommendations. Our advanced recommendation engine analyzes user
            preferences, reading history, and popular trends to curate tailored
            book suggestions. Whether you're a fan of gripping thrillers,
            heartwarming romances, or thought-provoking non-fiction, PagePilot
            ensures that you never run out of captivating reads.
          </p>
          <p className="mt-10 text-lg">
            Experience the future of book shopping with PagePilot. Discover,
            explore, and indulge in the joy of reading like never before. Join
            our community of book lovers and embark on a literary adventure that
            will captivate your imagination and expand your horizons.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
