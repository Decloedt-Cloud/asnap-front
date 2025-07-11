import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Building, Server, Shield, Cookie, AlertTriangle, 
  Mail, MapPin, FileText, Eye, Lock, Clock 
} from "lucide-react";

const LegalNotice = () => {
  const { t } = useTranslation();
  
  // Données pour les sections juridiques
  const legalSections = [
    {
      title: t('legal.sections.editor.title'),
      icon: Building,
      gradient: "from-purple-300 to-cyan-300",
      bgGradient: "from-purple-600/20 to-cyan-600/20",
      content: [
        { label: t('legal.sections.editor.content.name'), value: t('legal.sections.editor.values.name') },
        { label: t('legal.sections.editor.content.legalForm'), value: t('legal.sections.editor.values.legalForm') },
        { label: t('legal.sections.editor.content.address'), value: t('legal.sections.editor.values.address') },
        { label: t('legal.sections.editor.content.registration'), value: t('legal.sections.editor.values.registration') },
        { label: t('legal.sections.editor.content.website'), value: t('legal.sections.editor.values.website') }
      ]
    },
    {
      title: t('legal.sections.host.title'),
      icon: Server,
      gradient: "from-cyan-300 to-pink-300",
      bgGradient: "from-cyan-600/20 to-pink-600/20",
      content: [
        { label: t('legal.sections.host.content.name'), value: t('legal.sections.host.values.name') },
        { label: t('legal.sections.host.content.address'), value: t('legal.sections.host.values.address') },
        { label: t('legal.sections.host.content.phone'), value: t('legal.sections.host.values.phone') },
        { label: t('legal.sections.host.content.website'), value: t('legal.sections.host.values.website') }
      ]
    }
  ];

  // Données pour les sections textuelles
  const textSections = [
    {
      title: t('legal.sections.intellectualProperty.title'),
      icon: FileText,
      gradient: "from-pink-300 to-purple-300",
      bgGradient: "from-pink-600/20 to-purple-600/20",
      content: t('legal.sections.intellectualProperty.content')
    },
    {
      title: t('legal.sections.personalData.title'),
      icon: Shield,
      gradient: "from-purple-300 to-indigo-300",
      bgGradient: "from-purple-600/20 to-indigo-600/20",
      content: t('legal.sections.personalData.content'),
      details: [
        { icon: Eye, text: t('legal.sections.personalData.details.collected') },
        { icon: FileText, text: t('legal.sections.personalData.details.purpose') },
        { icon: Clock, text: t('legal.sections.personalData.details.retention') },
        { icon: Lock, text: t('legal.sections.personalData.details.rights') }
      ]
    },
    {
      title: t('legal.sections.cookies.title'),
      icon: Cookie,
      gradient: "from-indigo-300 to-cyan-300",
      bgGradient: "from-indigo-600/20 to-cyan-600/20",
      content: t('legal.sections.cookies.content')
    },
    {
      title: t('legal.sections.liability.title'),
      icon: AlertTriangle,
      gradient: "from-cyan-300 to-pink-300",
      bgGradient: "from-cyan-600/20 to-pink-600/20",
      content: t('legal.sections.liability.content')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-88 h-88 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
              {t('legal.title')}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('legal.description')}
          </p>
        </div>

        {/* Legal Information Cards */}
        <div className="space-y-12">
          {/* Company and Host Info */}
          {legalSections.map((section, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${section.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <span className="font-semibold text-purple-300 sm:w-1/3 mb-2 sm:mb-0">{item.label} :</span>
                      <span className="text-gray-200 sm:w-2/3">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Text Sections */}
          {textSections.map((section, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${section.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  {section.content}
                </p>
                {section.details && (
                  <div className="grid gap-3">
                    {section.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <detail.icon className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{detail.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  {t('legal.contact.title')}
                </h2>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                {t('legal.contact.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">
                      {t('legal.contact.infoLabel')} :
                    </p>
                    <a href="mailto:info@asnap.ch" className="text-gray-200 hover:text-purple-300 transition-colors duration-300">
                      info@asnap.ch
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-300">
                      {t('legal.contact.clientServiceLabel')} :
                    </p>
                    <a href="mailto:clients@asnap.ch" className="text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                      clients@asnap.ch
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pink-300">
                      {t('legal.contact.addressLabel')} :
                    </p>
                    <p className="text-gray-200">
                      {t('legal.contact.address')}
                    </p>
                  </div>
                </div>
              </div>
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
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LegalNotice;