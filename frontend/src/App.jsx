import { useAuth } from "../Context/AuthProvider";
import Course from "./Course/Course";
import Home from "./Home/Home";
import Sign from "./Sign/Sign";
import Contact from "./Contact/Contact";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Cart from "./Cart/Cart";
import BookSell from "./Course/BookSell";
import EditPage from "./Edit Page/EditPage";
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
          <Route
            path="/course/promote"
            element={authUser ? <BookSell /> : <Navigate to="/sign" />}
          />
          <Route path="/sign" element=<Sign /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/about" element=<About /> />
          <Route
            path="/cart"
            element={authUser ? <Cart /> : <Navigate to="/" />}
          />
          <Route
            path="/edit"
            element={authUser ? <EditPage /> : <Navigate to="/sign" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
