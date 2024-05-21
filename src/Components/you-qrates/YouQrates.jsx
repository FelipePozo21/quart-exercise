import { You } from "./You/You";
import { Qrates } from "./Qrates/Qrates";

export function YouQrates() {
  return (
    <div className="w-screen h-[4600px] flex">
      <You />
      <Qrates />
    </div>
  );
}
