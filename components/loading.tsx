"use client";

export default function LoadingScreen() {
  return (
    <div className="flex w-full h-screen items-center justify-center z-[9999]">
        {/* Animated logo / circle */}
        <div className="animate-spin w-12 h-12 rounded-full border-4 border-indigo-400 border-t-transparent"></div>
    </div>
  );
}
