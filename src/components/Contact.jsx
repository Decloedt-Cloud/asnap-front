import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Shield, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
              {t('contact.heroTitle')}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
        
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t('contact.heroDescription')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                {t('contact.formTitle')}
              </h2>
              <p className="text-gray-300 mb-8">
                {t('contact.formDescription')}
              </p>

              {isSubmitted ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      {t('contact.successTitle')}
                    </h3>
                    <p className="text-gray-300">
                      {t('contact.successMessage')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group/input relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.formLabels.name')}
                        className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover/input:bg-white/15"
                      />
                    </div>
                    <div className="group/input relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.formLabels.email')}
                        className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover/input:bg-white/15"
                      />
                    </div>
                  </div>
                  <div className="group/input relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={t('contact.formLabels.subject')}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover/input:bg-white/15"
                    />
                  </div>
                  <div className="group/input relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      placeholder={t('contact.formLabels.message')}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 group-hover/input:bg-white/15 resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="group/btn w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>{t('contact.sendButton')}</span>
                  </button>
                </div>
              )}

              {/* Confidentiality Notice */}
              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-green-400">
                    {t('contact.confidentiality.title')}
                  </span>
                </div>
                <p className="text-sm text-gray-300">
                  {t('contact.confidentiality.text')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                  {t('contact.contactInfoTitle')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {t('contact.contactMethods.email')}
                      </p>
                      <a href="mailto:info@asnap" className="text-purple-300 hover:text-purple-200 transition-colors duration-300">
                      info@asnap
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {t('contact.contactMethods.phone')}
                      </p>
                      <p className="text-gray-300">
                        {t('contact.contactInfoPlaceholders.phone')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {t('contact.contactMethods.address')}
                      </p>
                      <p className="text-gray-300">
                        {t('contact.contactInfoPlaceholders.address')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Request */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  {t('contact.demoRequestTitle')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('contact.demoDescription')}
                </p>
                <button className="group/btn w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>{t('contact.scheduleButton')}</span>
                </button>
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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Contact;