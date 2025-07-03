import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import "flag-icons/css/flag-icons.min.css";

// Import des icônes
import { FaFilePdf, FaTrashAlt, FaInfoCircle, FaExclamationCircle } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const UploadPdf = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Liste des pays pour le téléphone
  const phoneCountries = [
    { value: "+33", label: "France", flagClass: "fi fi-fr" },
    { value: "+49", label: "Allemagne", flagClass: "fi fi-de" },
    { value: "+39", label: "Italie", flagClass: "fi fi-it" },
    { value: "+41", label: "Suisse", flagClass: "fi fi-ch" },
  ];

  // Composants personnalisés pour react-select
  const customOption = (props) => {
    const { innerProps, data } = props;
    return (
      <div
        {...innerProps}
        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
      >
        <span className={data.flagClass} style={{ marginRight: 8 }} />
        {data.label} ({data.value})
      </div>
    );
  };

  const customSingleValue = (props) => {
    const { innerProps, data } = props;
    return (
      <div
        {...innerProps}
        className="flex items-center"
      >
        <span className={data.flagClass} style={{ marginRight: 8 }} />
        {data.value}
      </div>
    );
  };

  // États
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneCountry, setPhoneCountry] = useState(phoneCountries[0]);
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [optionalCategories, setOptionalCategories] = useState({
    accident: false,
    naturalMedicine: false,
    travelInsurance: false,
  });
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [errors, setErrors] = useState({});

  // URL de l'API backend
  const API_URL = "https://83.228.199.223";

  // Descriptions pour les catégories optionnelles
  const descriptions = {
    accident: t("uploadPdf.descriptions.accident"),
    naturalMedicine: t("uploadPdf.descriptions.naturalMedicine"),
    travelInsurance: t("uploadPdf.descriptions.travelInsurance"),
  };

  // Gestion du changement de fichier
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setErrors((prev) => ({ ...prev, file: null }));
      toast.success(t("uploadPdf.fileSelectedToast"));
      e.target.value = "";
    } else {
      setFile(null);
      setErrors((prev) => ({ ...prev, file: t("uploadPdf.pdfOnlyToast") }));
      toast.error(t("uploadPdf.pdfOnlyToast"));
      e.target.value = "";
    }
  };

  // Suppression du fichier sélectionné
  const handleDeleteFile = (e) => {
    e.stopPropagation();
    setFile(null);
    toast.info(t("uploadPdf.fileDeletedToast"));
  };

  // Validation et envoi vers le backend
  const handleUploadFile = async () => {
    const newErrors = {};
    if (!file) newErrors.file = t("uploadPdf.errorNoFile");
    if (!email) newErrors.email = t("uploadPdf.errorNoEmail");
    if (!phone) newErrors.phone = t("uploadPdf.errorNoPhone");
    if (!agree) newErrors.agree = t("uploadPdf.errorAgree");

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("email", email);
      formData.append("phone", `${phoneCountry.value}${phone}`);
      formData.append("optional_categories", JSON.stringify(optionalCategories));

      const response = await axios.post(`${API_URL}/api/upload/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Redirection vers la page benchmark avec les données reçues
      navigate("/benchmark-result", {
        state: { benchmark: response.data.benchmark },
      });
      toast.success(t("uploadPdf.benchmarkSuccessToast"));
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier:", error);
      toast.error(t("uploadPdf.benchmarkErrorToast"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-2 min-h-screen">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-120 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10" style={{ animation: 'spin 20s linear infinite' }}></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-4xl">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -top-px overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
              style={{
                animation: 'shimmer 3s infinite',
                transform: 'translateX(-100%) skewX(12deg)'
              }}
            ></div>
          </div>

          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-3 shadow-lg">
              <FiUpload className="text-white text-xl" size={20} />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
              {t("uploadPdf.title")}
            </h2>
       
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-white/90 font-medium mb-1 text-xs uppercase tracking-wider">
              {t("uploadPdf.emailPlaceholder")}
            </label>
            <div className="relative group">
              <input
                type="email"
                placeholder={t("uploadPdf.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-3 bg-white/10 border ${
                  errors.email ? "border-red-400/50" : "border-white/20"
                } rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            {errors.email && (
              <p className="flex items-center text-red-400 text-xs mt-1 opacity-0 animate-pulse" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
                <FaExclamationCircle className="mr-1" size={12} />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone field */}
          <div className="mb-4">
            <label className="block text-white/90 font-medium mb-1 text-xs uppercase tracking-wider">
              {t("uploadPdf.phonePlaceholder")}
            </label>
            <div className="flex space-x-2">
              <div className="w-32">
                <Select
                  options={phoneCountries}
                  value={phoneCountry}
                  onChange={(option) => setPhoneCountry(option)}
                  components={{
                    Option: customOption,
                    SingleValue: customSingleValue,
                    DropdownIndicator: () => (
                      <div className="pr-2 pt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ),
                    IndicatorSeparator: () => (
                      <div className="h-5 w-[1px] bg-gray-300 mt-1" />
                    ),
                  }}
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: "44px",
                      height: "44px",
                      width: "100%",
                      borderRadius: "16px",
                      borderColor: errors.phone ? "#f87171" : "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "none",
                      "&:hover": { borderColor: "rgb(250, 204, 21)" },
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      padding: "2px 8px",
                      display: "flex",
                      alignItems: "center",
                    }),
                    indicatorsContainer: (base) => ({
                      ...base,
                      alignItems: "center",
                      padding: "4px 0",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }),
                    menu: (base) => ({
                      ...base,
                      zIndex: 20,
                      backgroundColor: "#1e293b",
                      color: "white",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#334155" : "#1e293b",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#475569",
                      },
                    }),
                  }}
                  menuPlacement="auto"
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
              <div className="flex-1 relative group">
                <input
                  type="tel"
                  placeholder={t("uploadPdf.phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-3 py-3 bg-white/10 border ${
                    errors.phone ? "border-red-400/50" : "border-white/20"
                  } rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15`}
                  inputMode="numeric"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            {errors.phone && (
              <p className="flex items-center text-red-400 text-xs mt-1 opacity-0" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
                <FaExclamationCircle className="mr-1" size={12} />
                {errors.phone}
              </p>
            )}
          </div>

          {/* File upload */}
          <div className="mb-4">
            <label className="block text-white/90 font-medium mb-1 text-xs uppercase tracking-wider">
              {t("uploadPdf.dragDrop")}
            </label>
            <div
              className={`border-2 border-dashed rounded-3xl p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                errors.file
                  ? "border-red-400/50 bg-red-400/5"
                  : "border-white/30 hover:border-yellow-400/60 hover:bg-white/5"
              }`}
              onClick={() => document.getElementById("file-input").click()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             
              {file ? (
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl">
                      <FaFilePdf className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{file.name}</p>
                      <p className="text-green-400 text-xs flex items-center mt-1">
                        <span className="mr-1">✓</span>
                        {t("uploadPdf.fileSelected")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDeleteFile}
                    className="p-1 hover:bg-red-500/20 rounded-xl transition-colors duration-200"
                    title={t("uploadPdf.deleteFile")}
                  >
                    <FaTrashAlt className="text-red-400 hover:text-red-300" size={16} />
                  </button>
                </div>
              ) : (
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FiUpload className="text-white/80" size={20} />
                  </div>
                  <p className="text-white/70 text-base">{t("uploadPdf.dragDrop")}</p>
                  <p className="text-white/50 text-xs mt-1">
                    {t("uploadPdf.clickToBrowse", "ou cliquez pour parcourir")}
                  </p>
                </div>
              )}
            </div>
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
              accept="application/pdf"
            />
            {errors.file && (
              <p className="flex items-center text-red-400 text-xs mt-1 opacity-0" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
                <FaExclamationCircle className="mr-1" size={12} />
                {errors.file}
              </p>
            )}
          </div>

          {/* Optional categories */}
          <div className="mb-4">
            <h3 className="text-white/90 font-medium mb-2 text-xs uppercase tracking-wider">
              {t("uploadPdf.optionalCategoriesTitle")}
            </h3>
            <div className="space-y-2">
              {[
                { key: "accident", label: t("uploadPdf.categories.accident") },
                {
                  key: "naturalMedicine",
                  label: t("uploadPdf.categories.naturalMedicine"),
                },
                {
                  key: "travelInsurance",
                  label: t("uploadPdf.categories.travelInsurance"),
                },
              ].map(({ key, label }) => (
                <div key={key} className="relative">
                  <div className="flex items-center p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={optionalCategories[key]}
                        onChange={() =>
                          setOptionalCategories({
                            ...optionalCategories,
                            [key]: !optionalCategories[key],
                          })
                        }
                        className="w-4 h-4 rounded border-2 border-white/30 bg-transparent checked:bg-gradient-to-r checked:from-yellow-400 checked:to-orange-500 checked:border-yellow-400 focus:ring-yellow-400/50 focus:ring-2 transition-all duration-200 appearance-none"
                      />
                      {optionalCategories[key] && (
                        <span className="absolute top-0.5 left-0.5 text-white pointer-events-none" style={{ fontSize: 10 }}>✓</span>
                      )}
                    </div>
                    <span className="text-white/90 ml-2 flex-1 text-sm">{label}</span>
                    <div className="relative">
                      <FaInfoCircle
                        className="text-white/50 hover:text-yellow-400 cursor-pointer transition-colors duration-200"
                        size={16}
                        onMouseEnter={() => setHoveredCategory(key)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      />
                      {hoveredCategory === key && (
                        <div className="absolute right-0 top-8 p-3 bg-slate-800/95 backdrop-blur-xl text-white/90 rounded-2xl shadow-2xl w-72 z-50 border border-white/10 opacity-0" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
                          <div className="absolute -top-2 right-4 w-4 h-4 bg-slate-800/95 rotate-45 border-l border-t border-white/10"></div>
                          {descriptions[key]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms agreement */}
          <div className="mb-6">
            <div className="flex items-start space-x-2 p-3 bg-white/5 rounded-2xl border border-white/10">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className={`w-4 h-4 rounded border-2 bg-transparent focus:ring-2 focus:ring-yellow-400/50 transition-all duration-200 appearance-none ${
                    errors.agree
                      ? "border-red-400/50"
                      : "border-white/30 checked:bg-gradient-to-r checked:from-yellow-400 checked:to-orange-500 checked:border-yellow-400"
                  }`}
                />
                {agree && (
                  <span className="absolute top-0.5 left-0.5 text-white pointer-events-none" style={{ fontSize: 10 }}>✓</span>
                )}
              </div>
              <span className="text-white/90 text-xs">
                {t("uploadPdf.acceptConditions.prefix")}{" "}
                <span className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer transition-colors duration-200">
                  {t("uploadPdf.acceptConditions.link")}
                </span>
              </span>
            </div>
            {errors.agree && (
              <p className="flex items-center text-red-400 text-xs mt-1 opacity-0" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
                <FaExclamationCircle className="mr-1" size={12} />
                {errors.agree}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="button"
            onClick={handleUploadFile}
            disabled={loading}
            className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-base font-bold py-3 px-6 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center space-x-2">
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>{t("uploadPdf.processing")}</span>
                </>
              ) : (
                <>
                  <FiUpload size={16} />
                  <span>{t("uploadPdf.generateBenchmark")}</span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
       
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
       
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
       
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UploadPdf; 