"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

import "./style.scss";
import novaviLogo from "@app/assets/novavi-logo.png";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    let circle = document.getElementById("mouse-circle")!;
    document.body.addEventListener("mousemove", function (e) {
      circle.style.left = e.clientX + "px",
        circle.style.top = e.clientY + "px";
    });
    let body = document.querySelector("body");
    body?.addEventListener("scroll", () => {
      if(body?.scrollTop) {
        scrollRef.current.classList.add("f-nav");
      } else {
        scrollRef.current.classList.remove("f-nav");
      }
    });
  }, []);
  return (
    <main className="min-h-screen">
      <div id="mouse-circle"></div>
      <div className="header-wrapper" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col">
              <a href="#" className="header-logo">
              <Image src={novaviLogo} alt="novavi logo" />
              </a>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div style={{ height: "200vh" }}></div>
    </main>
  )
}
