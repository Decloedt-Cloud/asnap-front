import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">{t('footer.contact')}</h2>
        <div className="flex flex-wrap justify-center items-center space-x-6">
          <span>{t('footer.address1')}</span>
          <span>{t('footer.address2')}</span>
          <span>
            {t('footer.infoLabel')}{" "}
            <a href="mailto:info@asnap" className="text-yellow-400 hover:underline">
              {t('footer.infoEmail')}
            </a>
          </span>
          <span>
            {t('footer.clientServiceLabel')}{" "}
            <a href="mailto:clients@asnap.ch" className="text-yellow-400 hover:underline">
              {t('footer.clientServiceEmail')}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
