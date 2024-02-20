import { Fragment } from "react";
import hs2image from "../../assets/images/hs2.png";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
const HomeSliderTwo = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 w-full h-full panel">
        <div className="relative h-full ">
          <img className="w-full h-full " src={hs2image} />
          <div className="absolute font-semibold text-white bottom-16 left-24">
            <div className="">CLIENT NAME</div>
            <div className="text-3xl">WE CREATE </div>
            <div className="text-3xl">GAME CHANGING BRANDS</div>
            <div className="flex items-center mt-4">
              <div className="pr-3 text-yellow-500">GO TO PROJECTS</div>
              <IoChevronForwardCircleOutline />
            </div>
          </div>
          <div className="absolute flex gap-2 text-white bottom-16 right-16 ">
            <FaCircle className="h-3.5" />
            <FaCircle className="h-3.5" />
            <FaCircle className="h-3.5" />
            <FaCircle className="h-3.5" />
            <FaCircle className="h-3.5" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeSliderTwo;
