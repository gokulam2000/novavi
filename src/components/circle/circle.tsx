import { useEffect } from "react";

import "./style.scss";

export default function Circle() {
    useEffect(() => {
        let circle = document.getElementById("mouse-circle")!;
        document.body.addEventListener("mousemove", function (e) {
          circle.style.left = e.clientX + "px",
            circle.style.top = e.clientY + "px";
        });
      }, []);
      return(
        <div id="mouse-circle"></div>
      );
}