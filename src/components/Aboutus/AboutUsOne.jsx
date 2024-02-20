import { Fragment } from "react";
import au1 from "../../assets/images/au1.png";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const AboutUsOne = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 w-full h-full overflow-hidden panel">
        <div className="grid w-full h-full grid-cols-4 bg-yellow-300 ">
          <div className="col-span-3">
            <div className="flex flex-col flex-wrap justify-center mx-16 mt-16 mb-12 ">
              <div className="mb-10 text-5xl font-semibold text-gray-400">
                Character is a branding and design agency with studios in New
                York and San Francisco.
              </div>
              <div className="mr-[35%] mb-12 ">
                Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen
                the digital landscape change dramatically. Our industry has
                transformed, our clients businesses and their challenges have
                become more complex, consumer behavior has shifted, and we, as a
                company, have evolved with those changes along with it.
              </div>
              <div className="flex items-center mt-4 font-semibold">
                <div className="pr-3 text-black">ABOUT US</div>
                <IoChevronForwardCircleOutline />
              </div>
            </div>
          </div>
          <div className="w-full h-full col-span-1 justify-self-end">
            <img src={au1} className="object-contain w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsOne;
