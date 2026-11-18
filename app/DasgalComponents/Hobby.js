export const Hobby = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold">Hobby</h1>
        <div className=" w-[1200px] h-[100px] flex justify-between items-center gap-5">
          <div className="w-full h-[100px] felx felx-col justify-center items-center text-center p-6 bg-emerald-900 rounded-[20px]">
            <h1>🏔️</h1>
            <p> Уланд алхах </p>
          </div>
          <div className="w-full h-[100px] felx felx-col justify-center items-center text-center p-6 bg-emerald-900 rounded-[20px]">
            <h1>🎨</h1>
            <p> Canvas art </p>
          </div>
          <div className="w-full h-[100px] felx felx-col justify-center items-center text-center p-6 bg-emerald-900 rounded-[20px]">
            <h1>📸</h1>
            <p> Гоё газрын зураг дарах </p>
          </div>
          <div className="w-full h-[100px] felx felx-col justify-center text-center p-6 bg-emerald-900 rounded-[20px]">
            <h1>🍵</h1>
            <p> Matcha latte </p>
          </div>
        </div>
      </div>
    </section>
  );
};
