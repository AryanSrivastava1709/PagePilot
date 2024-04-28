import { useAuth } from "../Context/AuthProvider";
import Course from "./Course/Course";
import Home from "./Home/Home";
import Sign from "./Sign/Sign";
import Contact from "./Contact/Contact";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About/About";
function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/sign" />}
          />
          <Route path="/sign" element=<Sign /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/about" element=<About /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
