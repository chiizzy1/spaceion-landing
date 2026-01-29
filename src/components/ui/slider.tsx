"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "onChange"> {
  defaultValue?: number[];
  max?: number;
  step?: number;
  onValueChange?: (val: number[]) => void;
  className?: string;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, defaultValue = [0], max = 100, step = 1, onValueChange, ...props }, ref) => {
    const [val, setVal] = React.useState(defaultValue[0]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setVal(newValue);
      onValueChange?.([newValue]);
    };

    const percentage = (val / max) * 100;

    return (
      <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div className="absolute h-full bg-emerald-500 transition-all" style={{ width: `${percentage}%` }} />
        </div>
        <input
          type="range"
          min={0}
          max={max}
          step={step}
          value={val}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          ref={ref}
          {...props}
        />
        <div
          className="absolute h-5 w-5 rounded-full border-2 border-emerald-500 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pointer-events-none shadow-sm"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
    );
  },
);
Slider.displayName = "Slider";

export { Slider };
