import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import UploadPdf from "./components/uploadPdf";
import Footer from "./components/Footer";
import AnalysisSection from "./components/section";
import BenchmarkResult from "./components/benchmarkresult";
import About from "./components/About"; // ✅ Ajouté ici
import "./i18n"; // Initialize i18n for multilingual support
import Contact from "./components/Contact";
import LegalNotice from "./components/Legalnotice";
// Home component for the root route
function Home() {
  return (
    <>
      <Hero />
      <AnalysisSection />
      <Footer />
    </>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/upload-pdf" element={<UploadPdf />} />
        <Route path="/benchmark-result" element={<BenchmarkResult />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Legalnotice" element={<LegalNotice />} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
