"use client";
import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "@/libs/motion";
import { navigation } from "@/utils/data";

export default function NavTextContainer() {
  return (
    <motion.div variants={textContainer} className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4 ">
        {navigation.map((item) => (
          <motion.a
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            variants={textVariant2}
            key={item.name}
            href={item.href}
            className="animate_color rounded-md px-3 py-2 text-sm font-semibold  hover:bg-secondary hover:text-primary"
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
