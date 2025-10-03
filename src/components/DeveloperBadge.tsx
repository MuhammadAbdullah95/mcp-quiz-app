import React, { useState, useEffect } from 'react';

interface DeveloperBadgeProps {
  variant?: 'floating' | 'inline' | 'signature';
  showAnimation?: boolean;
}

const DeveloperBadge: React.FC<DeveloperBadgeProps> = ({ 
  variant = 'inline', 
  showAnimation = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('👨‍💻');

  const emojis = ['👨‍💻', '🚀', '⚡', '🎯', '💻', '🏆', '✨', '🔥'];

  useEffect(() => {
    setIsVisible(true);
    
    if (showAnimation) {
      const interval = setInterval(() => {
        setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [showAnimation]);

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <a 
          href="https://github.com/MuhammadAbdullah95" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="animate-bounce">{currentEmoji}</span>
            <span className="font-medium">Muhammad Abdullah</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Click to visit GitHub
          </div>
        </a>
      </div>
    );
  }

  if (variant === 'signature') {
    return (
      <div className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
        <span className="animate-pulse">{currentEmoji}</span>
        <span>Crafted by</span>
        <a 
          href="https://github.com/MuhammadAbdullah95" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
        >
          Muhammad Abdullah
        </a>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
          MCP Expert
        </span>
      </div>
    );
  }

  // Default inline variant
  return (
    <a 
      href="https://github.com/MuhammadAbdullah95" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg animate-bounce">{currentEmoji}</span>
        <div>
          <p className="text-sm font-medium text-gray-900">Muhammad Abdullah</p>
          <p className="text-xs text-gray-600">Full Stack Developer & MCP Specialist</p>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-1 h-1 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </a>
  );
};

export default DeveloperBadge;
