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
  title: "Marketing",
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
              banner={"/assets/imgs/background/marketing banner.jpg"}
              title={"DIGITAL MARKETING"}
            />
            <Challenge
              title={"Digital Marketing"}
              description={
                "Drive traffic, increase engagement and maximize conversions with our personalized digital marketing strategies. From SEO and social media to PPC and content marketing, we help companies grow online with data-oriented solutions that provide real results."
              }
            />
            <Works
              banner1={"/assets/imgs/marketing-inner/img1.jpg"}
              banner2={"/assets/imgs/marketing-inner/img2.jpg"}
            />
            <Solution
              title={"Search Engine Optimization"}
              description={
                "It conducts organic traffic and is higher in research mechanisms with SEO specialized strategies. From -Chave Word Optimization to Technical SEO, we help companies increase research, improving the user experience and increasing conversions."
              }
            />
            <Wroks2 banner={"/assets/imgs/marketing-inner/img3.jpg"} />

            <Challenge
              title={"Social Media Marketing"}
              description={
                "Experts promote your brand visibility with social media marketing. Attach the audience, increasethe followers, and drive the conversion to Facebook, Instagram, and more. Our analog strategies ensure maximum access, engagement and ROI for your business."
              }
            />
            <Works
              banner1={"/assets/imgs/marketing-inner/img4.jpg"}
              banner2={"/assets/imgs/marketing-inner/img5.jpg"}
            />
            <Solution
              title={"PPC Advertising That Delivers High ROI"}
              description={
                "Maximize the growth of your business with Payment Payment Campaigns for PAID CLICKS (PPC). We create High Contraction Google ads and social media ads that generate traffic, generate leads and increase sales, ensuring that you get the best return on investment."
              }
            />
            <Wroks2 banner={"/assets/imgs/marketing-inner/img6.jpg"} />

            <Challenge
              title={"Email & Lead Generation That Drives Growth"}
              description={
                "Convert potential customers to loyal customers with targeted email campaigns and data-oriented lead generation. Our strategies ensure high engagement, automated side dishes, and increased conversions by efficiently and feeding valuable customer relationships."
              }
            />
            <Works
              banner1={"/assets/imgs/marketing-inner/img7.jpg"}
              banner2={"/assets/imgs/marketing-inner/img8.jpg"}
            />
            <Solution
              title={"Content Marketing That Engages & Converts"}
              description={
                "High quality content creates confidence, increases SEO and drives customer involvement. Our content marketing strategies include blogs, articles and copy of the site designed to attract, inform and convert your audience - launching visitors to faithful customers and increasing the presence of your brand on the line."
              }
            />
            <Wroks2 banner={"/assets/imgs/marketing-inner/img9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next
              prevSubTitle={"Development"}
              prevTitle={"APP DEVELOPMENT"}
              prevLink={"/app-development"}
              prevBanner={"/assets/imgs/background/app dev banner.jpg"}
              nextSubTitle={"Design"}
              nextTitle={"GRAPHIC DESIGN"}
              nextLink={"/graphic-design"}
              nextBanner={"/assets/imgs/background/graphic design banner.jpg"}
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
