"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";

import { navigation } from "@/utils/data";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect to close the navbar when the screen size is less than 640px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className=" absolute inset-2 z-20 sm:hidden">
        {!isOpen ? (
          <CgMenuRightAlt
            // make on click previous value reverse
            onClick={() => setIsOpen(!isOpen)}
            className=" cursor-pointer "
            size={35}
          />
        ) : (
          <FaXmark
            onClick={() => setIsOpen(!isOpen)}
            className=" cursor-pointer overscroll-none "
            size={35}
          />
        )}
      </div>
      {isOpen && (
        <>
          <div className="absolute inset-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-y-8  overscroll-none bg-background">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="text-4xl"
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
