import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

// Constantes pour les liens
const LINKS = [
  { name: "", href: "/" },
  { name: "", href: "/road" },
];

const BUTTON_CLASSES =
  "px-5 py-2 bg-[#FFBF23] text-black rounded-md font-medium hover:bg-yellow-500 transition duration-300";

const LINK_CLASSES =
  "text-gray-700 hover:text-[#FFBF23] transition duration-300 font-medium";

const MENU_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

// Liste des langues avec flag‑icons
const LANGUAGES = [
  { code: "it", name: "Italien", flagClass: "fi fi-it" },
  { code: "fr", name: "Français", flagClass: "fi fi-fr" },
  { code: "en", name: "Anglais", flagClass: "fi fi-gb" },
  { code: "de", name: "Allemand", flagClass: "fi fi-de" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Initialisation de la langue sélectionnée selon i18n ou par défaut en français
  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[1]
  );

  const handleGetStarted = () => {
    navigate("/upload-pdf");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Lorsqu'une langue est sélectionnée dans le dropdown, on met à jour l'état et on change la langue de l'application
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("language", lang.code);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[84%] mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={handleLogoClick}
        >
          Assurance<span className="text-[#FFBF23]">IA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link) => (
            <a key={link.name} href={link.href} className={LINK_CLASSES}>
              {t(link.name)}
            </a>
          ))}
        </div>

        {/* Actions à droite */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Bouton Get Started */}
          <button onClick={handleGetStarted} className={BUTTON_CLASSES}>
            {t("getStarted")}
          </button>

          {/* Dropdown de sélection de langue */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100"
            >
              <span className={`${selectedLanguage.flagClass} w-5 h-5`}></span>
              <span className="text-gray-700 font-medium">
                {selectedLanguage.code.toUpperCase()}
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg border border-gray-200 rounded-md overflow-hidden">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className="flex items-center px-4 py-2 w-full hover:bg-gray-100 transition duration-200"
                  >
                    <span className={`${lang.flagClass} w-5 h-5 mr-2`}></span>
                    <span className="text-gray-700">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {MENU_ICON}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {LINKS.map((link) => (
              <a key={link.name} href={link.href} className={LINK_CLASSES}>
                {t(link.name)}
              </a>
            ))}
            <button
              onClick={handleGetStarted}
              className={`${BUTTON_CLASSES} text-center`}
            >
              {t("getStarted")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
