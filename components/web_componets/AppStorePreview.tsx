import Image from "next/image";
import buttonimage from "../../public/assets/Button.png"

export function  AppStorePreview() {
  return (
    <section className="relative w-full  px-4 md:px-0 pt-16 md:pt-24"
      style={{
        background: "linear-gradient(84.54deg, #D48300 0.86%, #FFAA2D 95.32%)",
      }}
    >
      <div className="max-w-[1170px] lg:max-w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-primary-foreground md:pl-[350px]">
            <h2 className="text-4xl md:text-[48px] font-bold leading-tight flex items-center gap-3 text-[#FFFFFF]">

              Get the app now
            </h2>

            <p className="text-xl text-[#FAFAFA] font-normal leading-[150%] mt-3 max-w-[440px]">
              Install in seconds and start enjoying right away. No trials, no hidden catches—just smooth, hassle-free
              entertainment.
            </p>

            <button className="bg-transparent w-[130px] h-[40px] md:h-[56px] md:w-[157px] hover:scale-105 duration-300">
              <Image src={buttonimage} alt="Google Play" width={1000} height={1000} className="w-full h-full object-cover rounded-[8px]" />
            </button>
          </div>

          {/* Right - App Store Preview */}
          <div className="relative">
            <div className=" absolute  top-[50%] translate-y-[-50%] left-[-300px]">
              <Image
                src="/assets/overly.png"
                alt="Phone Mockup"
                width={1000}
                height={1000}
                className="w-full h-full rounded-[12px] object-cover"
              />
            </div>
            <div className="bg-white pt-[20px] px-[32px] rounded-tl-[12px] rounded-bl-[12px]">
              <div className="flex gap-3 pb-[54px]">
                <div className="text-[24px] text-[#323232] font-medium">App Store</div>
                <div className="text-[24px] text-[#CDCDCD] font-medium">Preview</div>
              </div>
              <Image
                src="/assets/app2.png"
                alt="Phone Mockup"
                width={1000}
                height={1000}
                className="w-full h-full rounded-[12px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
