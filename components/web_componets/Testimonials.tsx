


"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel" // ← make sure this is imported
import { useEffect, useState } from "react"

export function Testimonials() {
  const testimonials = [
    {
      name: "AlexR",
      location: "United Kingdom",
      text: "This app is awesome, and the developer listens to user feedback and implements updates quick!",
    },
    {
      name: "Mosh",
      location: "United Kingdom",
      text: "Well designed and thoughtfully built. You can tell the team really cares about usability. A joy to use every day.",
    },
    {
      name: "John",
      location: "United Kingdom",
      text: "Simple, powerful, and free. Most features are available without restrictions, and the performance is excellent.",
    },
    {
      name: "John",
      location: "United Kingdom",
      text: "Simple, powerful, and free. Most features are available without restrictions, and the performance is excellent.",
    },
    {
      name: "John",
      location: "United Kingdom",
      text: "Simple, powerful, and free. Most features are available without restrictions, and the performance is excellent.",
    },
  ]

  const features = [
    {
      icon: "/assets/t1.png",
      title: "Share your channels",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
    {
      icon: "/assets/t2.png",
      title: "Parental lock",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
    {
      icon: "/assets/t3.png",
      title: "EPG reminders",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
    {
      icon: "/assets/t4.png",
      title: "Email support",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
  ]

  // ── Carousel logic ───────────────────────────────────────
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative w-full bg-black px-4 py-16 md:py-24">
      <div className="container mx-auto">
        {/* Testimonials - now using shadcn Carousel */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-[48px] text-[#FBB41D] font-bold text-center mb-6">
            Loved by our community
          </h2>
          <p className="text-center text-[#FAFAFA] text-[18px] font-normal max-w-[479px] mx-auto mb-12 leading-[150%]">
            Our users inspire everything we build. See what people around the world are saying after using the app in
            real life.
          </p>

          <div className="relative">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true, // optional: makes it infinite
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="bg-[#191919] rounded-lg p-6 h-full">
                      <p className="text-[#FAFAFA] max-w-[300px] mb-4 text-[18px] leading-[150%]">
                        {testimonial.text}
                      </p>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#E88D09] text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                      <div>
                        <div className="font-bold text-[#FAFAFA] text-[18px]">— {testimonial.name}</div>
                        <div className="text-[14px] text-[#B6B6B6]">{testimonial.location}</div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Custom dots - fully clickable & sync with carousel */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${current === index 
                      ? "bg-[#FBB41D] scale-125" 
                      : "bg-[#4A4A4A] hover:bg-[#777]"}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid - unchanged */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-[60px] h-[60px] bg-primary/10 rounded-2xl flex items-center justify-center text-3xl border border-primary/20">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-[#FFFFFF] mb-2">{feature.title}</h3>
                  <p className="text-[18px] text-[#FAFAFA] leading-[150%]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}