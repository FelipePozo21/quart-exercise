import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import classname from "classnames";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../../icons/logo.svg";

export function NavUl() {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="relative flex gap-2 h-max justify-center items-center"
      onClick={() => {
        if (toggle === true) {
          setToggle(false);
          console.log(toggle);
        }
      }}
    >
      <img className="w-10 ml-8 mr-2 cursor-pointer pr-2" src={Logo} />
      <div className="relative">
        <p onClick={toggleState} className="select-none flex items-center">
          DISCOVER MUSIC
          <span className="pl-2">
            <IoIosArrowDown
              className={classname(
                "transform transition-transform duration-500",
                {
                  "-rotate-180": toggle,
                }
              )}
            />
          </span>
        </p>
        {toggle ? (
          <ul className="absolute top-5 z-20 text-white bg-black px-2 py-4 mb-2">
            <li className="cursor-pointer py-2 px-4" value="Records">
              Records
            </li>
            <li className="cursor-pointer py-2 px-4" value="Cassettes">
              Cassettes
            </li>
            <li className="cursor-pointer py-2 px-4" value="Stories">
              Stories
            </li>
            <li className="cursor-pointer py-2 px-4" value="Qrates Curated">
              Qrates Curated
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
      <p>FOR ARTIST</p>
      <p>FOR FANS</p>
      <IoIosSearch size={30} />
      <FiShoppingCart size={20} />
    </div>
  );
}
