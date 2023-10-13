"use client"
import Image from "next/image";
import { useEffect } from "react";

import "./style.scss";
import novaviLogo from "@app/assets/novavi-logo.png";

export default function Home() {
  useEffect(() => {
    let circle = document.getElementById("mouse-circle")!;
    document.body.addEventListener("mousemove", function (e) {
      console.log(e);

      circle.style.left = e.clientX + "px",
        circle.style.top = e.clientY + "px";
    });
  }, []);
  return (
    <main className="min-h-screen">
      <div id="mouse-circle"></div>
      <div className="header-wrapper f-nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <Image src={novaviLogo} alt="novavi logo" />
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
