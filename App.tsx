import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import Avukatlar from "./pages/Avukatlar";
import Iletisim from "./pages/Iletisim";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/avukatlar" element={<Avukatlar />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


