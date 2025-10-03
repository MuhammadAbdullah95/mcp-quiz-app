import React from 'react';

interface HomePageProps {
  totalQuestions: number;
  onStartQuiz: () => void;
  hasInProgress: boolean;
  onContinueQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  totalQuestions,
  onStartQuiz,
  hasInProgress,
  onContinueQuiz
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <span className="text-2xl text-white">📚</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MCP Quiz App
          </h1>
          <p className="text-xl text-gray-600">
            Model Context Protocol Exam Preparation
          </p>
        </div>

        {/* Main Card */}
        <div className="card mb-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-gray-600">
              Practice with {totalQuestions} carefully crafted questions covering all MCP topics
            </p>
          </div>

          {/* Quiz Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <span className="text-3xl mb-2 block">🎯</span>
              <h3 className="font-semibold text-gray-900">Comprehensive</h3>
              <p className="text-sm text-gray-600">All MCP topics covered</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <span className="text-3xl mb-2 block">⏰</span>
              <h3 className="font-semibold text-gray-900">Flexible</h3>
              <p className="text-sm text-gray-600">Stop and resume anytime</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <span className="text-3xl mb-2 block">📖</span>
              <h3 className="font-semibold text-gray-900">Detailed</h3>
              <p className="text-sm text-gray-600">Explanations for all answers</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {hasInProgress ? (
              <>
                <button
                  onClick={onContinueQuiz}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-lg"
                >
                  <span>▶️</span>
                  Continue Quiz
                </button>
                <button
                  onClick={onStartQuiz}
                  className="w-full btn-secondary flex items-center justify-center gap-2 py-3"
                >
                  <span>🔄</span>
                  Start New Quiz
                </button>
              </>
            ) : (
              <button
                onClick={onStartQuiz}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-lg"
              >
                <span>▶️</span>
                Start Quiz
              </button>
            )}
          </div>
        </div>

        {/* Quiz Info */}
        <div className="card bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-3">Quiz Information</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Total Questions:</span>
              <span className="font-medium">{totalQuestions}</span>
            </div>
            <div className="flex justify-between">
              <span>Passing Score:</span>
              <span className="font-medium">70%</span>
            </div>
            <div className="flex justify-between">
              <span>Time Limit:</span>
              <span className="font-medium">No limit</span>
            </div>
            <div className="flex justify-between">
              <span>Question Types:</span>
              <span className="font-medium">Multiple Choice</span>
            </div>
          </div>
        </div>

        {/* Developer Credit - Interactive Section */}
        <div className="mt-8 relative">
          <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden animate-gradient animate-glow">
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 animate-pulse">Crafted with Excellence by</h3>
                <a 
                  href="https://github.com/MuhammadAbdullah95" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl font-extrabold bg-white/20 rounded-lg px-6 py-3 inline-block backdrop-blur-sm hover:scale-105 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                >
                  ✨ Muhammad Abdullah ✨
                </a>
                <p className="mt-3 text-white/90 font-medium animate-pulse">
                  🏆 Full Stack Developer & MCP Specialist 🏆
                </p>
                <div className="flex justify-center gap-2 mt-4 text-sm flex-wrap">
                  <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 animate-bounce" style={{animationDelay: '0s'}}>🚀 React Expert</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 animate-bounce" style={{animationDelay: '0.2s'}}>⚡ TypeScript Pro</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 animate-bounce" style={{animationDelay: '0.4s'}}>🎯 MCP Certified</span>
                </div>
                <div className="mt-4 text-xs text-white/80">
                  💡 "Building the future of AI-powered applications" 💡
                </div>
                <div className="mt-4 flex justify-center">
                  <a 
                    href="https://github.com/MuhammadAbdullah95" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-lg">🐙</span>
                    <span className="text-sm font-medium">GitHub Profile</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Enhanced Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-2 left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-8 w-6 h-6 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-8 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Good luck with your MCP exam preparation! 🚀</p>
          <p className="mt-2 text-xs">© 2025 Muhammad Abdullah - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
