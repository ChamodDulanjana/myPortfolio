"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 500); // small delay for smooth transition
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <LoadingScreen />;

  return <>{children}</>;
}
