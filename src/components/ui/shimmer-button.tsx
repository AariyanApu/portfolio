"use client";
import React from "react";

interface ShimmerButtonProps {
  text?: string;
  href?: string;
  shimmerColor?: string;
  className?: string;
}

// The main App component that renders our ShimmerButton
export default function ShimmerButton({
  text = "Shimmer Button",
  href,
  shimmerColor = "#06b6d4",
  className,
}: ShimmerButtonProps) {
  const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  const inner = (
    <button
      type="button"
      className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-full overflow-hidden group"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from var(--angle), transparent 25%, ${shimmerColor}, transparent 50%)`,
          animation: "shimmer-spin 2.5s linear infinite",
        }}
      />
      <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
        {text}
      </span>
    </button>
  );

  return (
    // Main container to center the button on the page
    <div
      className={`flex items-center justify-center font-sans ${className ?? ""}`}
    >
      <style>{customCss}</style>
      {href ? (
        <a href={href} download={href.endsWith(".pdf") ? true : undefined}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
