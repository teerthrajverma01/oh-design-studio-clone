import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.set(".overlay", { xPercent: -100 });
    },
    { scope: container }
  );

  const onMouseEnter = (className) => {
    gsap.to(`.${className} .overlay`, { xPercent: 0 });
  };

  const onMouseLeave = (className) => {
    gsap.to(`.${className} .overlay`, { xPercent: -100 });
  };

  return (
    <div ref={container} className="flex items-center justify-center h-full ">
      <div className="flex items-center justify-center w-full ">
        <div>
          <div className="overflow-hidden tracking-tighter text-8xl">
            <a
              // href="/about-us"
              href="/pages"
              className="relative about"
              onMouseEnter={() => onMouseEnter("about")}
              onMouseLeave={() => onMouseLeave("about")}
            >
              <span className="z-10 px-4 text">About.</span>
              <div className="bg-[#fff500] absolute w-[35rem]  h-full top-0 left-0 -z-10 overlay"></div>
            </a>
          </div>
          <div className="overflow-hidden tracking-tighter text-8xl">
            <a
              // href="/"
              href="/pages"
              className="relative contact"
              onMouseEnter={() => onMouseEnter("contact")}
              onMouseLeave={() => onMouseLeave("contact")}
            >
              <span className="z-10 px-4 text">Contact.</span>
              <div className="bg-[#fff500] absolute w-[35rem]  h-full top-0 left-0 -z-10 overlay"></div>
            </a>
          </div>
          <div className="overflow-hidden tracking-tighter text-8xl">
            <a
              // href="/thoughts"
              href="/pages"
              className="relative print "
              onMouseEnter={() => onMouseEnter("print")}
              onMouseLeave={() => onMouseLeave("print")}
            >
              <span className="z-10 px-4 text">Thought.</span>
              <div className="bg-[#fff500] absolute w-[35rem]  h-full top-0 left-0 -z-10 overlay"></div>
            </a>
          </div>
          <div className="overflow-hidden tracking-tighter text-8xl">
            <a
              // href="/portfolio"
              href="/pages"
              className="relative portfolio"
              onMouseEnter={() => onMouseEnter("portfolio")}
              onMouseLeave={() => onMouseLeave("portfolio")}
            >
              <span className="z-10 px-4 text">Portfolio.</span>
              <div className="bg-[#fff500] absolute w-[35rem]  h-full top-0 left-0 -z-10 overlay"></div>
            </a>
          </div>
          <div className="overflow-hidden tracking-tighter text-8xl">
            <a
              // href="/news"
              href="/pages"
              className="relative news"
              onMouseEnter={() => onMouseEnter("news")}
              onMouseLeave={() => onMouseLeave("news")}
            >
              <span className="z-10 px-4 text">News.</span>
              <div className="bg-[#fff500] absolute w-[35rem]  h-full top-0 left-0 -z-10 overlay"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
