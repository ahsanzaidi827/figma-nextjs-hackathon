
import Image from 'next/image';

export default function Editorspick() {
  return (

    <div className="w-full flex justify-center py-4 bg-[#f5f5f5]">
<div className="w-full max-w-[1050px] bg-[#FAFAFA] p-5 md:p-10 flex flex-col gap-8">
  
  {/* Editor Pick */}
   <div className="text-center">
     <h3 className=" font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]">
       EDITOR’S PICK
     </h3>
     <p className="max-w-[347px] mx-auto text-[#737373] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px]">
       Problems trying to resolve the conflict between
     </p>
   </div>

   {/* Images Section */}
   <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center">
    
     {/* Men Image */}
     <div className="relative w-[48%] h-[300px] md:w-[510px]  md:h-[500px]">
       <Image
         src="/men.png"
        alt="men"
         width={170}
         height={170}
         className="w-full h-full  rounded-md"
      />
       <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 md:px-12 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] hover:bg-gray-100">
         MEN
       </button>
     </div>

     {/* Women Image */}
     <div className="relative w-[48%] md:w-[240px] h-[300px] md:h-[500px]">
       <Image
         src="/women2.png"
         alt="women"
         width={170}
         height={170}
         className="w-full h-full object-cover rounded-md"
       />
       <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 md:px-8 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] hover:bg-gray-100">WOMEN
       </button>
    </div>
     {/* Accessories and Kids Section */}
     <div className="w-full md:w-[240px] flex flex-col gap-4 md:gap-6 justify-center items-center">
      
       {/* Accessories Image */}
      <div className="relative w-[48%] h-[300px] md:h-[242px] lg:w-full ">
        <Image
          src="/accessories.png"
          alt="accessories"
          width={240}
          height={242}
          className="w-full h-full object-cover rounded-md"
        />
        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 md:px-6 py-1 md:py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[12px] md:text-[14px] hover:bg-gray-100">
          ACCESSORIES
        </button>
      </div>

       {/* Kids Image */}
       <div className="relative w-[48%] h-[300px] md:h-[242px] lg:w-full">
         <Image
           src="/kids.png"
           alt="kids"
           width={240}
           height={242}
           className="w-full h-full object-cover rounded-md"
         />
         <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 md:px-6 py-1 md:py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[12px] md:text-[14px] hover:bg-gray-100">
           KIDS
         </button>
       </div>
     </div>
   </div>
 </div>
 </div> 


   
  )
}


 



