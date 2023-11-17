"use client";
import { navigation } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" absolute inset-2   z-20 sm:hidden">
        {!isOpen ? (
          <FaBars
            // make on click previous value reverse
            onClick={() => setIsOpen(!isOpen)}
            className="slate-color cursor-pointer "
            size={35}
          />
        ) : (
          <FaXmark
            onClick={() => setIsOpen(!isOpen)}
            className="slate-color cursor-pointer overscroll-none "
            size={35}
          />
        )}
      </div>
      {isOpen && (
        <>
          <div className="absolute inset-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-y-8 overscroll-none bg-background-color">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="text-4xl  hover:text-primary-color"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
