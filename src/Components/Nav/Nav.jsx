import { NavUl } from "./NavUl";
import { LogInButtons } from "./LogIn";

export function Nav() {
  return (
    <nav className="flex gap-2 w-screen h-24 justify-between  items-center text-base font-semibold ">
      <NavUl />
      <LogInButtons />
    </nav>
  );
}
