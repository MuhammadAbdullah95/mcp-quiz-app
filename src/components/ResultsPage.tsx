import React, { useState } from 'react';
import { Question, QuizResult } from '../types/quiz.types';

interface ResultsPageProps {
  questions: Question[];
  answers: (number | null)[];
  result: QuizResult;
  onResetQuiz: () => void;
  passingPercentage: number;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  questions,
  answers,
  result,
  onResetQuiz,
  passingPercentage
}) => {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Add null check for result
  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error: No Results Available</h1>
          <p className="text-gray-600 mb-4">Quiz results are not available.</p>
          <button onClick={onResetQuiz} className="btn-primary">
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= passingPercentage) return 'text-blue-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-50 border-green-200';
    if (percentage >= passingPercentage) return 'bg-blue-50 border-blue-200';
    return 'bg-red-50 border-red-200';
  };

  const categories = ['all', ...Object.keys(result.categoryScores || {})];
  
  const filteredQuestions = selectedCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            result.passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            <span className="text-3xl">{result.passed ? '🏆' : '📚'}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz Complete!
          </h1>
          <p className={`text-xl ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
            {result.passed ? 'Congratulations! You passed!' : 'Keep studying and try again!'}
          </p>
        </div>

        {/* Score Card */}
        <div className={`card mb-6 border-2 ${getScoreBgColor(result.percentage)}`}>
          <div className="text-center">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.percentage)}`}>
              {result.percentage}%
            </div>
            <p className="text-gray-600 mb-4">
              {result.score} out of {result.totalQuestions} questions correct
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <span className="text-2xl mb-2 block">🎯</span>
                <div className="font-semibold text-gray-900">{result.score}/{result.totalQuestions}</div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <span className="text-2xl mb-2 block">⏰</span>
                <div className="font-semibold text-gray-900">{formatTime(result.timeTaken)}</div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <span className="text-2xl mb-2 block">📚</span>
                <div className="font-semibold text-gray-900">{passingPercentage}%</div>
                <div className="text-sm text-gray-600">Passing Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance by Category</h2>
          <div className="space-y-3">
            {Object.entries(result.categoryScores).map(([category, scores]) => {
              const percentage = Math.round((scores.correct / scores.total) * 100);
              return (
                <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{category}</div>
                    <div className="text-sm text-gray-600">
                      {scores.correct}/{scores.total} correct
                    </div>
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(percentage)}`}>
                    {percentage}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question Review */}
        <div className="card mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Question Review</h2>
            <div className="flex items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setShowAllQuestions(!showAllQuestions)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                {showAllQuestions ? (
                  <>
                    <span>🔼</span>
                    Hide Details
                  </>
                ) : (
                  <>
                    <span>🔽</span>
                    Show All Questions
                  </>
                )}
              </button>
            </div>
          </div>

          {showAllQuestions && (
            <div className="space-y-4">
              {filteredQuestions.map((question) => {
                const originalIndex = questions.findIndex(q => q.id === question.id);
                const userAnswer = answers[originalIndex];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <span className="text-green-600 text-xl">✅</span>
                      ) : (
                        <span className="text-red-600 text-xl">❌</span>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-900">
                            Question {originalIndex + 1}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {question.category}
                          </span>
                        </div>
                        <p className="text-gray-900 mb-3">{question.question}</p>
                        
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => {
                            const isUserAnswer = userAnswer === optionIndex;
                            const isCorrectAnswer = optionIndex === question.correctAnswer;
                            
                            return (
                              <div
                                key={optionIndex}
                                className={`p-2 rounded text-sm ${
                                  isCorrectAnswer
                                    ? 'bg-green-100 text-green-800 font-medium'
                                    : isUserAnswer
                                    ? 'bg-red-100 text-red-800'
                                    : 'text-gray-600'
                                }`}
                              >
                                <span className="font-medium mr-2">
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                {option}
                                {isCorrectAnswer && (
                                  <span className="ml-2 text-green-600">✓ Correct</span>
                                )}
                                {isUserAnswer && !isCorrectAnswer && (
                                  <span className="ml-2 text-red-600">✗ Your answer</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onResetQuiz}
            className="btn-primary flex items-center gap-2 mx-auto px-8 py-3 text-lg"
          >
            <span>🔄</span>
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
