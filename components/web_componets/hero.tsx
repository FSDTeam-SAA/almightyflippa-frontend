


import Image from "next/image"
import buttonimage from "../../public/assets/Button.png"

export function Hero() {
  return (
    <section className="relative w-full px-4 flex items-center"
      style={{
        background: "linear-gradient(84.54deg, #D48300 0.86%, #FFAA2D 95.32%)",
      }}
    >
      <div className="container mx-auto w-full grid grid-cols-12 lg:gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 w-fit bg-[#E5C589] rounded-full px-3 py-1 ">
            <Image src="/assets/check.png" alt="Icon" width={1000} height={1000} className="w-[16px] h-[16px] object-cover" />
            <span className="text-sm font-medium text-[#424242]">
              Your TV your control
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-[60px] font-semibold text-[#131313] leading-[120%]">
            <span className="text-[#FFFFFF]">LABBY TV</span>
            — THE APP REDEFINING THE WAY YOU PLAY
          </h1>

          <p className="text-base text-[#424242] font-normal">
            Created by expert developers with more than a decade of success building globally recognized iOS and tvOS apps enjoyed by millions.
          </p>

          <div className="flex  gap-4 pt-4">
            <button className="bg-transparent w-[130px] h-[40px] md:h-[56px] md:w-[157px] hover:scale-105 duration-300">
              <Image src={buttonimage} alt="Google Play" width={1000} height={1000} className="w-full h-full object-cover rounded-[8px]" />
            </button>
            <button className="bg-transparent hover:scale-105 duration-300 flex items-center gap-2 text-base font-bold text-[#131313]">
              <Image src="/assets/buton_icon.png" alt="Watch Videos" width={1000} height={1000} className="w-[32px] h-[32px] object-cover" />
              <span>Watch Videos</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 md:gap-8 pt-[53px]">
            <div>
              <div className="text-2xl md:text-[32px] font-bold text-[#FFFFFF]">50K+</div>
              <div className="text-base text-[#424242] mt-4">Active Users</div>
            </div>
            <div className="hidden md:block md:h-[78px] bg-[#B6B6B6] w-[2px]" />
            <div>
              <div className="text-2xl md:text-[32px] font-bold text-[#FFFFFF]">99.9%</div>
              <div className="text-base text-[#424242] mt-4">Uptime</div>
            </div>
            <div className="hidden md:block md:h-[78px] bg-[#B6B6B6] w-[2px]" />
            <div>
              <div className="text-2xl md:text-[32px] font-bold text-[#FFFFFF]">4.9/5</div>
              <div className="text-base text-[#424242] mt-4">Rating</div>
            </div>
          </div>
        </div>

        {/* Right - Phone Mockup */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[716px] w-full flex items-center justify-center col-span-12 lg:col-span-5">
          <Image
            src="/assets/banner_v2.png"
            width={1000}
            height={1000}
            alt="Phone Mockup"
            className="w-full h-full object-cover z-10"
          />

          {/* Subbanner - only on large screens */}
          <div className="hidden lg:block w-[222px] h-[222px] absolute top-[100px] right-[-150px] overflow-auto">
            <div className="absolute inset-0 bg-#FFFBF3"></div>
            <Image
              src="/assets/L.png"
              alt="Phone Mockup"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
           <div className="hidden lg:block w-[222px] h-[222px] absolute bottom-[30px] left-[-190px] overflow-auto">
            <div className="absolute inset-0 bg-#FFFBF3"></div>
            <Image
              src="/assets/L.png"
              alt="Phone Mockup"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
