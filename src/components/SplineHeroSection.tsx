"use client";

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineHeroSection() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-[16rem] md:text-[10rem] font-bold text-white leading-none">
            Vision Rover
          </h1>
          <p className="mt-4 text-white max-w-lg text-2xl">
            Интерактивная 3D модель автономного разведчика. Преодолевает
            непроходимые территории без участия человека.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}

export default SplineHeroSection;
