import { motion } from "framer-motion";
import { FileText, Search, FileCheck, ShieldCheck } from "lucide-react";
import React from "react";

const steps = [
  {
    id: 1,
    title: "📄 Scan ou envoie tes documents",
    description:
      "Pas d'informations personnelles demandées. Numérise ou envoie tes documents pour un traitement efficace.",
    icon: FileText,
  },
  {
    id: 2,
    title: "🔍 Analyse selon tes envies",
    description:
      "Fais analyser tes données selon les normes Asnap. Seules les données nécessaires à l'étude sont envoyées.",
    icon: Search,
  },
  {
    id: 3,
    title: "📊 Reçois un rapport détaillé",
    description:
      "Profite des rapports perspicaces générés par Asnap. Observe pourquoi tu es assuré et comment tu es couvert.",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "🛡️ Profite de solutions adaptées",
    description:
      "Découvre une protection solide, avec des normes claires, adaptée à tes besoins et économise ton argent.",
    icon: ShieldCheck,
  },
];

export default function RoadmapTimeline() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white text-gray-900 py-16 px-6">
      {/* ✅ Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
      >
        🚀 Notre plateforme en 4 étapes
      </motion.h2>

      <div className="flex flex-col items-center relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center w-3/4 max-w-lg text-center"
            >
              {/* ✅ Cercle avec effet hover */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 p-5 rounded-full shadow-xl mb-4 flex items-center justify-center transition-transform duration-300"
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* ✅ Titre et description */}
              <motion.h3 className="text-xl font-bold text-gray-800">
                {step.title}
              </motion.h3>
              <p className="text-gray-600">{step.description}</p>

              {/* ✅ Ligne de connexion animée entre les étapes */}
              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "60px" }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="w-1 bg-yellow-500 my-6"
                ></motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
