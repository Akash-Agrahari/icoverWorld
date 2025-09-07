import React from "react";
import Hover from "./Hover";
import Product from "./components/Product";


function Page2() {
  return (
    <div
      style={{ fontFamily: "montserrat,bold" }}
      className="w-full h-screen bg-[#f5f5f7]"
    >
      <div className="w-full py-2 flex flex-wrap  lg:justify-start items-center lg:gap-0 gap-2 justify-center bg-white">
        {/* First Image + Text */}

        <div className="relative flex items-start justify-center lg:justify-start  overflow-hidden lg:w-1/2 w-full  p-2">
          <picture>
            {/* WebP first */}
            <source
              srcSet="/Page-2/Phone-1x.webp 1x, /Page-2/Phone-2x.webp 2x, /Page-2/Phone-3x.webp 3x"
              type="image/webp"
            />

            {/* Fallback <img> is mandatory */}
            <img
              src="/Page-2/Phone-1x.webp"
              alt="iPhone"
              className="w-full py-10 lg:py-0 h-full scale-150 lg:scale-100 object-contain"
            />
          </picture>
          <div className="absolute w-full flex flex-col items-center py-2 lg:py-5 justify-center gap-0.5 lg:gap-2 text-[#1d1d1f]">
            <h1 className="lg:text-5xl text-3xl  tracking-tighter">iPhone</h1>
            <p className="lg:text-xl text-lg tracking-tight  ">
              Meet new iPhone 16 family.
            </p>
            <div className="px-5 py-1.5 text-lg mt-1  text-white tracking-normal bg-blue-500 rounded-full">
              {/* Mobile only */}
              <a href="#" className="block lg:hidden">
                Explore
              </a>

              {/* Desktop only */}
              <div className="hidden lg:block">
                <Hover href="#">Explore</Hover>
              </div>
            </div>
          </div>
        </div>

        {/* Second Image */}

        <div className="relative flex items-start lg:justify-start overflow-hidden lg:w-1/2 w-full  p-2">
          <picture>
            <source
              srcSet="/Page-2/macbook-1x.webp 1x, /Page-2/macbook-2x.webp 2x, /Page-2/macbook-3x.webp 3x"
              type="image/webp"
            />

            {/* Fallback <img> is mandatory */}
            <img
              src="/Page-2/macbook-1x.webp"
              alt="macbook"
              className="w-full py-10 lg:py-0 h-full scale-150 lg:scale-100 object-contain"
            />
          </picture>
          <div className="absolute w-full flex flex-col items-center py-2 lg:py-5 justify-center gap-0.5 lg:gap-2 text-[#1d1d1f]">
            <h1 className="lg:text-5xl text-3xl  tracking-tighter">
              MacBook Air
            </h1>
            <p className="lg:text-xl text-lg tracking-tight  ">
              Sky high performance with M4.
            </p>
            <div className="px-5 py-1.5 text-lg mt-1  text-white tracking-normal bg-blue-500 rounded-full">
              {/* Mobile only */}
              <a href="#" className="block lg:hidden">
                Explore
              </a>

              {/* Desktop only */}
              <div className="hidden lg:block">
                <Hover href="#">Explore</Hover>
              </div>
            </div>
          </div>
        </div>

        {/* Third image */}

        <div className="relative flex-col flex items-start bg-[#f5f5f7] pt-40 justify-center overflow-hidden w-full lg:pt-2 ">
          <picture>
            <source
              srcSet="/Page-2/Access-1x.webp 1x, /Page-2/Access-2x.webp 2x, /Page-2/Access-3x.webp 3x"
              type="image/webp"
            />

            {/* Fallback <img> is mandatory */}
            <img
              src="/Page-2/Access-1x.webp"
              alt="Access"
              className="w-full py-10 lg:py-0 h-full scale-160 lg:m-0 ml-20 lg:scale-100 object-contain"
            />
          </picture>
          <div className="absolute gap-2  w-full flex text-left top-5 flex-col h-full py-2 lg:py-5 items-center  lg:justify-center lg:items-start lg:left-2/3  lg:gap-2 text-[#1d1d1f]">
            <div className="flex lg:p-0 px-5 flex-col gap-1 items-center justify-center" >
            <h1 style={{fontFamily:'montserrat,medium'}} className="lg:text-5xl  text-3xl lg:font-medium tracking-tighter">
              Accessories in a <br className="hidden lg:block" /> snap{" "}
            </h1>
            <p className="lg:text-xl  text-lg tracking-tight  text-center lg:text-left ">
              Find a MagSafe case, wallet or charger <br className="hidden lg:block" /> that’s right for
              you.
            </p>
            </div>
            <div className="px-5 py-1.5  text-lg mt-1 text-white tracking-normal bg-blue-500 rounded-full">
              {/* Mobile only */}
              <a href="#" className="block lg:hidden">
                Explore
              </a>

              {/* Desktop only */}
              <div className="hidden lg:block">
                <Hover href="#">Explore</Hover>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-[#1d1d1f] bg-[#f5f5f7] flex flex-col gap-10 pt-10 pb-10 px-2">
        <h1 style={{fontFamily:'montserrat,semibold'}} className="text-2xl tracking-tighter mx-5 lg:m-10 font-semibold sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Get to know our products.
        </h1>
        <div className="flex gap-10  justify-evenly lg:justify-center  items-start flex-wrap" >
          <Product description={"Active noise cancellation."} heading={"Airpods 4"} image={"/airpods.png"} />
          <Product description={"With most advanced camera & Processor."} heading={"iPhone 16"} image={"/iphone.png"} />
          <Product description={"Apple 18wt adapter."} heading={"Adapter"} image={"/charger.png"} />
          <Product description={"5000Mh magsafe charger."} heading={"MagSafe"} image={"/magsafe.png"} />
          <Product description={"Magsafe charger."} heading={"MagSafe charger"} image={"/mag-charger.png"} />
          <Product description={"With most advanced camera & Processor."} heading={"iPhone 16"} image={"/iphone.png"} />
        </div>
      </div>
    </div>
  );
}

export default Page2;
