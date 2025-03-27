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
  title: "DevOps Engineering",
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
              banner={"/assets/imgs/works/devops/devopsBanner.jpg"}
              title={"DEVOPS ENGINEERING"}
            />
            <Challenge
              title={"DevOps Services"}
              description={
                "Accelerate your software delivery with our expert DevOps services. We streamline CI/CD pipelines, automate infrastructure, enhance security, and optimize performance. Leverage cloud solutions and modern DevOps tools for seamless deployment, scalability, and efficiency. Transform your workflow with our DevOps expertise."
              }
            />
            <Works
              banner1={"/assets/imgs/works/devops/devops1.jpg"}
              banner2={"/assets/imgs/works/devops/devops2.jpg"}
            />
            <Solution
              title={"CI/CD Pipeline Automation"}
              description={
                "CI/CD Pipeline Automation ensures seamless software delivery by automating code integration, testing, and deployment. It reduces errors, accelerates releases, and enhances efficiency, enabling teams to focus on innovation while ensuring continuous and reliable software updates with minimal manual intervention."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/devops/devops3.jpg"} />
            <Challenge
              title={"Infrastructure as Code (IaC)"}
              description={
                "Infrastructure as Code (IaC) automates infrastructure management using code, ensuring consistency, scalability, and faster deployments. By leveraging tools like Terraform and Ansible, IaC eliminates manual configurations, reduces errors, and enhances efficiency for cloud and on-premise environments."
              }
            />
            <Works
              banner1={"/assets/imgs/works/devops/devops4.jpg"}
              banner2={"/assets/imgs/works/devops/devops5.jpg"}
            />
            <Solution
              title={"Cloud Integration & Management"}
              description={
                "Cloud Integration & Management ensures seamless connectivity between applications, services, and data across cloud environments. We optimize performance, enhance security, and streamline workflows, enabling businesses to scale efficiently while maintaining reliability, cost-effectiveness, and operational agility in their cloud infrastructure."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/devops/devops8.jpg"} />
            <Challenge
              title={"Monitoring & Performance Optimization"}
              description={
                "Ensure peak efficiency with real-time monitoring and proactive performance optimization. We analyze system metrics, detect bottlenecks, and implement solutions to enhance speed, reliability, and scalability keeping your infrastructure secure and resilient for seamless business operations. "
              }
            />
            <Works
              banner1={"/assets/imgs/works/devops/devops7.jpg"}
              banner2={"/assets/imgs/works/devops/devops6.jpg"}
            />
            <Solution
              title={"Security & Compliance"}
              description={
                "Protect your infrastructure with robust security and compliance solutions. We implement industry-best practices, automated security checks, and regulatory compliance frameworks to safeguard your data, mitigate risks, and ensure uninterrupted business operations in cloud and on-prem environments. Stay secure, stay compliant."
              }
            />
            <Wroks2 banner={"/assets/imgs/works/devops/devops9.jpg"} />
            <Intro2 />
            <Testimonials />
            <Marq2 />
            <Next
              prevSubTitle={"DESIGN"}
              prevTitle={"GRAPHIC DESIGN"}
              prevLink={"/graphic-design"}
              prevBanner={"/assets/imgs/background/graphic design banner.jpg"}
              nextSubTitle={"MODERN AI MODELS"}
              nextTitle={"ARTIFICIAL INTELLIGENCE"}
              nextLink={"/artificial-intelligence"}
              nextBanner={"/assets/imgs/works/ai/aiBanner.jpg"}
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
