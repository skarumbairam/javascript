import { Route, Routes } from "react-router-dom";
import Component from "./components/Component";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/components" element={<Component />} />
    </Routes>
  );
}

export default App;
