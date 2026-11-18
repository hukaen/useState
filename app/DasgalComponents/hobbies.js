export const hobbies = (hobby) => {
  return (
    <div className="w-full h-[100px] felx felx-col justify-center text-center p-6 bg-emerald-900 rounded-[20px]">
      <h1>{hobby.icon}</h1>
      <p> {hobby.title} </p>
      <p> {hobby.reason}</p>
    </div>
  );
};
