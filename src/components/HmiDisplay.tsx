import React from 'react';

interface HmiDisplayProps {
  title: string;
  content: string;
  color?: 'green' | 'yellow' | 'red' | 'cyan';
  animated?: boolean;
}

const HmiDisplay: React.FC<HmiDisplayProps> = ({ title, content, color, animated }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'text-green-400';
      case 'yellow':
        return 'text-amber-400';
      case 'red':
        return 'text-red-500';
      case 'cyan':
        return 'text-cyan-400';
      default:
        return 'text-slate-200';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 h-48">
      <div className="border-b border-slate-700 pb-2 mb-4">
        <h3 className="text-slate-300 font-semibold text-lg">{title}</h3>
      </div>
      <div 
        className={`font-mono text-base whitespace-pre-line leading-relaxed ${getColorClasses()} ${
          animated ? 'animate-pulse' : ''
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default HmiDisplay;