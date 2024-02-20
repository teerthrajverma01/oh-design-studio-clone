import { Fragment } from "react";

import HomeSliders from "./components/Home/HomeSliders";
// import AboutUs from "./components/Aboutus/AboutUs";
// import Portfolio from "./components/PortFolio/Portfolio";
// // import Clients from "./components/Clients";
// import News from "./components/News/News";
// import Thoughts from "./components/Thoughts/Thoughts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Pages from "./Pages/Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomeSliders /> },
      { path: "/pages", element: <Pages /> },
      // { path: "/thoughts", element: <Thoughts /> },
      // { path: "/news", element: <News /> },
      // { path: "/portfolio", element: <Portfolio /> },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;

{
  /* <div className="h-screen ">
  <div className="h-full py-20 bg-blue-400 ">
    <div className="h-[10%] text-3xl   bg-red-200">hii</div>
    <div className="h-[90%] flex flex-nowrap snap-x ">
      <HomeSliders />
      <AboutUs />
      <Portfolio />
      <Clients />
      <News />
      <Thoughts />
    </div>
  </div>
</div> */
}
