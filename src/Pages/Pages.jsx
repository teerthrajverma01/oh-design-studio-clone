import { Fragment } from "react";

import Portfolio from "../components/PortFolio/Portfolio";
import Clients from "../components/Clients";
import News from "../components/News/News";
import Thoughts from "../components/Thoughts/Thoughts";
import AboutUs from "../components/Aboutus/AboutUs";

const Pages = () => {
  return (
    <Fragment>
      <AboutUs />
      <Portfolio />
      <Clients />
      <News />
      <Thoughts />
    </Fragment>
  );
};

export default Pages;
