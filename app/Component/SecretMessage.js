"use client";

import { useState } from "react";

export const SecretMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="w-full p-5 flex flex-col gap-3 items-center bg-white rounded-[20px] text-black">
      <h1>🔒 Нууц мессеж</h1>
      <h1 className="text-[60px]">{isVisible ? "🔓" : "🔒"}</h1>
      <div className="flex gap-10">
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className=" h-[48px] bg-purple-600 rounded-[12px] w-[100px] px-[20px] text-[20px] text-white"
        >
          {isVisible ? "Нуух" : "Харах"}
        </button>
      </div>
      {isVisible && (
        <h1 className="text-[16px] text-zinc-600 mt-5">Нууц гээд байхаддаа</h1>
      )}
    </div>
  );
};
