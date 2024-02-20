import { useRef, Fragment } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutUsTwo = () => {
  const container = useRef();

  const onMouseEnter = (className) => {
    const tl = gsap.timeline();

    tl.to(`.${className} `, { opacity: 1 })
      .to(
        `.${className} .line`,
        {
          scaleX: 18, // Increase the width of the line to ten times on hover
          transformOrigin: "right center",
          ease: "none",
          opacity: 1,
          duration: 0.3, // Keep the same duration for line animation
        },
        0
      ) // Start at the same time as previous animation
      .to(
        `.${className} .number`,
        {
          x: -72,
          ease: "none",
          opacity: 1,
          duration: 0.3, // Keep the same duration for number animation
        },
        0
      ); // Start at the same time as previous animation
  };

  const onMouseLeave = (className) => {
    const tl = gsap.timeline();
    tl.to(`.${className} `, { opacity: 0.5 });
    tl.to(`.${className} .line`, { scaleX: 1, duration: 1, opacity: 0 }, 0); // Revert line width to original size
    tl.to(`.${className} .number`, { x: 0, duration: 1 }, 0); // Revert number position to original
  };

  return (
    <Fragment>
      <div ref={container} className="flex-shrink-0 w-full h-full panel">
        <div className="w-full h-full bg-yellow-300 ">
          <div className="p-16">
            <div className="grid grid-cols-11">
              <div className="col-span-2 ">
                <div className="pr-12 text-xl font-medium text-right text-gray-500 ">
                  Capabilities
                </div>
              </div>
              <div ref={container} className="col-span-6 pl-4 text-gray-500 ">
                <div className="flex flex-col gap-16 pl-20">
                  {/* 1st */}
                  <div className="flex opacity-50 first">
                    <div className="number">01</div>
                    <div className="font-extrabold opacity-0 line size-1">
                      -
                    </div>
                    <div
                      className="pl-8 text-5xl font-semibold cursor-pointer"
                      onMouseEnter={() => onMouseEnter("first")}
                      onMouseLeave={() => onMouseLeave("first")}
                    >
                      Branding & Design
                    </div>
                  </div>
                  {/* 2nd */}
                  <div className="flex opacity-50 second">
                    <div className="number">02</div>
                    <div className="font-extrabold opacity-0 line size-1">
                      -
                    </div>
                    <div
                      className="pl-8 text-5xl font-semibold cursor-pointer"
                      onMouseEnter={() => onMouseEnter("second")}
                      onMouseLeave={() => onMouseLeave("second")}
                    >
                      Packaging Design
                    </div>
                  </div>
                  {/* 3rd */}
                  <div className="flex opacity-50 third">
                    <div className="number">03</div>
                    <div className="font-extrabold opacity-0 line size-1">
                      -
                    </div>
                    <div
                      className="pl-8 text-5xl font-semibold cursor-pointer"
                      onMouseEnter={() => onMouseEnter("third")}
                      onMouseLeave={() => onMouseLeave("third")}
                    >
                      Digital Marketing
                    </div>
                  </div>
                  {/* 4th */}
                  <div className="flex opacity-50 fourth">
                    <div className="number">04</div>
                    <div className="font-extrabold opacity-0 line size-1">
                      -
                    </div>
                    <div
                      className="pl-8 text-5xl font-semibold cursor-pointer"
                      onMouseEnter={() => onMouseEnter("fourth")}
                      onMouseLeave={() => onMouseLeave("fourth")}
                    >
                      Environmental Graphics
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 ">
                <div>
                  <div className="leading-5 ">
                    Since Michael Ferdman founded Firstborn in 1997, we&apos;ve
                    seen the digital landscape change dramatically. Our industry
                    has transformed, our client&apos;s businesses and their
                    challenges have become more complex, consumer behavior has
                    shifted, and we, as a company,
                  </div>
                  <div>
                    <div>- SUB HEADER</div>
                    <div>- SUB HEADER</div>
                    <div>- SUB HEADER</div>
                    <div>- SUB HEADER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsTwo;
