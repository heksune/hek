"use client";
import Image from "next/image";
import { useState } from "react";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tab1 = [{ name: "JavaScript" }];

  const tab2 = [{ name: "HTML" }, { name: "CSS" }, { name: "Markdown" }];

  const tab3 = [
    { name: "React" },
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "Express" },
    { name: "Tailwind CSS" },
  ];

  const tab4 = [{ name: "MongoDB" }];

  return (
    <section>
      <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">
        Technologies
      </h3>
      <div className="flex items-center justify-start space-x-8 mt-4">
        <button
          className={`text-sm font-medium ${
            activeTab === "tab1" ? "text-white" : "text-white/30"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Languages
        </button>
        <button
          className={`text-sm font-medium ${
            activeTab === "tab2" ? "text-white" : "text-white/30"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Markup Languages
        </button>
        <button
          className={`text-sm font-medium ${
            activeTab === "tab3" ? "text-white" : "text-white/30"
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Frames
        </button>
        <button
          className={`text-sm font-medium ${
            activeTab === "tab4" ? "text-white" : "text-white/30"
          }`}
          onClick={() => setActiveTab("tab4")}
        >
          Databases
        </button>
        <button
          className={`text-sm font-medium ${
            activeTab === "tab5" ? "text-white" : "text-white/30"
          }`}
          onClick={() => setActiveTab("tab5")}
        >
          Services
        </button>
        <button
          className={`text-sm font-medium ${
            activeTab === "tab6" ? "text-white" : "text-white/30"
          }`}
          onClick={() => setActiveTab("tab6")}
        >
          Others
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "tab1" && (
          <div className="grid grid-cols-5 gap-3">
            {tab1.map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-2.5 border-neutral-800 border-[1px] bg-neutral-850 "
              >
                <p className="text-white/60 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="grid grid-cols-5 gap-3">
            {tab2.map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-2.5 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850"
              >
                <p className="text-white/60 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="grid grid-cols-5 gap-3">
            {tab3.map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-2.5 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850"
              >
                <p className="text-white/60 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
