import Course from "./Course/Course";
import Home from "./Home/Home";
import Sign from "./Sign/Sign";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/course" element=<Course /> />
          <Route path="/sign" element=<Sign /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
