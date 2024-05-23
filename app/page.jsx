"use client";
import { useRef } from "react";
import Header from "./Components/Header";
import Paragraph from "./Components/Paragraph";
import StickyCursor from "./Components/StickyCursor";

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <>
      <StickyCursor stickyElement={stickyElement} />
      <Header ref={stickyElement} />
      <h1 className="text-7xl font-semibold text-center">Scroll Down</h1>
      <div className="h-screen"></div>
      <Paragraph />
      <div className="h-screen"></div>
    </>
  );
}
