import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import AcademicOffer from "./pages/offer/AcademicOffer";
import PresencialModality from "./pages/offer/PresencialModality";
import VirtualModality from "./pages/offer/VirtualModality";
import Admissions from "./pages/admissions/Admissions";
import AdmissionsPresencial from "./pages/admissions/AdmissionsPresencial";
import AdmissionsVirtual from "./pages/admissions/AdmissionsVirtual";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/oferta-academica" element={<AcademicOffer />} />
          <Route path="/oferta-academica/modalidad-presencial" element={<PresencialModality />} />
          <Route path="/oferta-academica/modalidad-virtual" element={<VirtualModality />} />
          <Route path="/admisiones" element={<Admissions />} />
          <Route path="/admisiones/presencial" element={<AdmissionsPresencial />} />
          <Route path="/admisiones/virtual" element={<AdmissionsVirtual />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
