import React from "react";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[30vh] select-none">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce-slow"
      >
        {/* Cup */}
        <rect
          x="14"
          y="24"
          width="36"
          height="26"
          rx="12"
          fill="#3E2723"
          stroke="#D4A574"
          strokeWidth="3"
        />
        {/* Coffee in cup */}
        <ellipse
          cx="32"
          cy="37"
          rx="13"
          ry="7"
          fill="#D4A574"
          opacity="0.8"
        />
        {/* Cup Handle */}
        <path
          d="M50 38 Q58 42 49 50"
          stroke="#D4A574"
          strokeWidth="3"
          fill="none"
        />
        {/* Steam - animated by CSS */}
        <path
          className="animate-steamOne"
          d="M24 22 Q26 18 28 22 Q30 26 32 22"
          stroke="#D4A574"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          className="animate-steamTwo"
          d="M36 22 Q38 18 40 22 Q42 26 44 22"
          stroke="#D4A574"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <span className="text-[#D4A574] mt-4 font-bold text-xl font-tajawal tracking-wider animate-pulse">جارٍ تحميل المنيو ...</span>
      <style>{`
        .animate-bounce-slow {
          animation: bounce 1.8s infinite cubic-bezier(.54,.38,.1,1.08);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-steamOne {
          animation: steamUp1 2.5s infinite ease-in-out;
        }
        .animate-steamTwo {
          animation: steamUp2 3.2s infinite ease-in-out;
        }
        @keyframes steamUp1 {
          0% { opacity: 0.7; transform: translateY(0px) scaleY(1); }
          50% { opacity: 0.25; transform: translateY(-16px) scaleY(1.15); }
          100% { opacity: 0.7; transform: translateY(0px) scaleY(1); }
        }
        @keyframes steamUp2 {
          0% { opacity: 0.4; transform: translateY(0px) scaleY(1); }
          50% { opacity: 0.12; transform: translateY(-20px) scaleY(1.11); }
          100% { opacity: 0.4; transform: translateY(0px) scaleY(1); }
        }
      `}</style>
    </div>
  );
}

export default Loader;
