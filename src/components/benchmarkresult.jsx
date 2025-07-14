import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BenchmarkReport = () => {
  const { t } = useTranslation(); // Hook to access translation function
  const location = useLocation();
  const navigate = useNavigate();
  const benchmark = location.state?.benchmark || {};

  // Function to determine badge color class based on score
  const getBadgeColorClass = (color) => {
    switch (color.toLowerCase()) {
      case "vert":
      case "green":
        return "bg-green-500";
      case "jaune":
      case "yellow":
        return "bg-yellow-500";
      case "rouge":
      case "red":
        return "bg-red-500";
      case "orange":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  // Function to translate overall medal (using translation keys)
  const translateOverallMedal = (medal) => {
    return t(`benchmarkReport.medals.${medal.toLowerCase()}`, medal);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 min-h-screen">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-120 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10"
          style={{ animation: "spin 20s linear infinite" }}
        ></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-4xl">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -top-px overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
              style={{
                animation: "shimmer 3s infinite",
                transform: "translateX(-100%) skewX(12deg)",
              }}
            ></div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
              <span className="text-white text-2xl" style={{ fontSize: "28px" }}>
                📊
              </span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              {t("benchmarkReport.title")}
            </h2>
            <p className="text-gray-300/80">{t("benchmarkReport.description")}</p>
          </div>

          {/* Overall score */}
          <div className="mb-8">
            <h3 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wider">
              {t("benchmarkReport.overallScore")}
            </h3>
            <div className="flex items-center justify-center">
              <span
                className={`text-lg font-bold px-4 py-2 rounded-full ${
                  benchmark.final_score === "Gold"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
                    : benchmark.final_score === "Silver"
                    ? "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800"
                    : "bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100"
                }`}
              >
                {translateOverallMedal(benchmark.final_score)}
              </span>
            </div>
          </div>

          {/* Category details */}
          <div className="mb-8">
            <h3 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wider">
              {t("benchmarkReport.categoryDetails")}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="border border-white/10 px-4 py-2 text-left text-white/90 font-medium text-sm uppercase tracking-wider">
                      {t("benchmarkReport.category")}
                    </th>
                    <th className="border border-white/10 px-4 py-2 text-left text-white/90 font-medium text-sm uppercase tracking-wider">
                      {t("benchmarkReport.evaluation")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {benchmark.detailed_scores &&
                    Object.entries(benchmark.detailed_scores).map(([category, score]) => (
                      <tr
                        key={category}
                        className="hover:bg-white/10 transition-all duration-300"
                      >
                        <td className="border border-white/10 px-4 py-2 font-medium text-white/90">
                          {category}
                        </td>
                        <td className="border border-white/10 px-4 py-2">
                          <div className="flex items-center justify-start">
                            <div
                              className={`w-4 h-4 rounded-full ${getBadgeColorClass(
                                score.color
                              )}`}
                            ></div>
                            <span className="ml-2 font-medium text-white/90 capitalize">
                              {score.color.toLowerCase()}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/upload-pdf/")}
              className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center space-x-2">
                <span>{t("benchmarkReport.analyzeAnother")}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(200%) skewX(12deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

export default BenchmarkReport;