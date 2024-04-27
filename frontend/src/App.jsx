import { useAuth } from "../Context/AuthProvider";
import Course from "./Course/Course";
import Home from "./Home/Home";
import Sign from "./Sign/Sign";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
