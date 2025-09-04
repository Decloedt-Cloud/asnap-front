import React, { useEffect } from 'react';
import { 
  Shield, Lock, Eye, FileText, Clock, Mail, MapPin, 
  User, Server, Cookie, RefreshCw, Info
} from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Animation pour les sections
    const animateSections = () => {
      const sections = document.querySelectorAll('.policy-section');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }, 150 * index);
      });
    };

    animateSections();
    
    // Effet de particules flottantes
    const particlesContainer = document.querySelector('.floating-particles');
    if (particlesContainer) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1.5 h-1.5 bg-white/20 rounded-full';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `pulse ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`;
        particlesContainer.appendChild(particle);
      }
    }

    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  // Données pour les sections de la politique de confidentialité
  const policySections = [
    {
      title: t('privacy.introduction.title'),
      icon: Info,
      gradient: 'from-cyan-300 to-purple-300',
      bgGradient: 'from-cyan-600/20 to-purple-600/20',
      content: t('privacy.introduction.content')
    },
    {
      title: t('privacy.about.title'),
      icon: User,
      gradient: 'from-purple-300 to-pink-300',
      bgGradient: 'from-purple-600/20 to-pink-600/20',
      content: t('privacy.about.content')
    },
    {
      title: t('privacy.dataCollected.title'),
      icon: Eye,
      gradient: 'from-pink-300 to-cyan-300',
      bgGradient: 'from-pink-600/20 to-cyan-600/20',
      content: (
        <>
          <p className="mb-3">{t('privacy.dataCollected.content.intro')}</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.dataCollected.content.identification" components={{ strong: <strong /> }} /></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.dataCollected.content.documents" components={{ strong: <strong /> }} /></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.dataCollected.content.technical" components={{ strong: <strong /> }} /></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.dataCollected.content.usage" components={{ strong: <strong /> }} /></span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: t('privacy.purposes.title'),
      icon: FileText,
      gradient: 'from-cyan-300 to-indigo-300',
      bgGradient: 'from-cyan-600/20 to-indigo-600/20',
      content: (
        <>
          <p className="mb-3">{t('privacy.purposes.content.intro')}</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.purposes.content.analysis')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.purposes.content.improvement')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.purposes.content.support')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.purposes.content.compliance')}</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: t('privacy.storage.title'),
      icon: Server,
      gradient: 'from-indigo-300 to-purple-300',
      bgGradient: 'from-indigo-600/20 to-purple-600/20',
      content: t('privacy.storage.content')
    },
    {
      title: t('privacy.sharing.title'),
      icon: Shield,
      gradient: 'from-purple-300 to-pink-300',
      bgGradient: 'from-purple-600/20 to-pink-600/20',
      content: t('privacy.sharing.content')
    },
    {
      title: t('privacy.retention.title'),
      icon: Clock,
      gradient: 'from-pink-300 to-cyan-300',
      bgGradient: 'from-pink-600/20 to-cyan-600/20',
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.retention.content.contact" components={{ strong: <strong /> }} /></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.retention.content.documents" components={{ strong: <strong /> }} /></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 mr-2"></span>
              <span><Trans i18nKey="privacy.retention.content.technical" components={{ strong: <strong /> }} /></span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: t('privacy.rights.title'),
      icon: Lock,
      gradient: 'from-cyan-300 to-indigo-300',
      bgGradient: 'from-cyan-600/20 to-indigo-600/20',
      content: (
        <>
          <p className="mb-3">{t('privacy.rights.content.intro')}</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.rights.content.access')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.rights.content.restriction')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.rights.content.portability')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 mr-2"></span>
              <span>{t('privacy.rights.content.consent')}</span>
            </li>
          </ul>
          <p className="mt-4">
            <Trans
              i18nKey="privacy.rights.content.contact"
              components={[<a href="mailto:clients@asnap.ch" className="ml-1 text-cyan-300 hover:text-cyan-200 transition-colors" />]}
            />
          </p>
        </>
      )
    },
    {
      title: t('privacy.cookies.title'),
      icon: Cookie,
      gradient: 'from-indigo-300 to-purple-300',
      bgGradient: 'from-indigo-600/20 to-purple-600/20',
      content: (
        <Trans
          i18nKey="privacy.cookies.content"
          components={[<a href="#" className="text-cyan-300 hover:text-cyan-200 transition-colors" />]}
        />
      )
    },
    {
      title: t('privacy.updates.title'),
      icon: RefreshCw,
      gradient: 'from-purple-300 to-pink-300',
      bgGradient: 'from-purple-600/20 to-pink-600/20',
      content: t('privacy.updates.content')
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
      
      {/* Floating Particles */}
      <div className="floating-particles absolute inset-0 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              {t('privacy.title')}
            </h1>
            <div className="h-1 w-40 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {policySections.map((section, index) => (
            <div 
              key={index}
              className="policy-section group relative opacity-0 transform translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${section.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                    {section.title}
                  </h2>
                </div>
                <div className="text-gray-200 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="group relative mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  {t('privacy.contactSection.title')}
                </h2>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                {t('privacy.contactSection.content')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">
                      {t('privacy.contactSection.technicalSupport.label')}
                    </p>
                    <a href={`mailto:${t('privacy.contactSection.technicalSupport.email')}`} className="text-gray-200 hover:text-purple-300 transition-colors">
                      {t('privacy.contactSection.technicalSupport.email')}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-300">
                      {t('privacy.contactSection.dataProtection.label')}
                    </p>
                    <a href={`mailto:${t('privacy.contactSection.dataProtection.email')}`} className="text-gray-200 hover:text-cyan-300 transition-colors">
                      {t('privacy.contactSection.dataProtection.email')}
                    </a>
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 text-center">
          <div className="inline-block w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          <p className="text-gray-400 mt-6 text-sm">
            <Trans i18nKey="privacy.footer.copyright" values={{ year: new Date().getFullYear() }} />
          </p>
        </div>
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;