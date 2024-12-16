
import Image from "next/image"
export default function Greensection (){

    return(

        <div className="relative w-full h-auto lg:h-auto lg:w-[1440px] bg-[#0A8E67] lg:mt-[800px] ">

            <div className="pl-[70px] lg:pl-[209px] w-[518px] lg:w-[1036px]">


               {/* ye div jisme mera content aega  */}
                <div className="w-[524px] lg:w-[1049px] flex flex-col lg:flex-row gap-[15px] lg:gap[30px]">

                    {/* summer 2020 wala part */}
                    <div className="w-[254px] lg:w-[509px] ">
                        <h5 className="font-normal text-[10px] lg:text-[20px] text-[#FFFFFF] mt-10 lg:mt-28">SUMMER 2020</h5>
                        <h1 className="w-[254px] lg:w-[509px] text-[#FFFFFF] text-bold mt-2 text-[24px] lg:text-[58px] lg:mt-7">Vita Classic Product</h1>
                        <h4 className="w-[170px] lg:w-[340px] text-[#FFFFFF] text-normal mt-2 text-[7px] lg:text-lg lg:mt-7">We know how large objects will act, We know how are objects will act, We know</h4>

                        {/* $ and add to cart */}
                        <div className="w-[100px] lg:w-[295px] flex gap-[12px] lg:gap-[34px] justify-center items-center">
                            <h5 className=" w-[40px] lg:w-[100px]  text-bold text-[7px] lg:text-[20px] text-[#FFFFFF] mt-2 lg:mt-7">$16.48</h5>
                            <button className="w-[90px] lg:w-[300px] text-center bg-green-400 lg:text-[24px] text-bold text-[7px]  lg:mt-7 text-[#FFFFFF] mt-2 py-1 lg:py-2">ADD TO CART</button>


                        </div>


                    </div>


                    {/* Man pic */}
                    <div>
                        <Image src={"/greenman.png"} width={220} height={340} alt="" className="lg:w-[443px] lg:h-[550px] lg:mt-20" />
                    </div>


                </div>


            </div>

        </div>
    )
}

