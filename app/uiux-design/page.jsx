import React from "react";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Header from "@/components/project-details/Header";
import Challenge from "@/components/project-details/Challenge";
import Works from "@/components/project-details/Works";
import Solution from "@/components/project-details/Solution";
import Wroks2 from "@/components/project-details/Wroks2";
import Next from "@/components/project-details/Next";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-creative-agency/Testimonials";
import Marq2 from "@/components/common/Marq2";
export const metadata = {
  title: "UI/UX Design",
  icons: {
    icon: "/assets/imgs/logo/logo.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
    ]),
  },
};
const page = () => {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="bg-black o-hidden">
            <Header
              banner={"/assets/imgs/works/UiUx/uiUxBanner.jpg"}
              title={"UI/UX DESIGN"}
            />
            <Challenge
              title={"Creative & User-Centric UI/UX Design"}
              description={
                "Delivering perfect, visually attractive and intuitive designs that improve user involvement. Our specialized UI/UX solutions focus on usability, functionality and aesthetics, ensuring an impeccable digital experience that generates conversions and strengthens brand identity"
              }
            />
            <Works
              banner1={"/assets/imgs/works/UiUx/UiUx1.jpg"}
              banner2={"/assets/imgs/works/UiUx/UiUx2.jpg"}
            />
            <Solution
              title={"User-Friendly Interfaces, Stunning Designs"}
              description={
                "The great design is not just looks - it is about creating continuous user experiences. Our UI/UX solutions mix aesthetic with functionality, ensuring intuitive navigation, surrounding visuals and ideal usability for a smooth and pleasant digital journey. Raise your brand with captivating designs!"
              }
            />
            <Wroks2 banner={"/assets/imgs/works/UiUx/UiUx3.jpg"} />
            <Challenge
              title={"Wireframing and Prototyping"}
              description={
                "Transform ideas into visual structures with detailed wireframes and interactive prototypes. Our process ensures perfect navigation, intuitive layouts and friendly designs, allowing for previous tests and refinements before development, reducing costs and improving the user's overall experience."
              }
            />
            <Works
              banner1={"/assets/imgs/works/UiUx/UiUx4.jpg"}
              banner2={"/assets/imgs/works/UiUx/UiUx5.jpg"}
            />
            <Solution
              title={"Responsive and Mobile-First Design"}
              description={
                "A continuous user experience on all devices begins with responsive design and mobile first. We create adaptive interfaces that ensure ideal performance, accessibility and engagement, offering a visually attractive and functional experience on smartphones, tablets and desktops."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/UiUx/UiUx6.jpg"} />
            <Challenge
              title={"Conversion-Driven UX Strategies"}
              description={
                "UX optimized design enhances user involvement, guiding visitors perfectly for conversions. By implementing intuitive navigation, ctas persuasive and data-oriented insights, we create experiences that increase retention, maximize leads, and boost sales-garantindo that your site transforms visitors into loyal customers."
              }
            />
            <Works
              banner1={"/assets/imgs/works/UiUx/UiUx7.jpg"}
              banner2={"/assets/imgs/works/UiUx/UiUx8.jpg"}
            />
            <Solution
              title={"UX/UI Research and User Testing"}
              description={
                "Our UX/UI search ensures that your design align with user needs. Through detailed tests, we gather valuable information, refining usability and experience to create intuitive and friendly interfaces that drive engagement and satisfaction"
              }
            />
            <Wroks2 banner={"/assets/imgs/works/UiUx/UiUx9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next
              prevSubTitle={"MODERN AI MODELS"}
              prevTitle={"ARTFICIAL INTELLIGENCE"}
              prevLink={"/artificial-inte;lligence"}
              prevBanner={"/assets/imgs/works/ai/aiBanner.jpg"}
              nextSubTitle={"DESIGN"}
              nextTitle={"WEB DESIGN"}
              nextLink={"/web-design"}
              nextBanner={"/assets/imgs/works/webdesign/webDesignBanner.jpg"}
            />
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
};
export default page;
