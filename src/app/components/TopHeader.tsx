
import Image from "next/image";

export default function TopHeader() {
  return (
    <div className=" h-auto w-full  bg-[#252B42]">
    <div className="flex flex-col md:flex-row justify-between items-center w-full  md:px-[24px] py-[8px] md:h-[58px]">

      {/* (225) 555-0118   michelle.rivera@example.com */}
      <div className="flex flex-col sm:flex-row gap-[8px] items-center">
        <button className="flex items-center gap-[5px] text-white">
          <Image src={"/phone.png"} alt="phone" width={14} height={14} />
          <span className="font-Montserrat font-semibold text-xs md:text-[14px]">
            (225) 555-0118
          </span>
        </button>
  
        <button className="flex items-center gap-[5px] text-white">
          <Image src={"/email.png"} alt="mail" width={16} height={16} />
          <span className="font-Montserrat text-xs md:text-[14px]">
            michelle.rivera@example.com
          </span>
        </button>
      </div>
  
      {/* Follow Us and get a chance to win 80% off */}
      <h6 className="font-Montserrat font-semibold text-xs md:text-[14px] text-white text-center mt-2 md:mt-0">
        Follow Us and get a chance to win 80% off
      </h6>
  
      {/*Follow Us: */}
      <div className=" sm:flex-row gap-[8px] flex flex-col items-center mt-2 md:mt-0">
        <h6 className="font-Montserrat text-xs md:text-[14px] text-white">
          Follow Us:
        </h6>
        <div className="flex gap-[10px]">
          <Image src={"/insta.png"} alt="Instagram" width={16} height={16} />
          <Image src={"/youtube.png"} alt="YouTube" width={16} height={16} />
          <Image src={"/facebook.png"} alt="Facebook" width={16} height={16} />
          <Image src={"/twitter.png"} alt="Twitter" width={16} height={16} />
        </div>
      </div>
    </div>
  </div>
  

  );
}



      
       










      


      





