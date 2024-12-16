import Image from "next/image"
import Link from "next/link";



export default function Footer() {
    return (
      

<footer className="relative bg-white w-full">
  {/* Top Section */}
  <section className="bg-[#f9f9f9] py-6 md:py-10">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div className="text-center md:text-left">
        <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
      </div>
      {/* Social Icons */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <Image src={"/facebook.png"} width={24} height={24} alt="fb" className="w-6 h-6" />
        <Image src={"/insta.png"} width={24} height={24} alt="insta" className="w-6 h-6" />
        <Image src={"/twitter.png"} width={24} height={24} alt="twitter" className="w-6 h-6" />
      </div>
    </div>
  </section>

  {/* Divider */}
  <div className="border-t border-[#e6e6e6]" />

  {/* Footer ka overall content is div mein store hoga */}
  <section className="bg-white py-8 md:py-12">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
      {/* Company Info */}
      <div>
        <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
        <nav className="flex flex-col gap-2.5 mt-3">
          <Link href="#" className="text-[#727272] text-sm font-normal">About Us</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Careers</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">We Are Hiring</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Blog</Link>
        </nav>
      </div>

      {/* Legal */}
      <div>
        <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
        <nav className="flex flex-col gap-2.5 mt-3">
          <Link href="#" className="text-[#727272] text-sm font-normal">Terms of Service</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Privacy Policy</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Cookies</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Refund Policy</Link>
        </nav>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-[#252b42] text-base font-bold">Features</h2>
        <nav className="flex flex-col gap-2.5 mt-3">
          <Link href="#" className="text-[#727272] text-sm font-normal">Business Marketing</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">User Analytics</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Live Chat</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Unlimited Support</Link>
        </nav>
      </div>

      {/* Resources */}
      <div>
        <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
        <nav className="flex flex-col gap-2.5 mt-3">
          <Link href="#" className="text-[#727272] text-sm font-normal">iOS & Android</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Watch a Demo</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">Customers</Link>
          <Link href="#" className="text-[#727272] text-sm font-normal">API</Link>
        </nav>
      </div>

      {/* Get in Touch */}
      <div>
        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
        <div className="mt-3 relative">
          <input
            type="email"
            className="w-full h-10 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm"
            placeholder="Your Email"
          />
          <button className="absolute right-0 top-0 h-10 px-4 bg-[#23a6f0] text-white text-sm rounded-r-lg">
            Subscribe
          </button>
        </div>
        <p className="text-[#727272] text-xs mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </section>

  {/* Bottom Section */}
  <section className="bg-[#f9f9f9] py-4">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <p className="text-[#727272] text-sm font-bold text-center md:text-left">
        Made with love by Finland. All rights reserved.
      </p>
      <div className="flex gap-4 mt-4 md:mt-0">
        {/* Additional links or logos can be added here */}
      </div>
    </div>
  </section>
</footer>

    );
  }
   
       

