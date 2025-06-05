import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-16 py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden min-h-[80vh]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            right: `${mousePosition.x * 0.015}%`,
            bottom: `${mousePosition.y * 0.015}%`,
          }}
        ></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto gap-8 lg:gap-12">
        
        {/* Left Content */}
        <div 
          className={`flex flex-col items-center lg:items-start text-center lg:text-left flex-1 transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
   <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight mb-6">
      <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
        {t('hero.analyzePdf')}
      </span>
      <br />
      <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
        {t('hero.withAI')}
      </span>
    </h1>
          
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300 max-w-xl mb-8">
          {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              className="group relative px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
       
            >
              <span className="relative z-10 text-sm md:text-base">    {t('hero.startNow')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
      
            <button className="px-6 md:px-8 py-3 border border-purple-400/50 text-purple-200 font-semibold rounded-full backdrop-blur-sm hover:bg-purple-400/10 transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base">
            {t('hero.learnMore')}
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div 
          className={`relative flex items-center justify-center flex-1 max-w-sm lg:max-w-md transition-all duration-1200 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          {/* Floating Decorative Elements - PDF & AI themed */}
          <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl opacity-80 animate-bounce flex items-center justify-center" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 18h12V6l-4-4H4v16zm8-14v3h3l-3-3z"/>
            </svg>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 animate-bounce flex items-center justify-center" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="absolute top-1/3 -right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-60 animate-bounce flex items-center justify-center" style={{ animationDelay: '2s', animationDuration: '3s' }}>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          {/* Main Content Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            
            {/* Main Card */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-105 transition-all duration-500">
              
              {/* Card Header */}
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                {/* Content Lines avec icônes PDF et IA */}
                <div className="space-y-3 md:space-y-4 flex-1">
                  {/* PDF Icon Line */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 18h12V6l-4-4H4v16zm8-14v3h3l-3-3z"/>
                      </svg>
                    </div>
                    <div className="h-3 md:h-4 bg-gradient-to-r from-red-400 to-transparent rounded flex-1 animate-pulse"></div>
                  </div>
                  
                  {/* AI Icon Line */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="h-3 md:h-4 bg-gradient-to-r from-blue-400 to-transparent rounded flex-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Processing Line */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </div>
                    <div className="h-3 md:h-4 bg-gradient-to-r from-purple-400 to-transparent rounded flex-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Interactive Elements - Simulation PDF + IA */}
                  <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
                    {/* PDF Upload Simulation */}
                    <div className="h-10 md:h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg group-hover:from-red-500/50 group-hover:to-red-600/50 transition-all duration-500 flex items-center px-3">
                      <div className="flex items-center gap-2 opacity-70">
                        <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 18h12V6l-4-4H4v16zm8-14v3h3l-3-3z"/>
                        </svg>
                        <span className="text-xs text-gray-300">document.pdf</span>
                      </div>
                    </div>
                    
                    {/* IA Processing Simulation */}
                    <div className="h-10 md:h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg group-hover:from-blue-500/50 group-hover:to-purple-600/50 transition-all duration-500 delay-100 flex items-center px-3">
                      <div className="flex items-center gap-2 opacity-70">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-xs text-gray-300">IA Analysis...</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-4 md:mt-6 flex justify-center">
                  <div className="w-20 md:w-24 h-8 md:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Side Elements */}
          <div className="absolute top-1/4 -right-6 md:-right-8">
            <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-purple-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="absolute bottom-1/4 -left-6 md:-left-8">
            <div className="w-1 h-10 md:h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-pink-400 to-transparent rounded-full mt-2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;