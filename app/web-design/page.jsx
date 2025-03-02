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
  title: "Web Design",
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
          <main className="main-bg o-hidden">
            <Header
              banner={"/assets/imgs/works/webdesign/webDesignBanner.jpg"}
              title={"WEB DESIGN"}
            />
            <Challenge
              title={"Web Design"}
              description={
                "A responsive site ensures a perfect experience on all devices, improving user involvement and increasing conversions. Our specialized design web services focus on speed, functionality and aesthetics, creating a website that captivates visitors and drives the actual growth of business."
              }
            />
            <Works
              banner1={"/assets/imgs/works/webdesign/webdesign1.jpg"}
              banner2={"/assets/imgs/works/webdesign/webdesign2.jpg"}
            />
            <Solution
              title={"Custom Website Solutions"}
              description={
                "Unlock your brand's potential with custom websites solutions adapted to your business needs. Our specialized designers create responsive sites, easy to use and optimized for SEO that improve engagement, increase conversions, and drive growth. Featured online with a site designed for success!"
              }
            />
            <Wroks2 banner={"/assets/imgs/works/webdesign/webdesign3.jpg"} />
            <Challenge
              title={"SEO-Optimized Web Design"}
              description={
                "An impressive site is useless if no one finds it. Our optimized SEO web design ensures fast loading, mobile response capacity and research friendly structure, helping your site classify more, attract more visitors and convert them to loyal customers."
              }
            />
            <Works
              banner1={"/assets/imgs/works/webdesign/webdesign4.jpg"}
              banner2={"/assets/imgs/works/webdesign/webdesign5.jpg"}
            />
            <Solution
              title={"Mobile-Optimized Websites"}
              description={
                "Ensure a perfect user experience with fast, responsive, and friendly websites for mobile devices. Our projects adapt perfectly to all screen sizes, improving engagement and conversions. Stay ahead in the digital age with a mobile device optimized site that enhances performance and search ratings."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/webdesign/webdesign6.jpg"} />
            <Challenge
              title={"Website Redesign – Give Your Site a Fresh, Modern Look"}
              description={
                "Is your site outdated or with poor performance? Our Specialist Specialist Site Services improves aesthetics, functionality and user experience. We create responsive and friendly SEO designs involving visitors and conduct conversions. Turn your online presence with a modern and high performance website today!"
              }
            />
            <Works
              banner1={"/assets/imgs/works/webdesign/webdesign7.jpg"}
              banner2={"/assets/imgs/works/webdesign/webdesign8.jpg"}
            />
            <Solution
              title={"E-Commerce Web Design That Boosts Sales"}
              description={
                "A high -performance e -commerce site is essential to boosting customer sales and involvement. We created visually attractive online stores, friendly for mobile devices and optimized for perfect navigation SEO, safe check-out and fast loading times to improve the user experience and maximize conversions."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/webdesign/webdesign9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next
              prevSubTitle={"DESIGN"}
              prevTitle={"UI/UX DESIGN"}
              prevLink={"/uiux-design"}
              prevBanner={"/assets/imgs/works/UiUx/uiUxBanner.jpg"}
              nextSubTitle={"DEVELOPMENT"}
              nextTitle={"WEB DEVELOPMENT"}
              nextLink={"/web-development"}
              nextBanner={"/assets/imgs/background/web-development.jpg"}
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
