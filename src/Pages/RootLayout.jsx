import { Fragment, useRef } from "react";
import { Outlet } from "react-router-dom";

import logo from "../assets/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../components/Nav";

gsap.registerPlugin(ScrollTrigger);

const RootLayout = () => {
  const container = useRef();
  const mcontainer = useRef();
  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          pinSpacer: false,
          scrub: 1,
          end: () =>
            "+=" + document.querySelector("#mainContainer").offsetWidth,
        },
      });
    },
    { scope: container }
  );
  const { contextSafe } = useGSAP({ scope: mcontainer });

  const onClickGood = contextSafe(() => {
    gsap
      .timeline()
      .fromTo(
        ".imgg",
        {
          // display: "flex",
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        },
        {
          // display: "hidden",
          clipPath: "polygon(100% 0%,100% 0%,100% 100%,100% 100%)",
          duration: 1,
        }
      )
      .fromTo(
        ".mnav",
        { xPercent: -100 },
        { display: "block", xPercent: 0, duration: 1 },
        "<"
      )
      .to(".pin-spacer", { display: "none" });
  });
  return (
    <Fragment>
      <div ref={mcontainer} className="z-10 h-screen ">
        <div className="fixed z-30 w-screen text-3xl bg-white top-8">
          <div className="grid grid-cols-2">
            <div className="flex justify-start">
              <a href="/">
                <img className="h-16 pl-20 " src={logo} alt="" />
              </a>
            </div>
            <div className="flex self-center justify-end ">
              <div className="pr-32" onClick={onClickGood}>
                <RxHamburgerMenu />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full mnav">
          <Nav />
        </div>

        <div
          ref={container}
          id="mainContainer"
          className="flex h-full py-24 overflow-x-hidden imgg"
        >
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default RootLayout;
