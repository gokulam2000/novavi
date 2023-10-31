"use client"
import Image from "next/image";
import { CSSProperties, useEffect, useRef } from "react";

import "./style.scss";
import novaviLogo from "@app/assets/novavi-logo.png";

export default function Header(props: CSSProperties) {
 const scrollRef = useRef<HTMLDivElement>(null!);
 useEffect(() => {
  let body = document.querySelector("body");
  body?.addEventListener("scroll", () => {
   if (body?.scrollTop) {
    scrollRef.current.classList.add("f-nav");
   } else {
    scrollRef.current.classList.remove("f-nav");
   }
  });
 }, []);
 return (
  <div className="header-wrapper" ref={scrollRef} style={props}>
   <div className="container">
    <div className="row">
     <div className="col">
      <a href="#" className="header-logo">
       <Image src={novaviLogo} alt="novavi logo" />
      </a>
     </div>
     <div className="col">
      <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
       <div className="mega-menu-toggle">
        <div className="mega-toggle-blocks-left" />
        <div className="mega-toggle-blocks-center" />
        <div className="mega-toggle-blocks-right">
         <div
          className="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-0"
          id="mega-toggle-block-0"
         >
          <button
           aria-label="Toggle Menu"
           className="mega-toggle-animated mega-toggle-animated-slider"
           type="button"
           aria-expanded="false"
          >
           <span className="mega-toggle-animated-box">
            <span className="mega-toggle-animated-inner" />
           </span>
          </button>
         </div>
        </div>
       </div>
       <ul
        id="mega-menu-primary"
        className="mega-menu max-mega-menu mega-menu-horizontal mega-no-js"
        data-event="hover_intent"
        data-effect="fade_up"
        data-effect-speed={200}
        data-effect-mobile="disabled"
        data-effect-speed-mobile={0}
        data-mobile-force-width="false"
        data-second-click="go"
        data-document-click="collapse"
        data-vertical-behaviour="standard"
        data-breakpoint={768}
        data-unbind="true"
        data-mobile-state="collapse_all"
        data-hover-intent-timeout={300}
        data-hover-intent-interval={100}
       >
        <li
         className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-disable-link mega-menu-item-103"
         id="mega-menu-item-103"
        >
         <a
          className="mega-menu-link"
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded="false"
          role="button"
         >
          About Us
          <span className="mega-indicator" >&#xF140;</span>
         </a>
         <ul className="mega-sub-menu">
          <li
           className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-19"
           id="mega-menu-item-19"
          >
           <a className="mega-menu-link" href="about-us/index.html">
            About Us
           </a>
          </li>
          <li
           className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-104"
           id="mega-menu-item-104"
          >
           <a className="mega-menu-link" href="our-team/index.html">
            Our Team
           </a>
          </li>
          <li
           className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-105"
           id="mega-menu-item-105"
          >
           <a className="mega-menu-link" href="testimonials/index.html">
            Testimonials
           </a>
          </li>
         </ul>
        </li>
        <li
         className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-22"
         id="mega-menu-item-22"
        >
         <a
          className="mega-menu-link"
          href="services/index.html"
          tabIndex={0}
         >
          Services
         </a>
        </li>
        <li
         className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-48"
         id="mega-menu-item-48"
        >
         <a
          className="mega-menu-link"
          href="works/index.html"
          tabIndex={0}
         >
          Portfolio
         </a>
        </li>
       </ul>
      </div>
     </div>
     <div className="col">
      <h6>
       <i className="fas fa-phone-alt" />
       <a href="tel:+917736013411">+91 7736013411</a>
      </h6>
      <a href="contact-us/index.html" className="contact-btn">
       Contact Us
      </a>
      <button className="hamburgermenu">
      </button>
     </div>
    </div>
   </div>
  </div>
  // <Test />
 );
}







function Test() {
 return (
  <div className="header-wrapper">
   <div className="container">
    <div className="row">
     <div className="col-lg-4 col-md-4 col-9">
      <a href="index.html" className="header-logo">
       <img
        src="wp-content/themes/novavi/assets/img/novavi-logo.png"
        alt="Novavi Logo"
       />
      </a>
     </div>
     <div className="col-lg-4">
      <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
       <div className="mega-menu-toggle">
        <div className="mega-toggle-blocks-left" />
        <div className="mega-toggle-blocks-center" />
        <div className="mega-toggle-blocks-right">
         <div
          className="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-0"
          id="mega-toggle-block-0"
         >
          <button
           aria-label="Toggle Menu"
           className="mega-toggle-animated mega-toggle-animated-slider"
           type="button"
           aria-expanded="false"
          >
           <span className="mega-toggle-animated-box">
            <span className="mega-toggle-animated-inner" />
           </span>
          </button>
         </div>
        </div>
       </div>
       <ul
        id="mega-menu-primary"
        className="mega-menu max-mega-menu mega-menu-horizontal mega-no-js"
        data-event="hover_intent"
        data-effect="fade_up"
        data-effect-speed={200}
        data-effect-mobile="disabled"
        data-effect-speed-mobile={0}
        data-mobile-force-width="false"
        data-second-click="go"
        data-document-click="collapse"
        data-vertical-behaviour="standard"
        data-breakpoint={768}
        data-unbind="true"
        data-mobile-state="collapse_all"
        data-hover-intent-timeout={300}
        data-hover-intent-interval={100}
       >
        <li
         className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-disable-link mega-menu-item-103"
         id="mega-menu-item-103"
        >
         <a
          className="mega-menu-link"
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded="false"
          role="button"
         >
          About Us
          <span className="mega-indicator" />
         </a>
         <ul className="mega-sub-menu">
          <li
           className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-19"
           id="mega-menu-item-19"
          >
           <a className="mega-menu-link" href="about-us/index.html">
            About Us
           </a>
          </li>
          <li
           className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-104"
           id="mega-menu-item-104"
          >
           <a className="mega-menu-link" href="our-team/index.html">
            Our Team
           </a>
          </li>
          <li
           className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-105"
           id="mega-menu-item-105"
          >
           <a className="mega-menu-link" href="testimonials/index.html">
            Testimonials
           </a>
          </li>
         </ul>
        </li>
        <li
         className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-22"
         id="mega-menu-item-22"
        >
         <a
          className="mega-menu-link"
          href="services/index.html"
          tabIndex={0}
         >
          Services
         </a>
        </li>
        <li
         className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-48"
         id="mega-menu-item-48"
        >
         <a
          className="mega-menu-link"
          href="works/index.html"
          tabIndex={0}
         >
          Portfolio
         </a>
        </li>
       </ul>
      </div>
     </div>
     <div className="col-lg-4 col-md-8 col-3">
      <h6>
       <i className="fas fa-phone-alt" />
       <a href="tel:+917736013411">+91 7736013411</a>
      </h6>
      <a href="contact-us/index.html" className="contact-btn">
       Contact Us
      </a>
      <button className="hamburgermenu">
      </button>
     </div>
    </div>
   </div>
  </div>

 );
}