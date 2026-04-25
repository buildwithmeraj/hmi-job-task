import { FaArrowRight } from "react-icons/fa6";

const NavbarEndItems = () => {
  return (
    <div className="flex items-center gap-4">
      <a>Sign in</a>
      <button className="btn btn-primary rounded-full bg-[#3A4B2B]">
        Get Drive <FaArrowRight className="inline" />
      </button>
    </div>
  );
};

export default NavbarEndItems;
