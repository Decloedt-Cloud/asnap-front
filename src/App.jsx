import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Navigate } from "react-router-dom";
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
      quote: "asnap a simplifié le suivi de mes assurances. Leur système convivial permet de soumettre facilement les demandes en ligne. Aujourd'hui les délais de traitement ont considérablement diminué",
      name: "Nicolas Dubois, Neuchâtel",
      designation: "Product Manager ",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote: "La transparence des contrats est une priorité pour moi. Avec asnap, j'ai trouvé une solution qui répond complètement  à mes attentes. Leurs rapports sont clairs et facilement compréhensibles",
      name: "Michael Rodriguez",
      designation: "CTO ",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Je recommande vivement asnap pour gérer les assurances. J'ai consolidé toutes mes couvertures en visualisant tout en un seul endroit. Leur équipe du support client est exceptionnelle",
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
        <meta
          name="keywords"
          content="assurance, analyse, benchmark, comparaison, asnap, pdf, santé, assurance santé"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Asnap - Simplifiez votre assurance" />
        <meta
          property="og:description"
          content="Asnap vous aide à comparer facilement vos assurances."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asnap-front88-ihm1.vercel.app/" />
        <meta
          property="og:image"
          content="https://asnap-front88-ihm1.vercel.app/og-image.jpg"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asnap - Simplifiez votre assurance" />
        <meta
          name="twitter:description"
          content="Asnap vous aide à comparer facilement vos assurances."
        />
        <meta
          name="twitter:image"
          content="https://asnap-front88-ihm1.vercel.app/og-image.jpg"
        />
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
        {/* Chemin racine */}
        <Route index element={<Home />} />
        
        {/* Chemins en minuscules et kebab-case */}
        <Route path="/upload-pdf" element={<UploadPdf />} />
        <Route path="/benchmark-result" element={<BenchmarkResult />} />
        
        {/* Redirection pour les anciennes URLs */}
        <Route path="/uploadPdf" element={<Navigate to="/upload-pdf" replace />} />
        
        {/* Gestion des routes inconnues */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
