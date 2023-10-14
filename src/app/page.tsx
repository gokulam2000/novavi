"use client"

import "./style.scss";
import Header from "@app/components/header/header";
import Circle from "@app/components/circle/circle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Circle />
      <Header />
      <div style={{ height: "200vh" }}></div>
    </main>
  )
}
