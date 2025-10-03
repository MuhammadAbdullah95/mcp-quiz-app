import React from 'react';
import { Question, QuizState } from '../types/quiz.types';
import ProgressBar from './ProgressBar';

interface QuizInterfaceProps {
  questions: Question[];
  quizState: QuizState;
  onUpdateAnswer: (questionIndex: number, answerIndex: number) => void;
  onNavigateToQuestion: (questionIndex: number) => void;
  onFinishQuiz: () => void;
  onBackToHome: () => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({
  questions,
  quizState,
  onUpdateAnswer,
  onNavigateToQuestion,
  onFinishQuiz,
  onBackToHome
}) => {
  const currentQuestion = questions[quizState.currentQuestion];
  const answeredCount = quizState.answers.filter(answer => answer !== null).length;
  const canGoNext = quizState.currentQuestion < questions.length - 1;
  const canGoPrevious = quizState.currentQuestion > 0;

  const handleAnswerSelect = (answerIndex: number) => {
    onUpdateAnswer(quizState.currentQuestion, answerIndex);
  };

  const handleNext = () => {
    if (canGoNext) {
      onNavigateToQuestion(quizState.currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious) {
      onNavigateToQuestion(quizState.currentQuestion - 1);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>🏠</span>
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-900">MCP Quiz</h1>
              <p className="text-sm text-gray-600">
                Question {quizState.currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600">
                Answered: {answeredCount}/{questions.length}
              </p>
              <button
                onClick={onFinishQuiz}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Finish Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar 
        current={quizState.currentQuestion + 1} 
        total={questions.length}
        answered={answeredCount}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="card">
          {/* Question Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-blue-600">
                {quizState.currentQuestion + 1}
              </span>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                  {currentQuestion.difficulty}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {currentQuestion.category}
                </span>
              </div>
            </div>
            
            {quizState.answers[quizState.currentQuestion] !== null && (
              <span className="text-green-500 text-xl">✅</span>
            )}
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = quizState.answers[quizState.currentQuestion] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="font-medium text-gray-700 mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                canGoPrevious
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>◀</span>
              Previous
            </button>

            <div className="flex items-center gap-2">
              <span>🏁</span>
              <span className="text-sm text-gray-600">
                {quizState.answers[quizState.currentQuestion] !== null ? 'Answered' : 'Not answered'}
              </span>
            </div>

            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                canGoNext
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next
              <span>▶</span>
            </button>
          </div>
        </div>

        {/* Question Navigation Grid */}
        <div className="card mt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Question Navigation</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => {
              const isAnswered = quizState.answers[index] !== null;
              const isCurrent = index === quizState.currentQuestion;
              
              return (
                <button
                  key={index}
                  onClick={() => onNavigateToQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors ${
                    isCurrent
                      ? 'bg-blue-600 text-white'
                      : isAnswered
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
