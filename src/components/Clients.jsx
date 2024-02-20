import { Fragment } from "react";

import c1 from "../assets/images/c1.png";

const Clients = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 w-full h-full panel ">
        <div className="w-full h-full px-16 pt-12 pb-16">
          <div className="text-6xl font-semibold text-gray-400"> Clients</div>
          <div className="mx-20 my-8">
            <img src={c1} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Clients;
