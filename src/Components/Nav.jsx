import { NavUl } from "./NavUl";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

export function Nav() {
  return (
    <nav className="flex gap-2 w-screen h-24 items-center text-base font-semibold ">
      <NavUl />
      <p>FOR ARTIST</p>
      <p>FOR FANS</p>
      <IoIosSearch />
      <FiShoppingCart />
    </nav>
  );
}
