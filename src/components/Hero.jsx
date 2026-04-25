import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-6xl font-[500] text-[#253612]">
        The Safest Way to Shop for Groceries
      </h2>
      <p className="max-w-xl mx-auto my-12">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful
        Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
      </p>
      <div className="flex items-center gap-6 justify-center">
        <button className="btn btn-primary rounded-full bg-[#3A4B2B]">
          <FaApple className="inline" size={18} />
          Download fo iOS
        </button>
        <button>
          Join the Olive Community <FaArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
