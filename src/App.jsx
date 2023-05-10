import { React } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Projects,
  Experience,
  Contact,
  About,
  Error,
} from "./pages/index";

import { Navbar, Footer } from "./components/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>{/* <Navbar /> */}</div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
