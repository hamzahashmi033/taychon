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
  title: "Web Developemnt",
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
            <Header banner={"/assets/imgs/background/web-development.jpg"} title={"WEB DEVELOPMENT"}/>
            <Challenge title={"Front-End Development"} description1={"We visually create impressive, responsive and high performance-end solutions using React, Vue.js and Angular. Our specialized developers ensure continuous user experiences with optimized interfaces, fast charging design and perfect pixel capacity. Improve your digital presence with our front experience!"} />
            <Works banner1={"/assets/imgs/web-development/img1.jpg"} banner2={"/assets/imgs/web-development/img2.jpg"}/>
            <Solution  title={"Back-End Development"} description1={"Back-end solutions are robust, secure and scalable to seamless digital experiences. We specialize in database management, API integration and server side logic, and ensure high performance and reliability. Create a strong base for your applications with our expert development services."}/>
            <Wroks2 banner1={"/assets/imgs/web-development/img3.jpg"}/>


    
            <Challenge title={"Full-Stack Development"} description1={"We offer specialized development in complete batteries, and combine front and back-end technologies for high-performance and high-performance networks. Using React, Node.JS and Mongodb, we built scalable, secure and friendly solutions adapted to your business needs. Giveyour ideas life today!"} />
            <Works banner1={"/assets/imgs/web-development/img4.jpg"} banner2={"/assets/imgs/web-development/img5.jpg"}/>
            <Solution  title={"E-Commerce Development"} description1={"We build high performance, scalable e-commerce sites tailored for seamless shopping experiences. By using modern platforms such as Shopify, WooCommerce and Magento, we guarantee safe transactions, mobile responsiveness and friendly interface to maximize conversions and increase their business online. Start selling today!"}/>
            <Wroks2 banner1={"/assets/imgs/web-development/img6.jpg"}/>

            <Challenge title={"CMS Development"} description1={"Manage your content effortlessly with our custom CMS solutions. We developed scalable platforms, easy to use and optimized for SEO using CMS WordPress, Shopify and personalizedto optimize content management and improve site performance. Simplify updates, increase efficiency and start today!"} />
            <Works banner1={"/assets/imgs/web-development/img7.jpg"} banner2={"/assets/imgs/web-development/img8.jpg"}/>
            <Solution  title={"Web App Development"} description1={"Development of Web Applications We created high difference scalable web apps using state -of-the -art technologies. Our specialized developers create safe, responsible and friendly solutions to meet your business needs. Increase efficiency and involvement with a spontaneousweb application experience. Create your vision today!"}/>
            <Wroks2 banner1={"/assets/imgs/web-development/img9.jpg"}/>
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next prevTitle={"Web Design"} prevLink={""} nextBanner={""} prevBanner={""}  nextTitle={"App Development"} nextLink={""}/>
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
