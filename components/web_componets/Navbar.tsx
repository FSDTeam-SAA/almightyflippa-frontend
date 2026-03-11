"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-[#FBB41D] text-[#131313] text-center py-2 px-4 md:px-0 text-xs md:text-base font-normal">
        Scheduler's all-in-one task management platform increase productivity and maintain team unity.
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#131313] backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/assets/logo.png" alt="Logo" width={1000} height={1000} className="w-[160px] h-[40px] object-cover" />
            </Link>



            {/* Right Icons and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-4">
                <Link href="https://apps.apple.com/ca/app/labby-tv/id6758971186">
                <button className="w-[24px] h-[24px]">
                  <Image src="/assets/n1.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
                </button>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.almightyflippa.labbytv">
                <button className="w-[24px] h-[24px]">
                  <Image src="/assets/n2.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
                </button>
                </Link>
                {/* <button className="w-[24px] h-[24px]">
                  <Image src="/assets/n3.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
                </button> */}
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-transparent">
                    <Menu className="!h-7 !w-7 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] bg-[#131313] border-gray-800">
                  <div className="flex flex-col gap-6 mt-8">
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                     <Link href="/" className="flex items-center gap-2 group">
              <Image src="/assets/logo.png" alt="Logo" width={1000} height={1000} className="w-[160px] h-[40px] object-cover" />
            </Link>
                    </Link>



                    {/* Mobile Icons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                      <Link href="https://apps.apple.com/ca/app/labby-tv/id6758971186">
                      <button className="w-[24px] h-[24px]">
                        <Image src="/assets/n1.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
                      </button>
                      </Link>
                      <Link href="https://play.google.com/store/apps/details?id=com.almightyflippa.labbytv">
                      <button className="w-[24px] h-[24px]">
                        <Image src="/assets/n2.png" alt="User" width={1000} height={1000} className="w-full h-full object-cover" />
                      </button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
