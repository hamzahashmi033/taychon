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
  title: "Graphic Design",
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
              banner={"/assets/imgs/background/graphic design banner.jpg"}
              title={"GRAPHIC DESIGN"}
            />
            <Challenge
              title={"Professional Graphic Design Services"}
              description={
                "Raise your brand with impressive visuals! Our specialized designers create logos, marketing materials, social media charts and more. We deliver personalized high quality designs that captivate your audience and improve your brand identity."
              }
            />
            <Works
              banner1={"/assets/imgs/graphic-design/img1.jpg"}
              banner2={"/assets/imgs/graphic-design/img2.jpg"}
            />
            <Solution
              title={"Logo Designs"}
              description={
                "A logo is the face of your brand. Our specialized designers create exclusive, memorable and high quality logos that reflect their commercial identity. Highlight with a professional logo that leaves a lasting impression."
              }
            />
            <Wroks2 banner={"/assets/imgs/graphic-design/img3.jpg"} />

            <Challenge
              title={"Social media graphics"}
              description={
                "Increase your brand with attractive social media charts and high impact marketing materials. From engaging posts to professional banners, we project visuals that capture attention, increaseengagement, and raise their presence on -line. Let's create impressive graphics that highlight your brand!"
              }
            />
            <Works
              banner1={"/assets/imgs/graphic-design/img4.jpg"}
              banner2={"/assets/imgs/graphic-design/img5.jpg"}
            />
            <Solution
              title={"Print & Digital Design"}
              description={
                "Improve your brand with high quality print and digital print designs adapted to your business. From leaflets and business cards to social media and visual websites, we create impressive designs that captivate the audience and leave a lasting impression."
              }
            />
            <Wroks2 banner={"/assets/imgs/graphic-design/img6.jpg"} />

            <Challenge
              title={"Infographics & Illustrations"}
              description={
                "Involve your audience with visually convincing infographics and personalized illustrations. Our projects simplify complex information, improve the brand's narrative, and increase engagement on digital and printed platforms. Raise your marketing with attractive visuals adapted to your brand's identity."
              }
            />
            <Works
              banner1={"/assets/imgs/graphic-design/img7.jpg"}
              banner2={"/assets/imgs/graphic-design/img8.jpg"}
            />
            <Solution
              title={"Your Vision, Our Design Expertise"}
              description={
                "Turn your ideas into impressive visuals with our specialized graphic design services. From logosand brands to digital graphics and printed materials, we bring creativity and accuracy to all projects, ensuring that your brand stands out with a unique professional identity."
              }
            />
            <Wroks2 banner={"/assets/imgs/graphic-design/img9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next
              prevSubTitle={"MARKETING"}
              prevTitle={"DIGITAL MARKETING"}
              prevLink={"/marketing"}
              prevBanner={"/assets/imgs/background/marketing banner.jpg"}
              nextSubTitle={"DEPLOYMENT"}
              nextTitle={"DEVOPS ENGINEERING"}
              nextLink={"/devops-engineering"}
              nextBanner={"/assets/imgs/works/devops/devopsBanner.jpg"}
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
