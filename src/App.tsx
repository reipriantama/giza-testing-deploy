import "./App.css";
import Layout from "./components/layout";
import Resources from "./components/feature/resources";
import Client from "./components/feature/client";
import Testimony from "./components/feature/testimony";
import Expertise from "./components/feature/expertise";
import Works from "./components/feature/works";
import Hero from "./components/feature/hero";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useState } from "react";
// import Loader from "./components/feature/loader";
import CustomCursor from "./components/layout/cursor";
import ContentService from "./components/feature/service";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { Gpu } from "./components/context/gpuContext";

const Loader = React.lazy(() => import("./components/feature/loader"));
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const [isSecondaryButton, setIsSecondaryButton] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { gpuTier }: any = useContext(Gpu);
  console.log(gpuTier);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.getElementById("containerExpertise"),
      start: "bottom 50%",
      end: "bottom -1000%",
      // once: true,
      onToggle: (self) => {
        gsap.to("#containerExpertise", {
          // backgroundColor: self.isActive ? "#010101" : "white",
          color: self.isActive ? "white" : "#010101",
        });
        gsap.to("#textParagraph", {
          color: self.isActive ? "#CACCCF" : "#333333",
        });
        gsap.to("#borderExpertise", {
          borderColor: self.isActive ? "#43474B" : "#333333",
        });
        setIsSecondaryButton(!self.isActive);
      },
    });
    ScrollTrigger.create({
      trigger: document.getElementById("containerService"),
      start: "2px 50%",
      end: "bottom -1000%",
      once: true,
      markers: false,
      onToggle: (self) => {
        gsap.to("body", {
          backgroundColor: self.isActive ? "#010101" : "white",
        });
        gsap.to("#containerService", {
          // backgroundColor: self.isActive ? "#010101" : "white",
          color: self.isActive ? "white" : "#010101",
        });
        gsap.to("#borderServiceOne", {
          borderColor: self.isActive ? "#43474B" : "#333333",
        });
        gsap.to("#titleTeam", {
          color: self.isActive ? "white" : "black",
        });
      },
      onEnter: () => {
        gsap.fromTo(
          "#containerService",
          {
            opacity: 0,
            y: 300,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
        );
      },
    });

    ScrollTrigger.create({
      trigger: document.getElementById("containerTestimony"),
      start: "bottom 50%",
      end: "bottom -1000%",
      markers: false,
      onToggle: (self) => {
        gsap.to("#containerTestimony", {
          // backgroundColor: self.isActive ? "white" : "#010101",
          color: self.isActive ? "#010101" : "white",
        });
        gsap.to("#arrowTestimony", {
          color: self.isActive ? "#010101" : "white",
        });
      },
    });
    ScrollTrigger.create({
      trigger: document.getElementById("containerResources"),
      start: "2px 50%",
      end: "bottom -1000%",
      markers: false,
      onToggle: (self) => {
        gsap.to("body", {
          backgroundColor: self.isActive ? "white" : "#010101",
        });
        gsap.to("#containerResources", {
          // backgroundColor: self.isActive ? "white" : "#010101",
          color: self.isActive ? "#010101" : "white",
        });
      },
    });
  });

  useEffect(() => {
    const fakeDataFetch = () => {
      const tm = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(tm);
    };

    fakeDataFetch();
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.backgroundColor = "#010101";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  useEffect(() => {
    // Save the original scrollRestoration setting
    const originalScrollRestoration = window.history.scrollRestoration;

    // Set scrollRestoration to 'manual' and scroll to the top
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    console.log(window.scrollTo(0, 0));

    // Clean up by restoring the original scrollRestoration setting
    return () => {
      window.history.scrollRestoration = originalScrollRestoration;
    };
  }, []);

  return (
    <>
      {isLoading && <Loader className="scale-[400%] lg:scale-125" />}
      <CustomCursor />
      <Layout className="">
        <Hero id="containerHero" className="scaleAnimation" />
        <Works id="containerWorks" className="" />
        <Expertise
          id="containerExpertise"
          idParagraph="textParagraph"
          idBorder="borderExpertise"
          buttonTheme={isSecondaryButton}
          className=""
        />
        <ContentService
          id="containerService"
          idTitle="titleTeam"
          idBorder="borderServiceOne"
          buttonTheme={isSecondaryButton}
          className="serviceOne -mt-[1px] bg-transparent pb-28 text-netral-0 opacity-0 lg:max-h-[521px]"
        />

        <Client id="containerClient" className="text-white bg-transparent" />
        <Testimony
          id="containerTestimony"
          idArrow="arrowTestimony"
          className="text-white bg-transparent"
        />
        <Resources
          id="containerResources"
          className="-mt-[2px] bg-transparent text-white"
        />
      </Layout>
    </>
  );
}

export default App;
