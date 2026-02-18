import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Modulo_1 from "./pages/Modulo_1";
import Modulo_2 from "./pages/Modulo_2";
import Modulo_3 from "./pages/Modulo_3";
import Modulo_4 from "./pages/Modulo_4";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/modulo-1" element={<Modulo_1/>} />
          <Route path="/modulo-2" element={<Modulo_2/>} />
          <Route path="/modulo-3" element={<Modulo_3/>} />
          <Route path="/modulo-4" element={<Modulo_4/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;