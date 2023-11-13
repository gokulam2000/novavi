"use client"
import { useState } from "react";

import "./style.scss";
import Header from "@app/components/header/header";
import MobileHeader from "@app/components/mobile-header/mobile-header";
import Circle from "@app/components/circle/circle";
import Home from "@app/pages/home/home";

export default function App() {
  const [mobileToggle, setMobileTogge] = useState<Boolean>(false);
  return (
    <main className="min-h-screen">
      <Circle />
      {/* <Header mobileToggle={mobileToggle} setMobileTogge={setMobileTogge}/> */}
      <MobileHeader mobileToggle={mobileToggle} setMobileTogge={setMobileTogge} />
      <Home />
    </main>
  )
}
