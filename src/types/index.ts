export interface Step {
  narration: string;
  pdd: {
    content: string;
    color?: 'green' | 'yellow' | 'red' | 'cyan';
    animated?: boolean;
  };
  csc: {
    content: string;
    color?: 'green' | 'yellow' | 'red' | 'cyan';
  };
}

export interface Scenario {
  id: string;
  title: string;
  steps: Step[];
}

export interface AppState {
  selectedScenario: string;
  currentStep: number;
}