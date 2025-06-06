import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import UploadPdf from "./components/uploadPdf";
import Footer from "./components/Footer";
import AnalysisSection from "./components/section";
import BenchmarkResult from "./components/benchmarkresult";
import "./i18n"; // Initialize i18n for multilingual support

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;