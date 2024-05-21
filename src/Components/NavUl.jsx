import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import classname from "classnames";

export function NavUl() {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="relative w-screen"
      onClick={() => {
        if (toggle === true) {
          setToggle(false);
          console.log(toggle);
        }
      }}
    >
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
        <ul className="absolute text-white bg-black px-2 py-4 mb-2">
          <li className="py-2 px-4" value="Records">
            Records
          </li>
          <li className="py-2 px-4" value="Cassettes">
            Cassettes
          </li>
          <li className="py-2 px-4" value="Stories">
            Stories
          </li>
          <li className="py-2 px-4" value="Qrates Curated">
            Qrates Curated
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
