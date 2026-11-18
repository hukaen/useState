import { Counter } from "./Component/Counter";
import { LightSwitch } from "./Component/LightSwitch";
import { SecretMessage } from "./Component/SecretMessage";

export default function Home() {
  return (
    <section className="flex flex-col mt-[40px] items-center gap-5 text-[32px] font-bold">
      <h1>UseState</h1>
      <div className="flex gap-5 w-[1200px]">
        <Counter />
        <LightSwitch />
        <SecretMessage />
      </div>
    </section>
  );
}
