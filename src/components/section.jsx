import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function AnalysisSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="max-w-4xl mx-auto my-16 p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl border border-gray-300 transform transition-all duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-labelledby="analysis-title"
    >
      <h2
        id="analysis-title"
        className="text-4xl font-extrabold text-gray-900 mb-8 text-center drop-shadow-md"
      >
        {t('analysis.sectionTitle')}
      </h2>

      <div className="bg-white p-6 border-l-8 border-blue-600 shadow-lg rounded-xl transform transition hover:scale-105">
        <p className="text-gray-800 leading-relaxed text-lg mb-4">
          {t('analysis.content')}
        </p>
        <p className="text-gray-800 leading-relaxed text-lg">
          {t('analysis.premiumNote')}
        </p>
      </div>

      <p className="text-gray-800 mt-8 text-lg text-center">
        <span className="font-semibold text-gray-900">{t('analysis.futureLabel')}</span>{' '}
        {t('analysis.futureNote')}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-8">
        <a
          href="/premium-report" // Remplacer par le lien réel vers le rapport complet
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center text-lg font-semibold shadow-lg transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          aria-label={t('analysis.buttonText')}
        >
          {t('analysis.buttonText')} <ArrowRight className="ml-3" size={24} aria-hidden="true" />
        </a>
      </div>
    </motion.section>
  );
}

export default AnalysisSection;