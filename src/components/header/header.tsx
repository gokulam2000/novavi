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
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
}