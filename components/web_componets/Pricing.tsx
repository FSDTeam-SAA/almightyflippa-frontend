

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  const proPricing = {
    monthly: { price: "$2.49", label: "Monthly", note: "" },
    quarterly: { price: "$6.99", label: "Quarterly", note: "≈ $2.33/month" },
    yearly: { price: "$19.99", label: "Yearly", note: "≈ $1.67/month" },
  }

  const freeFeatures = [
    "Unlimited playlists",
    "Global search",
    "Playlist and item customization",
    "Airing Now EPG",
    "Google Chromecast",
    "Apple AirPlay",
  ]

  const proFeatures = [
    "Instant sync across devices",
    "Unlimited EPG navigation",
    "EPG reminders",
    "No watermarks",
    "No PRO subscription ads",
    "No device limit",
    "Supports ongoing app development",
    "Offline playback",
  ]

  return (
    <section
      className="relative w-full px-4 py-16 md:py-[96px]"
      style={{
        background: "linear-gradient(346.79deg, #E4A41C 8.19%, #74530E 89.72%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-[104px]">
          <h2 className="text-4xl md:text-[40px] font-bold text-[#FFFFFF] mb-4">Simple, transparent pricing</h2>
          <p className="text-base font-normal text-[#E7E7E7]">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
          {/* Free Card */}
          <div className="relative rounded-2xl p-8 md:p-6 lg:p-8 border-2 bg-[#131313] border-[#B6B6B6] transition-transform">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-2 text-center">Free</h3>
              <p className="text-base font-normal text-[#E7E7E7] text-center">
                Perfect for small teams and side projects
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-3 mt-6">
                <span className="text-4xl font-bold text-[#FFFFFF]">$0</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {freeFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#FFFFFF]">
                  <span className="text-[#26AF0B] text-lg flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full rounded-lg font-bold bg-[#FBB41D] text-[#131313] hover:bg-[#FBB41D]/90" size="lg">
              Get Started
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Pro Card */}
          <div className="relative rounded-2xl p-8 md:p-6 lg:p-8 border-2 bg-[#131313] border-[#B6B6B6] transition-transform">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-2 text-center">Pro</h3>
              <p className="text-base font-normal text-[#E7E7E7] text-center">For growing teams that need more power</p>

              <div className="flex justify-center gap-2 mt-4 mb-6">
                {Object.entries(proPricing).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPeriod(key)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      selectedPeriod === key
                        ? "bg-[#FBB41D] text-[#131313]"
                        : "bg-[#2A2A2A] text-[#E7E7E7] hover:bg-[#3A3A3A]"
                    }`}
                  >
                    {value.label}
                  </button>
                ))}
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span className="text-4xl font-bold text-[#FFFFFF]">
                  {proPricing[selectedPeriod as keyof typeof proPricing].price}
                </span>
              </div>
              {proPricing[selectedPeriod as keyof typeof proPricing].note && (
                <p className="text-xs text-[#B6B6B6] text-center">
                  {proPricing[selectedPeriod as keyof typeof proPricing].note}
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-6">
              {proFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#FFFFFF]">
                  <span className="text-[#26AF0B] text-lg flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full rounded-lg font-bold bg-[#FBB41D] text-[#131313] hover:bg-[#FBB41D]/90" size="lg">
              Get Started
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
