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
            <Header
              banner={"/assets/imgs/works/ai/aiBanner.jpg"}
              title={"Artificial Intelligence"}
            />
            <Challenge
              title={"Artificial Intelligence Services"}
              description={
                "Increase efficiency with cutting AI solutions. From machine learning and automation to NLP and predictive analysis, we offer custom AI services that optimize operations, improve decision making, and drive innovation for companies of all sizes. Stay ahead with the transformation moved."
              }
            />
            <Works
              banner={"/assets/imgs/works/ai/AI1.jpg"}
              banner2={"/assets/imgs/works/ai/AI2.jpg"}
            />
            <Solution
              title={
                "Machine Learning Solutions for Predictive Analytics & Automation"
              }
              description={
                "Unlock the power of AI -oriented ideas with our machine learning solutions. We help companies automate processes, predict trends, and optimize decision making through predictive analysis, ensuring smarter and more -oriented strategies for sustainable growth and efficiency."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/ai/AI3.jpg"} />
            <Challenge
              title={"Natural Language Processing (NLP) for Enhanced Communication"}
              description={
                "Take advantage of NLP to improve customer interactions, automate answers and analyze text data. Our AI -oriented solutions allow perfect communication, feel analysis and chatbot development, ensuring precise and efficient involvement on various platforms. Improve your business with smart language processing today!"
              }
            />
            <Works
              banner={"/assets/imgs/works/ai/AI4.jpg"}
              banner2={"/assets/imgs/works/ai/AI5.jpg"}
            />
            <Solution
              title={
                "AI-Powered Automation to Optimize Business Operations"
              }
              description={
                "Optimize workflows, reduce manual effort and increase efficiency with AI automation. From predictive analysis to intelligent process automation, our AI solutions help companies reduce costs, improve accuracy and boost productivity for sustainable growth. Transform operations with intelligent automation today!"
              }
            />
            <Wroks2 banner={"/assets/imgs/works/ai/AI6.jpg"} />
            <Challenge
              title={"Custom AI Software Development"}
              description={
                "Unlock AI power with tailor -made solutions designed for your business. Our personalized AI software development enhances automation, increases efficiency, and drives innovation. From machine learning to predictive analysis, we create smart systems that provide real -world results."
              }
            />
            <Works
              banner={"/assets/imgs/works/ai/AI7.jpg"}
              banner2={"/assets/imgs/works/ai/AI8.jpg"}
            />
            <Solution
              title={
                "AI-Powered Chatbots & Virtual Assistants for Seamless Interaction"
              }
              description={
                "Improve customer involvement with chatbots and virtual assistants oriented by AI. Automat Responses, Provide Instant Support, and Improve User Experience with Intelligent Conversation Solutions Tailored to Your Business Needs. Optimize communication and increase efficiency with state -of -the -art technology."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/ai/AI9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next />
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
