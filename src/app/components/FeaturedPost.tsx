import Image from "next/image";

export default function FeaturedPost() {

    return(

        <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Practice Advice */}
      <div className="text-center mb-8">
        <p className="text-blue-500 font-semibold text-[12px] lg:text-[17px]  ">Practice Advice</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-2 text-[18px] lg:text-[32px]  ">Featured Posts</h2>
        <p className="text-gray-600 text-[12px] lg:text-[17px] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics, Newtonian mechanics
        </p>
      </div>

      {/* Loudest à la Madison #1 (L'integral)  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg ">
          <Image
            src="/f1.png"
            alt="Post 1"
            width={350}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <h3 className="text-lg font-semibold mt-2 mb-2">
              Loudest à la Madison #1 (L'Integral)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We focus on ergonomics and meeting you where you work. It’s only a
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span>22 April 2021</span>
              <span>10 comments</span>
            </div>
          </div>
        </div>

        {/* Loudest à la Madison #1 (L'integral) */}
        <div className="bg-white shadow-lg rounded-lg ">
          <Image
            src="/f2.png"
            alt="Post 2"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <h3 className="text-lg font-semibold mt-2 mb-2">
              Loudest à la Madison #1 (L'Integral)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We focus on ergonomics and meeting you where you work. It’s only a
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span>22 April 2021</span>
              <span>10 comments</span>
            </div>
          </div>
        </div>

        {/* Loudest à la Madison #1 (L'integral) */}
        <div className="bg-white shadow-lg rounded-lg ">
          <Image
           src="/f3.png"
            alt="Post 3"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <h3 className="text-lg font-semibold mt-2 mb-2">
              Loudest à la Madison #1 (L'Integral)
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We focus on ergonomics and meeting you where you work. It’s only a
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span>22 April 2021</span>
              <span>10 comments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}