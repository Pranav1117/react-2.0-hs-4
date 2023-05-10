import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Student from "../Components/Student";

function RouteCompo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteCompo;
