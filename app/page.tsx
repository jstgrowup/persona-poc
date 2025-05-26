"use client";
import dynamic from "next/dynamic";
const TerminalComponent = dynamic(() => import("@/components/persona"), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <TerminalComponent />
    </div>
  );
}
