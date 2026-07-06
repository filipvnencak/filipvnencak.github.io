/**
 * Fixed, non-interactive ambient background:
 *  - deep near-black base
 *  - faint perspective grid that fades toward the bottom
 *  - two slowly drifting gradient "glow" blobs (violet + cyan)
 *  - a fine noise/vignette for depth
 * All pure CSS so it costs ~nothing at runtime.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Violet glow */}
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-brand/20 blur-[130px] animate-pulse-glow" />

      {/* Cyan glow, offset + counter-drift */}
      <div className="absolute right-[-10rem] top-1/3 h-[34rem] w-[34rem] rounded-full bg-cyan-brand/10 blur-[130px] animate-pulse-glow" />

      {/* Fuchsia accent low-left */}
      <div className="absolute bottom-[-12rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-brand/10 blur-[120px]" />

      {/* Vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#07070c_100%)]" />
    </div>
  );
}
