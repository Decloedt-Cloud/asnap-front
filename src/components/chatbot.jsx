import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaAngleDown, FaCommentDots } from "react-icons/fa";

const ClaimsChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome to Asnap! How can I assist you today?" },
  ]);

  const chatBodyRef = useRef(null); // Reference for auto-scroll

  const CLAIMS_RESPONSES = {
   "how to have an benchmark analyse": 
      "To get a benchmark analysis, upload your insurance file 📄. Our AI will analyze your policy and provide a comparison of your coverage, helping you understand your protection level. 🚀",
    "customer support": "You can contact us at 📧 clients@asnap.ch or call 📞 +41 22 345 6789.",
    "health": "For a health claim, please provide your policy number and treatment details.",
    "accident": "For an accident claim, please provide the date, location, and a brief description of the incident.",
    "travel": "For a travel claim, mention your destination and issue (e.g., medical, lost luggage).",

  };

  const QUESTION_OPTIONS = ["Accident", "Health", "Customer Support","travel","How to have an benchmark analyse"];

  const handleUserSelection = (question) => {
    setMessages([...messages, { sender: "user", text: question }]);

    setTimeout(() => {
      const botReply = CLAIMS_RESPONSES[question.toLowerCase()] || "I didn't quite understand. Can you rephrase?";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 1000);
  };

  // Scroll to the latest message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 transition-all">
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600"
          >
            <FaCommentDots className="text-black text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-80 bg-white border border-gray-300 rounded-xl shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-yellow-500 text-black rounded-t-xl">
              <div className="flex items-center space-x-2">
                <FaRobot className="text-xl" />
                <h2 className="text-lg font-bold">Asnap Claims</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-xl">
                <FaAngleDown />
              </button>
            </div>

            {/* Chat Body */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 h-64 overflow-y-auto bg-gray-100 text-black"
              ref={chatBodyRef} // Attach ref to enable auto-scroll
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.sender === "bot" ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center my-2 ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                >
                  {msg.sender === "bot" && <FaRobot className="text-yellow-500 text-xl mr-2" />}
                  <p className={`px-3 py-2 rounded-lg max-w-xs ${msg.sender === "bot" ? "bg-yellow-500 text-black" : "bg-gray-800 text-yellow-400"}`}>
                    {msg.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Question Options */}
            <div className="p-3 bg-gray-200 border-t border-gray-300 rounded-b-xl flex flex-wrap gap-2">
              {QUESTION_OPTIONS.map((question, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleUserSelection(question)}
                  className="px-4 py-2 bg-yellow-500 text-black rounded-lg text-sm hover:bg-yellow-600 transition duration-300"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClaimsChatbot;
