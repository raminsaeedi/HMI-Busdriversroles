import React from 'react';
import { scenarios } from '../data/scenarios';

interface SidebarProps {
  selectedScenario: string;
  onScenarioSelect: (scenarioId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedScenario, onScenarioSelect }) => {
  return (
    <div className="w-full md:w-80 bg-slate-800 border-r border-slate-700 p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-100 mb-2">HMI-Szenarien</h2>
        <p className="text-slate-400 text-sm">
          Interaktive Prototypen für die technische Aufsicht
        </p>
      </div>
      
      <nav className="space-y-2">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => onScenarioSelect(scenario.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              selectedScenario === scenario.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-700 hover:text-slate-100'
            }`}
          >
            <span className="block font-medium">{scenario.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;