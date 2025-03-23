import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Clients from "@/components/common/Clients";
import Feat from "@/components/home-main/Feat";
import Footer from "@/components/common/Footer";
import Header from "@/components/home-main/Header";
import Intro from "@/components/home-main/Intro";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
// import Portfolio from "@/components/p-grid/Portfolio";
import HomeTwoPortfolio from "@/components/PortfolioSection";
import Services from "@/components/home-main/Services";
import Team from "@/components/home-main/Team";
import Testimonials from "@/components/home-creative-agency/Testimonials";
import Script from "next/script";
import Marq from "@/components/home-main/Marq";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Blog from "@/components/home-digital-agency/Blog";
import PinSection from "@/components/process-pin";
import "./globals.css";
import HomeTwoSponsor from "@/components/Partners/Partners";
import Marquee from "@/components/Marquee/Marquee";
export const metadata = {
  title: "Taychon - Software and Creative Agency",
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

export default function Home() {
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
            <Header />
            <HomeTwoSponsor />
            <Intro />
            <Marquee title={"taychon services"}/>
            <Services />
            <Feat />
            <PinSection />
            <Marquee title={"taychon portfolio"}/>
            {/* <Portfolio /> */}
            <HomeTwoPortfolio/>
            <Testimonials />
            <Clients />
            <Blog />
            <Marquee title={"contact taychon"}/>
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
}
