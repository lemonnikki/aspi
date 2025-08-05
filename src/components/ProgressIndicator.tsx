
import { useState, useEffect } from "react";

interface ProgressStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  autoProgress?: boolean;
  intervalMs?: number;
}

const ProgressIndicator = ({ 
  steps, 
  autoProgress = true, 
  intervalMs = 4000 
}: ProgressIndicatorProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!autoProgress) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [autoProgress, intervalMs, steps.length]);

  return (
    <div className="absolute left-0 right-0 bottom-8 z-20 w-full px-8 flex flex-col">
      {/* Top Line */}
      <div className="w-full border-t border-black/30 mb-4"></div>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Step Content - Left */}
        <div className="flex items-center text-left">
          <div className="text-left flex flex-col items-start">
            <div className="mb-1 transition-all duration-500 ease-in-out">
              {steps[currentStep].icon}
            </div>
            <div className="transition-all duration-500 ease-in-out transform">
              <span className="text-white font-semibold text-lg leading-tight block">
                {steps[currentStep].title}
              </span>
              <div className="text-white/80 text-base leading-snug mt-1">
                {steps[currentStep].description}
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bars - Right */}
        <div className="flex items-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentStep 
                  ? 'w-8 bg-black' 
                  : index < currentStep 
                    ? 'w-6 bg-black/60' 
                    : 'w-6 bg-black/30'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Bottom Line */}
      <div className="w-full border-t border-black/30 mt-4"></div>
    </div>
  );
};

export default ProgressIndicator;
