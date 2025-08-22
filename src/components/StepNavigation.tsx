import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onPreviousStep,
  onNextStep,
}) => {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
      <button
        onClick={onPreviousStep}
        disabled={currentStep === 0}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          currentStep === 0
            ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
            : 'bg-slate-600 text-slate-200 hover:bg-slate-500'
        }`}
      >
        <ChevronLeft size={16} />
        Vorheriger Schritt
      </button>
      
      <div className="text-slate-400 font-mono">
        Schritt {currentStep + 1} von {totalSteps}
      </div>
      
      <button
        onClick={onNextStep}
        disabled={currentStep === totalSteps - 1}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          currentStep === totalSteps - 1
            ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
            : 'bg-slate-600 text-slate-200 hover:bg-slate-500'
        }`}
      >
        Nächster Schritt
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default StepNavigation;