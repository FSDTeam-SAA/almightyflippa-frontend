import Image from "next/image";

export function RealTimeConnection() {
  return (
    <section className="relative w-full px-4 py-16 md:py-10 bg-black">
      <div className="container mx-auto">
       <div>
  {/* Mini Button */}
  <div className="w-[115px] h-[33px] mb-4">
    <Image
      src="/assets/minibutton.png"
      alt="Two Phones"
      width={1000}
      height={1000}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-[56px]">
    
    {/* Heading */}
    <div className="max-w-full lg:max-w-[504px]">
      <h3 className="text-[28px] sm:text-[32px] lg:text-[40px] 
        text-white font-semibold leading-[120%] uppercase">
        <span className="text-[#FBB41D]">Features</span> That Keep You in the Game
      </h3>
    </div>

    {/* Paragraph */}
    <div className="max-w-full lg:max-w-[412px]">
      <p className="text-sm sm:text-base text-[#E7E7E7] font-normal leading-[150%]">
        Built to match the way you play. Instant access, zero interruptions.
        Smart tools that adapt in real time. So the game never slows down.
      </p>
    </div>

  </div>
      </div>

      <div
  className="overflow-hidden rounded-[24px] px-4 sm:px-6 lg:px-10"
  style={{
    background:
      "linear-gradient(84.54deg, #FBB41D 0.86%, #7E5D18 95.33%)",
  }}
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
    
    {/* Left - Phone Image */}
    <div className="w-full h-[420px] sm:h-[420px] lg:h-[654px]">
      <Image
        src="/assets/mobile.png"
        alt="Two Phones"
        width={1000}
        height={1000}
        className="w-full h-full object-contain lg:object-cover"
      />
    </div>

    {/* Right - Content */}
    <div className="flex flex-col space-y-6 py-6 lg:py-0">
      
      {/* Arrow */}
      <div className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px]">
        <Image
          src="/assets/arrow_image.png"
          alt="Arrow"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-[120%] text-white">
        REAL-TIME CONNECTION
      </h2>

      {/* Text */}
      <div className="space-y-6 lg:space-y-[32px]">
        <p className="text-sm sm:text-base lg:text-[18px] text-[#E7E7E7] font-semibold leading-[150%]">
          Effortlessly keep your playlists, recent activity, favorites,
          and settings synced across every device. Start on one screen
          and continue on another.
        </p>

        <p className="text-sm sm:text-base lg:text-[18px] text-[#E7E7E7] font-semibold leading-[150%]">
          Any change you make on one device updates across all others in
          real time. Smooth, seamless, and surprisingly simple.
        </p>

        <p className="text-sm sm:text-base lg:text-[18px] text-[#E7E7E7] font-semibold leading-[150%]">
          Sync works when all devices are signed in using the same Apple
          account. This helps keep your data consistent and secure.
        </p>
      </div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
}
