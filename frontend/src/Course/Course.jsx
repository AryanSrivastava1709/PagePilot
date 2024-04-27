import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

function Course() {
  return (
    <>
      <Navbar />
      <div className=" text-white">
        <Courses />
      </div>
      <Footer />
    </>
  );
}

export default Course;
