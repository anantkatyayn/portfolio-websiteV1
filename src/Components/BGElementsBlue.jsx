import React from 'react'

const BGElementsBlue = () => {
  return (
    <>
    {/* Subtle Moving Outlined Elements */}
    <div className="absolute left-10 top-10 animate-elliptical-motion opacity-30 z-10">
        <div className="w-8 h-8 border-2 border-[#313e8e] rounded-full"></div>{" "}
        {/* Circle */}
      </div>
      <div className="absolute right-20 top-16 animate-elliptical-motion opacity-30 z-10">
        <div className="w-6 h-6 border-2 border-[#313e8e] transform rotate-45"></div>{" "}
        {/* Diamond */}
      </div>
      <div className="absolute left-20 bottom-10 animate-elliptical-motion opacity-30 z-10">
        <div className="w-8 h-8 border-2 border-[#313e8e] transform rotate-45"></div>{" "}
        {/* Triangle */}
      </div>
      <div className="absolute right-10 bottom-20 animate-elliptical-motion opacity-30 z-10">
        <div className="w-6 h-6 border-2 border-[#313e8e] flex items-center justify-center">
          <span className="text-[#313e8e] text-sm font-bold transform rotate-45">
            +
          </span>{" "}
          {/* Plus */}
        </div>
      </div>
      <div className="absolute left-[40%] top-[20%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-5 h-5 border-2 border-[#313e8e] rounded-full"></div>{" "}
        {/* Small Circle */}
      </div>
      <div className="absolute right-[30%] top-[30%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-7 h-7 border-2 border-[#313e8e]"></div> {/* Square */}
      </div>
      <div className="absolute left-[10%] top-[50%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-6 h-6 border-2 border-[#313e8e] transform rotate-45"></div>{" "}
        {/* Diamond */}
      </div>
      <div className="absolute right-[10%] -bottom-[20%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-5 h-5 border-2 border-[#313e8e] rounded-full"></div>{" "}
        {/* Circle */}
      </div>
      <div className="absolute -left-[2%] -top-[2%] animate-elliptical-motion opacity-40 z-10">
        <div className="w-5 h-5 border-2 border-[#313e8e] rounded-full"></div>{" "}
        {/* Small Circle */}
      </div>
      <div className="absolute right-[10%] -top-[5%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-7 h-7 border-2 border-[#313e8e]"></div> {/* Square */}
      </div>
      <div className="absolute -left-[3%] top-[2%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-6 h-6 border-2 border-[#313e8e] transform rotate-45"></div>{" "}
        {/* Diamond */}
      </div>
      <div className="absolute right-[5%] -bottom-[90%] animate-elliptical-motion opacity-30 z-10">
        <div className="w-5 h-5 border-2 border-[#313e8e] rounded-full"></div>{" "}
        {/* Circle */}
      </div>
    </>
  )
}

export default BGElementsBlue