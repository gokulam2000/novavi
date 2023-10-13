"use client"
import { useState, useRef, MouseEvent } from "react";
import CSS from "csstype";

import "./style.scss";

export default function Home() {
  const [pos, setPos] = useState<CSS.Properties>({
    top: "0px",
    left: "0px"
  });
  function circleHandler(event: MouseEvent): void {
    setPos({ top: event.clientY + "px", left: event.clientX + "px"});
  }
  return (
    <main
    className="flex min-h-screen flex-col items-center justify-between p-24"
    onMouseMove={circleHandler}
    style={{ height: "200vh" }}
    >
      <div id="mouse-circle" style={pos}></div>
    </main>
  )
}
