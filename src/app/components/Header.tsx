
import Image from "next/image"
import Link from "next/link"
export default function Header () {


    return (

        <div className="w-[full] mt-6 px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[58px]">
                {/* Bandage  */}
                <div className="flex items-center">
                   <h3 className="font-bold sm:text-xl text-lg  lg:text-2xl leading-[32px]">
                    Bandage
                   </h3>
                   </div>

                     {/* Home , Shop , About , Blog , Contact , Pages */}
                    <nav className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:items-center w-full lg:w-auto justify-center items-center">
                      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm lg:text-base text-[#737373]">
                        <li className="cursor-pointer">Home</li>
                        <li>
                        <li className="cursor-pointer">Shop</li>
                        </li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Blog</li>
                        <li className="cursor-pointer">Contact</li>
                        <li className="cursor-pointer">Pages</li>
                      </ul>

                        {/* Login Rejister */}
                        <div className="flex flex-col sm:flex-row items-center mt-4 lg:mt-0 lg:ml-20 gap-4">
                           <Link href={"./"} className="text-sm font-bold text-[#23A6F0]">
                           Login / Register 
                           </Link>

                             {/*  Icons */}
                            <ul className="flex gap-4 items-center  ">
                             <li >
                               <Image src={"/search.png"} width={20} height={20} alt="Search"   />
                               </li>
                              <li>
                               <Image src={"/shopping.png"} width={20} height={20} alt="Shopping Cart "  />
                              </li>
                              <li>
                               <Image src={"/dil.png"} width={20} height={20} alt="Favorites "    />
                              </li>
                            </ul>
                        </div>    
                    </nav>
                  
                    
            </div>
        </div>
            

    )
}