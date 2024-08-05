"use client";
import Image from "next/image";
import { useState } from "react";
import { tabs } from "@/constants/tabs";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("Languages");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section>
      <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">
        Technologies
      </h3>
      <div className="flex flex-wrap items-center justify-start space-x-4 md:space-x-8 mt-4">
        {tabs.map((link) => (
          <button key={link.id} className={`text-sm font-medium transition-colors duration-300 ${activeTab === link.name ? "text-white" : "text-white/30"}`} onClick={() => handleTabClick(link.name)}>
            {link.name}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tabs
          .filter((tab) => tab.name === activeTab)
          .map((tab) => (
            <div key={tab.id} className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {tab.items.map((item, index) => (
                <div key={index} className="rounded-lg p-2.5 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850 flex items-center space-x-1.5">
                  <div className="w-5 h-5 text-white/60">{item.icon}</div>
                  <p className="text-white/60 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
