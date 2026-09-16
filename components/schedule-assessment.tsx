"use client";

import Image from "next/image";
import { useState } from "react";
import { Info, Calendar, Clock, X, CheckCircle } from "lucide-react";

export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <>
      {/* Main Page */}
      <div className="text-white">
        <h1 className="text-3xl font-semibold text-center mb-2">
          Schedule Assessment
        </h1>

        <p className="text-center text-gray-200 mb-6">
          Register for your preferred skill assessment slot
        </p>

        <div className="space-y-8">
          {/* Message */}
          <p className="text-center text-lg">
            Great!! multiple employers have authorised you to take a skill
            assessment with SkillKwizz. Choose one. You can revisit this page
            to schedule for others
          </p>

          {/* Company Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Microsoft */}
            <button
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === "microsoft"
                  ? "border-2 border-green-500"
                  : ""
              }`}
              onClick={() => setSelectedCompany("microsoft")}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === "microsoft"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              ></span>
              Microsoft
            </button>

            {/* Google */}
            <button
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === "google"
                  ? "border-2 border-green-500"
                  : ""
              }`}
              onClick={() => setSelectedCompany("google")}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === "google"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              ></span>
              Google
            </button>

            {/* Amazon */}
            <button
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === "amazon"
                  ? "border-2 border-green-500"
                  : ""
              }`}
              onClick={() => setSelectedCompany("amazon")}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === "amazon"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              ></span>
              Amazon
            </button>
          </div>

          {/* Facebook Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === "facebook1"
                  ? "border-2 border-green-500"
                  : ""
              }`}
              onClick={() => setSelectedCompany("facebook1")}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === "facebook1"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              ></span>
              Facebook
            </button>

            <button
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === "facebook2"
                  ? "border-2 border-green-500"
                  : ""
              }`}
              onClick={() => setSelectedCompany("facebook2")}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === "facebook2"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              ></span>
              Facebook
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-6 h-6 text-white mt-1" />

            <p>
              Microsoft has authorized you to take an assessment for C#, SQL
              Server, Web2.0, and React.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Country */}
            <div>
              <label className="block mb-2">Select Country</label>

              <div className="relative">
                <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block mb-2">Select Zip Code</label>

              <div className="relative">
                <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                  <option>Enter your area's Zip code</option>
                  <option>110001</option>
                  <option>110002</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testing Centre */}
            <div>
              <label className="block mb-2">Select Testing Centre</label>

              <div className="relative">
                <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                  <option>Enter your Centre</option>
                  <option>Centre 1</option>
                  <option>Centre 2</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Second Testing Centre */}
            <div>
              <label className="block mb-2">Select Testing Centre</label>

              <div className="relative">
                <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                  <option>Enter your Centre</option>
                  <option>Centre 1</option>
                  <option>Centre 2</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block mb-2">Select a Date</label>

                <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white">
                  <input
                    type="text"
                    placeholder="MM"
                    className="w-12 bg-transparent focus:outline-none text-center"
                  />

                  <span className="mx-1">|</span>

                  <input
                    type="text"
                    placeholder="DD"
                    className="w-12 bg-transparent focus:outline-none text-center"
                  />

                  <span className="mx-1">|</span>

                  <input
                    type="text"
                    placeholder="YYYY"
                    className="w-16 bg-transparent focus:outline-none text-center"
                  />

                  <Calendar className="ml-auto w-5 h-5" />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block mb-2">Select Time</label>

                <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white">
                  <input
                    type="text"
                    placeholder="03"
                    className="w-12 bg-transparent focus:outline-none text-center"
                  />

                  <span className="mx-1">|</span>

                  <input
                    type="text"
                    placeholder="35"
                    className="w-12 bg-transparent focus:outline-none text-center"
                  />

                  <span className="mx-1">|</span>

                  <input
                    type="text"
                    placeholder="AM"
                    className="w-12 bg-transparent focus:outline-none text-center"
                  />

                  <Clock className="ml-auto w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-20 py-2 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
            
            {/* Close X */}
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 transition"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Submitted Successfully!
            </h2>

            <p className="text-gray-600 mb-6">
              Your assessment has been scheduled successfully.
            </p>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="px-10 py-2.5 rounded-lg bg-[#00418d] text-white font-medium hover:bg-[#003570] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}