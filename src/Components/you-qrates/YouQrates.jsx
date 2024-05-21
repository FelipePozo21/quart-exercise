import { You } from "./You/You";
import { Qrates } from "./Qrates/Qrates";

export function YouQrates() {
  return (
    <div className="w-screen h-[5200px] flex">
      <You />
      <Qrates />
    </div>
  );
}
