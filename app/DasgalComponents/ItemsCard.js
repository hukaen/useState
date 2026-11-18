export const ItemsCard = ({ Item }) => {
  let cardStyle = "";
  let rarityText = "";
  let buttonStyle = "";
  if (Item.rarity === "common") {
    cardStyle =
      "flex flex-col p-[20px] items-center justify-center w-full bg-slate-900 border-2 border-slate-700 rounded-[20px]";
    buttonStyle = "bg-slate-600 rounded-full py-[4px] px-[20px]";
    rarityText = "Энгийн";
  } else if (Item.rarity === "rare") {
    cardStyle =
      "flex flex-col p-[20px] items-center justify-center w-full bg-sky-950 border-2 border-sky-500 rounded-[20px]";
    buttonStyle = "bg-sky-500 rounded-full py-[4px] px-[20px]";
    rarityText = "Ховор";
  } else if (Item.rarity === "epic") {
    cardStyle =
      "flex flex-col p-[20px] items-center justify-center w-full bg-purple-950 border-2 border-purple-500 rounded-[20px]";
    buttonStyle = "bg-purple-500 rounded-full py-[4px] px-[20px]";
    rarityText = "Эпик";
  } else {
    cardStyle =
      "flex flex-col p-[20px] items-center justify-center w-full bg-amber-950 border-2 border-amber-400 rounded-[20px]";
    buttonStyle = "bg-amber-400 rounded-full py-[4px] px-[20px] text-amber-950";
    rarityText = "Домогт";
  }
  console.log(Item);
  return (
    <div className={`${cardStyle}`}>
      <h1 className="text-[40px]">{Item.emoji}</h1>
      <h1>{Item.name}</h1>
      <h1 className="text-gray-600 text-[16px]">{Item.type}</h1>
      <div className="flex justify-between w-full mt-[12px]">
        <button className={`${buttonStyle}`}>{rarityText}</button>
        <h1>⚔ {Item.power}</h1>
      </div>
    </div>
  );
};
