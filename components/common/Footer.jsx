import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="clean-footer crev ">
      <div className="container pb-40 pt-40 ontop ">
        <div className="row justify-content-between">
          <div className="col-lg-3 ">
            <div className="logo icon-img-100 md-mb80 mb-30">
              <img
                src="/assets/imgs/logo/logo2.png"
                alt=""
                style={{ scale: 2, marginLeft: 30 }}
                className=""
              />
            </div>
            <div className="column md-mb50 ">
              {/* <h6 className="sub-title mb-30">Contact</h6> */}
              <h6 className="p-color fw-300 ">
                950 Tower Ln, Foster City, <br /> CA, 94404
              </h6>
              <h6 className="mt-30 mb-15">
                <Link href="#0">info@taychon.com</Link>
              </h6>
              <Link href="#0" className="">
                <span className="fz-22 main-color">+44 7808 449570</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 ">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/page-about">About Us</Link>
                </li>
                <li className="mb-15">
                  <Link href="/page-services">Services</Link>
                </li>
                <li className="mb-15">
                  <Link href="/blog-grid-sidebar">Portfolio</Link>
                </li>
                <li className="mb-15">
                  <Link href="/blog-grid-sidebar">Blogs</Link>
                </li>
                <li className="mb-15">
                  <Link href="/page-contact">Contact</Link>
                </li>
                <li className="mb-15">
                  <Link href="/page-contact">Privacy Policy</Link>
                </li>
                <li className="mb-15">
                  <Link href="/page-contact">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 ">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Our Services</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/web-development">Web Development</Link>
                </li>
                <li className="mb-15">
                  <Link href="/app-development">App Development</Link>
                </li>
                <li className="mb-15">
                  <Link href="/graphic-design">Graphic Design</Link>
                </li>
                <li className="mb-15">
                  <Link href="/marketing">Marketing</Link>
                </li>
                <li className="mb-15">
                  <Link href="/uiux-design">UI/UX Design</Link>
                </li>
                <li className="mb-15">
                  <Link href="/devops-engineering">DevOps Engineering</Link>
                </li>
                <li className="mb-15">
                  <Link href="/artificial-intelligence">
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <Link href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <Link href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <Link href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <Link href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">Copyright ©2025 Taychon </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
