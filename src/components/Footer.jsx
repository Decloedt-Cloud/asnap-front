import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-4">

      <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('footer.contact')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <span>{t('footer.address1')}</span>
            <span>{t('footer.address2')}</span>
            <span>
              {t('footer.infoLabel')}{" "}
              <a 
                href="mailto:info@asnap" 
                className="text-yellow-400 hover:underline"
              >
                {t('footer.infoEmail')}
              </a>
            </span>
            <span>
              {t('footer.clientServiceLabel')}{" "}
              <a 
                href="mailto:clients@asnap.ch" 
                className="text-yellow-400 hover:underline"
              >
                {t('footer.clientServiceEmail')}
              </a>
            </span>
          </div>
          
    
        </div>
        {/* Section liens légaux */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 border-b border-gray-700 pb-6">
          <Link to="/about" className="text-yellow-400 hover:underline">
            {t('about.title')}
          </Link>
          <Link to="/contact" className="text-yellow-400 hover:underline">
            {t('contact.heroTitle')}
          </Link>
          <Link to="/Legalnotice" className="text-yellow-400 hover:underline">
            {t('legal.title')}
          </Link>
        </div>

        {/* Section contact */}

      </div>
      <div className="mt-6 text-gray-400 flex justify-center">
  © {new Date().getFullYear()} āsnap
</div>
    </footer>
  );
};

export default Footer;