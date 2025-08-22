import React, { useState } from 'react';
import { scenarios } from './data/scenarios';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedScenario, setSelectedScenario] = useState<string>(scenarios[0].id);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleScenarioSelect = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setCurrentStep(0); // Reset to first step when changing scenario
  };

  const handleNextStep = () => {
    const scenario = scenarios.find(s => s.id === selectedScenario);
    if (scenario && currentStep < scenario.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="flex flex-col md:flex-row h-screen">
        <Sidebar
          selectedScenario={selectedScenario}
          onScenarioSelect={handleScenarioSelect}
        />
        <MainContent
          selectedScenario={selectedScenario}
          currentStep={currentStep}
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
      </div>
    </div>
  );
}

export default App;