
import Image from "next/image";
import Link from "next/link";

export default function Featureproduct () {

    return (

        <div className="relative mt-5 w-full h-auto ">

            {/* ek aisa div jisme mera all content aega */}
            <div className="container w-[full] h-auto lg:w-[1124px] lg:h-[195px] justify-center items-center flex-col lg:lex-col lg:gap-5">

            {/* feature product  div here */}
                <div className=" justify-items-center lg:mx-36 lg:w-[1049px] ">
                    <h2 className="text-center font-normal text-[#737373] text-[14px] font-Montserrat">Featured Products</h2>
                    <h3 className="text-center font-semibold text-[#252B42] text-[16px] font-Montserrat">BESTSELLER PRODUCTS</h3>
                    <p className="text-center text-[12px] lg:text-[18px] font-Montserrat font-normal text-[#737373]">Problems trying to resolve the conflict between </p>

                </div>



             {/* first div of best seller product in which we have 4 graphic designer */}
                <div className="flex flex-col justify-center items-center   lg:w-[1049px] lg:h-[400px]   lg:flex-row lg:gap-[40px] lg:mx-36 lg:justify-center lg:item-center lg:mt-10 ">
 
                    {/* first graphic designer */}
                    <div className="w-[170px]   mt-5 ">
                        <Image src={"/graphic1.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                    {/* second graphic designer */}
                    <div className="w-[170px]  mt-5  ">
                        <Image src={"/graphic2.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                    {/* third graphic designer */}
                    <div className="w-[170px]  mt-5  ">
                        <Image src={"/graphic3.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                    {/* fourth graphic designer */}
                    <div className="w-[170px]  mt-5  ">
                        <Image src={"/graphic4.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                </div>

                {/* second div of best seller product in which we have 4 graphic designer */}
                <div className="flex flex-col justify-center items-center   lg:w-[1049px] lg:h-[400px]   lg:flex-row lg:gap-[40px] lg:mx-36 lg:justify-center lg:item-center lg:mt-10">
 
                    {/* first graphic designer */}
                    <div className="w-[170px]   mt-5 ">
                        <Image src={"/graphic5.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                    {/* second graphic designer */}
                    <div className="w-[170px]  mt-5  ">
                        <Image src={"/graphic6.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                    {/* third graphic designer */}
                    <div className="w-[170px]  mt-5  ">
                        <Image src={"/graphic7.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>

                    {/* fourth graphic designer */}
                    <div className="w-[170px]  mt-5  ">
                        <Image src={"/graphic8.png"} alt="" width={239} height={427} />
                        <h5 className="font-Montserrat font-bold text-[16px] text-center mt-4">Graphic Design</h5>
                        <Link href={""} className="font-bold font-Montserrat text-[#737373] text-[14px] text-center"> <p>English Department</p></Link>
                        
                        {/* $ */}
                        <div className="flex gap-[5px] items-center justify-center">
                            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">$16.48</h5>
                            <h5 className="font-bold text-[16px] text-center text-[#23856D]">$16.48</h5>

                        </div>

                    </div>



            </div>

        </div>
        </div>
        
       
    )
}