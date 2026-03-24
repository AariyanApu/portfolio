import GlowLine from "./glowline";

function Divider() {
  return (
    <div className="relative h-px w-full">
      <GlowLine
        orientation="horizontal"
        position="0"
        color="oklch(0.78 0.15 172 / 0.15)"
      />
    </div>
  );
}

export default Divider;
