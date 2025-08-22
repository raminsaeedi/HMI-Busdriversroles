import React from 'react';
import { scenarios } from '../data/scenarios';
import HmiDisplay from './HmiDisplay';
import StepNavigation from './StepNavigation';

interface MainContentProps {
  selectedScenario: string;
  currentStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  selectedScenario,
  currentStep,
  onPreviousStep,
  onNextStep,
}) => {
  const scenario = scenarios.find(s => s.id === selectedScenario);
  const step = scenario?.steps[currentStep];

  if (!scenario || !step) {
    return (
      <div className="flex-1 p-8 bg-slate-900 text-slate-200">
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Szenario nicht gefunden</h2>
          <p>Bitte wählen Sie ein Szenario aus der Sidebar aus.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 md:p-8 bg-slate-900 text-slate-200 overflow-y-auto">
      {/* Persona Introduction */}
      <div className="mb-8 p-6 bg-slate-800 rounded-lg border border-slate-700">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
          Ein Tag im Leben von Majid
        </h1>
        <p className="text-slate-300 leading-relaxed">
          Majid ist ein erfahrener Bus-Supervisor mit über 14 Jahren Erfahrung. 
          Er ist ein pragmatischer Profi, der Technik schätzt, die ihm den Rücken freihält. 
          Erleben Sie, wie das HMI-Konzept ihn in seinem anspruchsvollen Arbeitsalltag unterstützt.
        </p>
      </div>

      {/* Scenario Title */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">
          {scenario.title}
        </h2>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-24"></div>
      </div>

      {/* HMI Displays */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <HmiDisplay
          title="PDD - Primäres Fahrdisplay"
          content={step.pdd.content}
          color={step.pdd.color}
          animated={step.pdd.animated}
        />
        <HmiDisplay
          title="CSC - Zentrale Aufsichtskonsole"
          content={step.csc.content}
          color={step.csc.color}
        />
      </div>

      {/* Step Description */}
      <div className="mb-6 p-6 bg-slate-800 rounded-lg border border-slate-700">
        <h3 className="text-lg font-semibold text-slate-100 mb-3">Szenario-Beschreibung</h3>
        <p className="text-slate-300 leading-relaxed">
          {step.narration}
        </p>
      </div>

      {/* Step Navigation */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={scenario.steps.length}
        onPreviousStep={onPreviousStep}
        onNextStep={onNextStep}
      />
    </div>
  );
};

export default MainContent;