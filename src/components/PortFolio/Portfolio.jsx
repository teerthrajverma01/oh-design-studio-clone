import { Fragment } from "react";

import { IoChevronForwardCircleOutline } from "react-icons/io5";

import p1 from "../../assets/images/portfolio/01.jpg";
import p2 from "../../assets/images/portfolio/03.jpg";
import p3 from "../../assets/images/portfolio/06.jpg";
import p4 from "../../assets/images/portfolio/07.jpg";
const Portfolio = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 w-full h-full overflow-clip panel">
        <div className="w-full h-full ">
          <div className="grid h-full grid-cols-3 grid-rows-2 ">
            <div className="">
              <img className="object-fill w-full h-full" src={p1} alt="" />
            </div>
            <div className="">
              <img className="w-full h-full" src={p2} alt="" />
            </div>
            <div className="">
              <img className="w-full h-full" src={p3} alt="" />
            </div>
            <div className="">
              <img className="w-full h-full" src={p4} alt="" />
            </div>

            <div className="bg-gray-200">
              <div className="flex flex-col items-center justify-center h-full ">
                <div className="pb-2 text-xs font-bold ">CLIENT NAME</div>
                <div className="text-2xl font-semibold text-gray-500">
                  WE CREATE
                </div>
                <div className="text-2xl font-semibold text-gray-500">
                  GAME CHANGING BRANDS
                </div>
                <div className="pt-8 text-xs font-bold text-gray-500">
                  BRAND IDENTITY + SPACE DESIGN
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col m-8">
                <div className="text-4xl font-semibold text-gray-500">
                  PROJECTS TO BE DISCUSSED HERE
                </div>
                <div className="mt-4 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  ad laboriosam nostrum eligendi similique placeat porro magni,
                  ipsa fugiat.
                </div>
                <div className="flex items-center mt-8 font-semibold">
                  <div className="pr-3 text-black">VIEW ALL PROJECTS</div>
                  <IoChevronForwardCircleOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
