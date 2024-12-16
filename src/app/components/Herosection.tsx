import Image from "next/image";

export default function Herosection() {
    return (


        <div className="relative w-full h-auto flex-col lg:flex mt-4 ">
        {/* Hero Image */}
        <Image
          alt="hero image"
          src="/hersection.jpg"
          width={1540}
          height={716}
          className="w-full h-auto object-cover "
        />
      
        {/* Summer 2020 */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 sm:p-6 lg:p-10 ">
          {/* Subtitle */}
          <p className="font-normal text-[10px] sm:text-xs md:text-sm lg:text-base">
            SUMMER 2020
          </p>
      
          {/* Title */}
          <p className="leading-tight font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-3">
            NEW COLLECTION
          </p>
      
          {/* Description */}
          <p className="leading-snug text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-4 lg:w-[400px]">
            We know how large objects will act, but things on a small scale.
          </p>
      
          {/* Button */}
          <button className="mt-4 sm:mt-6 bg-[#2dc070] text-white font-semibold rounded py-2 px-4 text-xs sm:text-sm md:text-base lg:py-3 lg:px-6 lg:w-[228px] lg:h-[62px]">
            SHOP NOW
          </button>
        </div>
      </div>
    );
}