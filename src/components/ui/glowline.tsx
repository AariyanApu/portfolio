import type React from "react";

type Orientation = "vertical" | "horizontal";

interface GlowLineProps {
  orientation: Orientation;
  position: string;
  className?: string;
  color?: string;
}

const GlowLine: React.FC<GlowLineProps> = ({
  orientation,
  position,
  className = "",
  color = "var(--teal)",
}) => {
  const isVertical = orientation === "vertical";
  const containerClasses = isVertical
    ? "absolute w-px h-full"
    : "absolute w-full h-px";
  const positionStyle: React.CSSProperties = isVertical
    ? { left: position }
    : { top: position };
  const direction = isVertical ? "to bottom" : "to right";

  const gradient = `linear-gradient(${direction}, transparent, ${color}, transparent)`;

  const glowLayers = [
    {
      size: isVertical ? "w-1 -ml-0.5" : "h-1 -mt-0.5",
      blur: "blur-sm",
      opacity: "opacity-100",
    },
    {
      size: isVertical ? "w-2 -ml-1" : "h-2 -mt-1",
      blur: "blur-md",
      opacity: "opacity-60",
    },
    {
      size: isVertical ? "w-4 -ml-2" : "h-4 -mt-2",
      blur: "blur-lg",
      opacity: "opacity-40",
    },
  ];

  return (
    <div className={`${containerClasses} ${className}`} style={positionStyle}>
      {/* Core line */}
      <div className="absolute inset-0" style={{ background: gradient }} />

      {/* White shimmer */}
      <div
        className={`absolute inset-0 ${isVertical ? "w-0.5 -ml-px" : "h-0.5 -mt-px"} opacity-40`}
        style={{
          background: `linear-gradient(${direction}, transparent, white, transparent)`,
        }}
      />

      {/* Glow layers */}
      {glowLayers.map((layer) => (
        <div
          key={layer.blur}
          className={`absolute inset-0 ${layer.size} ${layer.blur} ${layer.opacity}`}
          style={{ background: gradient }}
        />
      ))}
    </div>
  );
};

export default GlowLine;
