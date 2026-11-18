"use client";
import { useState } from "react";

export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={`w-full h-fit p-5 flex flex-col gap-3 items-center ${isOn ? "bg-sky-950" : "bg-amber-200"} rounded-[20px]`}
    >
      <h1 className={`text-${isOn ? "white" : "black"}`}>💡 Гэрэл</h1>
      <h1 className="text-[60px]">{isOn ? "🌑" : "💡"}</h1>
      <div className="flex gap-10">
        <button
          onClick={() => {
            setIsOn(!isOn);
          }}
          className=" h-[48px] bg-amber-400 rounded-[12px]  px-[20px] text-black text-[20px]"
        >
          {isOn ? "Асаах" : "Унтраах"}
        </button>
      </div>
    </div>
  );
};
