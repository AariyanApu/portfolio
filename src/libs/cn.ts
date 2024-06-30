import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
