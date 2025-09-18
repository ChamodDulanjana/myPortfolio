import { useEffect, useState } from "react";

type Breakpoint = number | "sm" | "md" | "lg" | "xl";

const BREAKPOINTS: Record<Exclude<Breakpoint, number>, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useIsScreenWide(breakpoint: Breakpoint = "sm") {
  const resolvedBreakpoint =
    typeof breakpoint === "number" ? breakpoint : BREAKPOINTS[breakpoint];

  // Start with `false` so SSR has a safe default
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    // Only runs on client
    const handleResize = () =>
      setIsWide(window.innerWidth > resolvedBreakpoint);

    handleResize(); // run once on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resolvedBreakpoint]);

  return isWide;
}
