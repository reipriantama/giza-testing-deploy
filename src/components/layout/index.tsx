// import CustomCursor from "./cursor";
import React, { Suspense } from "react";
import Navbar from "./navbar";
import Scroll from "./scroll";

const Footer = React.lazy(() => import("./footer"));

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <Scroll>
        {/* <CustomCursor /> */}
        <div id={props.id} className={`${props.className}`}>
          {props.children}
        </div>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Scroll>
    </>
  );
};

export default Layout;
