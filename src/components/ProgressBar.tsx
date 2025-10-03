import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  answered: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, answered }) => {
  const progressPercentage = (current / total) * 100;
  const answeredPercentage = (answered / total) * 100;

  return (
    <div className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress: {current}/{total}
          </span>
          <span className="text-sm text-gray-600">
            Answered: {answered}/{total} ({Math.round(answeredPercentage)}%)
          </span>
        </div>
        
        <div className="relative">
          {/* Background bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            {/* Answered progress (green) */}
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${answeredPercentage}%` }}
            />
            {/* Current position indicator */}
            <div 
              className="absolute top-0 h-2 w-1 bg-blue-600 rounded-full transition-all duration-300"
              style={{ left: `${progressPercentage}%`, transform: 'translateX(-50%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
