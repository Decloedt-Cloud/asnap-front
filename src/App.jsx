import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import UploadPdf from "./components/uploadPdf";
import Footer from "./components/Footer";
import RoadmapTimeline from "./components/RoadmapTimeline";
import AnimatedTestimonials from "./components/ui/animated-testimonials";
import { FaRobot } from "react-icons/fa"; 
import ClaimsChatbot from "./components/chatbot";
import Services from "./components/services";
import "flag-icons/css/flag-icons.min.css";
import "./i18n";
import AnalysisSection from "./components/section";
import BenchmarkResult from "./components/benchmarkresult";
import { Helmet } from "react-helmet";

function Home() {
  const testimonials = [
    {
      quote: "asnap a simplifié le suivi de mes assurances...",
      name: "Nicolas Dubois, Neuchâtel",
      designation: "Product Manager ",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote: "La transparence des contrats est une priorité...",
      name: "Michael Rodriguez",
      designation: "CTO ",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    },
    {
      quote: "Je recommande vivement asnap pour gérer les assurances...",
      name: "Marc Lenièvre",
      designation: "Operations Director",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Asnap - Simplifiez votre assurance</title>
        <meta
          name="description"
          content="Asnap vous aide à analyser, comparer et gérer vos assurances de manière intelligente et centralisée."
        />
        <meta name="keywords" content="assurance, analyse, benchmark, comparaison, asnap, pdf, santé, assurance santé" />
        <meta property="og:title" content="Asnap - Simplifiez votre assurance" />
        <meta property="og:description" content="Asnap vous aide à comparer facilement vos assurances." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asnap-front.vercel.app/" />
        <meta property="og:image" content="https://asnap-front.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asnap - Simplifiez votre assurance" />
        <meta name="twitter:description" content="Asnap vous aide à comparer facilement vos assurances." />
        <meta name="twitter:image" content="https://asnap-front.vercel.app/og-image.jpg" />
      </Helmet>

      <Hero />
      <AnalysisSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/upload-pdf" element={<UploadPdf />} />
        <Route path="/benchmark-result" element={<BenchmarkResult />} />
        <Route path="/uploadPdf" element={<Navigate to="/upload-pdf" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
