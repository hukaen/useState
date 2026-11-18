"use client";
import { useState } from "react";

export const Counter = () => {
  const [point, setPoint] = useState(0);
  return (
    <div className="w-full h-fit p-5 flex flex-col gap-3 items-center bg-white rounded-[20px]">
      <h1 className="text-black">🔢 Тоолуур</h1>
      <h1 className="text-[60px] text-blue-900">{point}</h1>
      <div className="flex gap-10">
        <div
          onClick={() => {
            setPoint(point - 1);
          }}
          className="w-[48px] h-[48px] bg-blue-900 rounded-full flex justify-center items-center"
        >
          -
        </div>
        <div
          onClick={() => {
            setPoint(point + 1);
          }}
          className="w-[48px] h-[48px] bg-blue-900 rounded-full flex justify-center items-center"
        >
          +
        </div>
      </div>
    </div>
  );
};
