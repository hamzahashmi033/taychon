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
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-creative-agency/Testimonials";
import Wroks2 from "@/components/project-details/Wroks2";
import Marq2 from "@/components/common/Marq2";
import Next from "@/components/project-details/Next";
export const metadata = {
  title: "App Developemnt",
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
              banner={"/assets/imgs/background/app dev banner.jpg"}
              title={"APP DEVELOPMENT"}
            />
            <Challenge
              title={"APP DEVELOPMENT"}
              description={
                "We create innovative, altitude demonstration mobile apps for iOS, Android and Cross Platform Solutions. Our expert team ensures simple functionality, sunbathing UX and scalable development. Custom apps fit your needs to lift your business with solutions. Let's build some wonderful constructions!"
              }
            />
            <Works
              banner1={"/assets/imgs/app-development/img1.jpg"}
              banner2={"/assets/imgs/app-development/img2.jpg"}
            />
            <Solution
              title={"Custom App Development"}
              description={
                "We deliver personalized application development solutions adapted to your business needs. From concept to launch, our specialized developers create scalable and high performance mobile applications for iOS, Android and cross platform. Raise your brand with innovative, easy to use and insurance applications."
              }
            />
            <Wroks2 banner={"/assets/imgs/app-development/img3.jpg"} />

            <Challenge
              title={"iOS app development"}
              description={
                "We deliver high performance iOS application development solutions by creating perfect apps and easy to use for iPhones and iPads. Our expert team ensures an elegant/UX user interface, robust security and optimized performance. Raise your brand with a personalized iOS app adapted to your business needs."
              }
            />
            <Works
              banner1={"/assets/imgs/app-development/img4.jpg"}
              banner2={"/assets/imgs/app-development/img5.jpg"}
            />
            <Solution
              title={"Android App Development"}
              description={
                "We create high performance Android applications, adapted to your business needs. Our specialized developers guarantee perfect functionality, IUI/UI and scalable solutions. Increase your brand with a custom Android app designed for speed, safety and user involvement."
              }
            />
            <Wroks2 banner={"/assets/imgs/app-development/img6.jpg"} />

            <Challenge
              title={"Cross-Platform App Development for All Devices"}
              description={
                "We develop high performance cross applications that work perfectly with iOS, Android and otherdevices. Our expert team ensures soft, IUI/UI functionality and scalable solutions, helping your business reach a wider audience with a unique and economical application."
              }
            />
            <Works
              banner1={"/assets/imgs/app-development/img7.jpg"}
              banner2={"/assets/imgs/app-development/img8.jpg"}
            />
            <Solution
              title={"Enterprise & Startup App Development"}
              description={
                "We create powerful and scalable applications for companies and startups, ensuring the performance, safety and involvement of the user. Whether launching a new venture or optimizing business operations, our custom mobile solutions help you grow and succeed in the digital scenario."
              }
            />
            <Wroks2 banner={"/assets/imgs/app-development/img9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next
              prevSubTitle={"Development"}
              prevTitle={"WEB DEVELOPMENT"}
              prevLink={"/web-development"}
              prevBanner={"/assets/imgs/background/web-development.jpg"}
              nextSubTitle={"Marketing"}
              nextTitle={"DEIGITAL MARKETING"}
              nextLink={"/marketing"}
              nextBanner={"/assets/imgs/background/marketing banner.jpg"}
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
