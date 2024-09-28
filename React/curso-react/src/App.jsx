import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home"; // Importando o componente Home corretamente
import Aboutus from "./components/Aboutus"; // Importando o componente Aboutus
import Contactus from "./components/Contactus"; // Importando o componente Contactus


function App() {
  // 1) Colocamos o BrowserRouter
  // 2) Dentro do BrowserRouter colocamos o componente Routes e dentro dele fazemos uma rota Route
  // O primeiro path é da raiz, página inicial e o elemento que queremos que seja renderizado.
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para Home */}
          <Route path="/aboutus" element={<Aboutus />} /> {/* Rota para About Us */}
          <Route path="/contact" element={<Contactus />} /> {/* Rota para Contact Us */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
