import { IoIosArrowDown } from "react-icons/io";

const NavbarCenterItems = () => {
  return (
    <ul className="flex items-center justify-evenly gap-10">
      <li>
        Solutions <IoIosArrowDown className="inline" />
      </li>
      <li>Features</li>
      <li>Pricing</li>
      <li>
        Blog <IoIosArrowDown className="inline" />
      </li>
      <li>Restaurants</li>
      <li>
        Food <IoIosArrowDown className="inline" />
      </li>
    </ul>
  );
};

export default NavbarCenterItems;
