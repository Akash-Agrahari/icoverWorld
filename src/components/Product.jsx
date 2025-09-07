import React from "react";
import Hover from "../Hover";

function Product({ heading, description, image }) {
  return (
    <div
      style={{ fontFamily: "Montserrat, Bold" }}
      className=" lg:w-100 w-30 relative justify-center text-[#1d1d1f] items-center gap-5 flex flex-col "
    >
      <img
        className="object-contain w-40 h-40 lg:w-50 lg:h-50 "
        src={image}
        alt={image}
      />
      <div className=" flex flex-col gap-1 justify-center items-center">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <p className="lg:text-lg text-sm text-center font-medium">
          {description}
        </p>
        <div className="px-10 cursor-pointer py-2 rounded-full mt-2 bg-blue-500 text-white">
          <a href="#" className="block lg:hidden">
            Shop
          </a>

          {/* Desktop only */}
          <div className="hidden lg:block">
            <Hover href="#">Shop</Hover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
