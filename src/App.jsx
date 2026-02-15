import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Example from "./pages/example";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/example" element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;