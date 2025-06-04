import React from "react";
import Lottie from "lottie-react";
import infinityLoader from "../assets/infinityLoader.json";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <Lottie
        animationData={infinityLoader}
        loop
        autoplay
        className="w-40 h-40"
      />
      <p className="text-[#313e8e] mt-4 font-semibold tracking-wide text-sm">
        Loading portfolio...
      </p>
    </div>
  );
};

export default Preloader;