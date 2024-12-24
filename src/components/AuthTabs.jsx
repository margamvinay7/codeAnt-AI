import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { saas, selfHosted } from "../constants/data";

export default function AuthTabs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("SAAS"); // State to manage active tab

  const displayButton = useCallback(
    (button, index) => (
      <button
        className="border border-[#D8DAE5] p-3 rounded-md flex gap-4 w-[98%] md:w-[80%] justify-center hover:bg-[#E9EAEB] max-w-[446px] md:text-sm lg:text-lg"
        onClick={() => navigate("/")}
        key={index}
      >
        <img src={button.icon} alt="icon" />
        <span className="font-bold">{button.label}</span>
      </button>
    ),
    []
  );

  return (
    <div>
      {/* Tab Navigation */}
      <div className="bg-[#FAFAFA] flex border mb-8 rounded-lg mx-3 md:mx-auto md:w-[95%] max-w-[624px]">
        <button
          className={`flex-1 p-3 ${
            activeTab === "SAAS"
              ? "bg-[#1570EF] text-white"
              : "bg-white text-black hover:bg-gray-100"
          } rounded-lg`}
          onClick={() => setActiveTab("SAAS")}
        >
          SAAS
        </button>
        <button
          className={`flex-1 p-3 ${
            activeTab === "SELF_HOSTED"
              ? "bg-[#1570EF] text-white"
              : "bg-white text-black hover:bg-gray-100"
          } rounded-lg`}
          onClick={() => setActiveTab("SELF_HOSTED")}
        >
          Self Hosted
        </button>
      </div>

      <hr />

      {/* Tab Content */}
      <div className="m-6">
        {activeTab === "SAAS" && (
          <div className="flex flex-col justify-center items-center gap-3">
            {saas.map((button, index) => displayButton(button, index))}
          </div>
        )}
        {activeTab === "SELF_HOSTED" && (
          <div className="flex flex-col justify-start items-center gap-3 min-h-[280px]">
            {selfHosted.map((button, index) => displayButton(button, index))}
          </div>
        )}
      </div>
    </div>
  );
}
