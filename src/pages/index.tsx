import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#A29875] h-auto w-full text-[#FFFFFF] flex flex-col md:flex-row justify-between items-center px-4 md:px-9 py-4 space-y-4 md:space-y-0">
      <h1 className="text-white font-rye font-bold text-3xl md:text-5xl lg:text-[60px] pt-2 md:pt-0">
        MANZZARI
      </h1>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:justify-between px-6 lg:px-16 h-full">
        {/* Left Section (Text Content) */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-4 mt-10 lg:mt-0">
          <div className="font-libre-bodoni text-[40px] font-bold leading-[65.8px] tracking-[0.025em] text-left">
            <h1>IMPECCABLE</h1>
            <h1>CRAFTSMANSHIP AND</h1>
            <h1>FINESSE</h1>
          </div>

          <p className="font-libre-bodoni text-[#787054] text-[20px] leading-[30px] font-medium tracking-[0.025em] text-left max-w-[550px] lg:max-w-[902px]">
            An example of intricate workmanship and detail, elegant necklaces and
            long and short chains form a part of our desirable collection.
          </p>

          <button className="font-libre-bodoni mt-8 lg:mt-10 text-white bg-[#A29875] w-[200px] md:w-[250px] lg:w-[288px] rounded-lg hover:bg-stone-400">
            Explore Now
          </button>
        </div>

        {/* Right Section (Image with Custom Styles) */}
        <div className="relative mt-10 lg:mt-0" style={{ top: "28px", left: "24px" }}>
          <div
            className="absolute w-full h-full bg-white opacity-30 border border-white"
            style={{ borderRadius: "150px 0px 150px 0px" }}
          ></div>
          <Image
            src="/figma.png"
            alt="Jewelry Image"
            width={442}
            height={611}
            className="relative z-20"
            style={{ borderRadius: "150px 0px 150px 0px", border: "1px solid #FFFFFF" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
