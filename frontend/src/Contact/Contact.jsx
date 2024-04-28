import NavBar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <NavBar />
      <div className="text-white">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
