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

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Good luck with your MCP exam preparation! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
