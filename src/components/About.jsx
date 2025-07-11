import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  // Liste des domaines d'assurance pour la grille
  const insuranceDomains = [
    t('about.insuranceDomains.naturalMedicine'),
    t('about.insuranceDomains.hospitalization'),
    t('about.insuranceDomains.travel'),
    t('about.insuranceDomains.outpatient'),
    t('about.insuranceDomains.accident'),
    t('about.insuranceDomains.dental')
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
              {t('about.title')}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-12">
          {/* Card 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                {t('about.card1.title')}
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                {t('about.card1.content')}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                {t('about.card2.title')}
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                {t('about.card2.content')}
              </p>
            </div>
          </div>

          {/* Card 3 with 3D Grid */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                {t('about.card3.title')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {insuranceDomains.map((item, index) => (
                  <div key={index} className="group/item relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-lg blur-sm group-hover/item:blur-md transition-all duration-300"></div>
                    <div className="relative backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                      <span className="text-sm font-medium text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                {t('about.contact.title')}
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                {t('about.contact.text')}
                <a 
                  href="mailto:contact@asnap.com" 
                  className="ml-2 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text hover:from-purple-300 hover:to-cyan-300 font-semibold transition-all duration-300 hover:scale-105 inline-block"
                >
                 clients@asnap.ch
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 text-center">
          <div className="inline-block w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default About;