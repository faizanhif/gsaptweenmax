import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
const FisrtAnimation = () => {
  const ref = useRef("");
  console.log("ref", ref);

  useEffect(() => {
    console.log(".name", ref.current);
    gsap.to(ref.current, { x: 100, delay: 2 });
  }, []);
  return (
    <div>
      <h1 ref={ref}>animation</h1>
      <h1 className="name"> hello animation </h1>
    </div>
  );
};

export default FisrtAnimation;
