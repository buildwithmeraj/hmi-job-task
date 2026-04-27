import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-6xl font-semibold text-[#253612]">
        The Safest Way to Shop for Groceries
      </h2>
      <p className="max-w-sm mx-auto my-6 text-base-content/70">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful
        Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
      </p>
      <div className="flex items-center gap-3 justify-center">
        <button className="btn btn-primary rounded-full bg-[#3A4B2B]">
          <FaApple className="inline" size={18} />
          Download fo iOS
        </button>
        <button className="btn btn-ghost rounded-full">
          Join the Olive Community <FaArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
