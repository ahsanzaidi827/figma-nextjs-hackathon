
import Image from "next/image";


export default function Universe (){

    return(


        <div className="min-h-screen flex items-center justify-center bg-white relative">
        <div className="container flex flex-col lg:flex-row items-center mx-auto px-2 lg:px-16">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[200px] h-[300px] lg:w-[400px] lg:h-[500px] lg:ml-8">
              <Image
                src="/redcouple.png" 
                alt="Winter Collection"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
  
          {/* Summer 2020 , Part of the Neural Universe */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <p className="text-gray-500 uppercase text-sm lg:tracking-wide mb-2">
              Summer 2020
            </p>
            <h1 className="text-lg lg:text-4xl font-bold mb-4 text-gray-800">
              Part of the Neural Universe
            </h1>
            <p className="text-gray-600 mb-6 text-xs lg:text-lg">
              We know how large objects will act, but things on a small scale.
            </p>
  
            <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-start">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition text-[10px] lg:text-[13px]">
                BUY NOW
              </button>
              <button className="border-2 border-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold text-[10px] hover:border-gray-400 transition lg:text-[13px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>


    )
}