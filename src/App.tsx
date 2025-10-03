import { useState, useEffect } from 'react';
import { Question, QuizState, QuizResult, QuizView } from './types/quiz.types';
import HomePage from './components/HomePage';
import QuizInterface from './components/QuizInterface';
import ResultsPage from './components/ResultsPage';
import { questions as questionsData } from './data/questions';

const PASSING_PERCENTAGE = 70;

function App() {
  // Debug: Add console log to check if App is rendering
  console.log('App component rendering...');
  console.log('Questions data:', questionsData);
  
  const [currentView, setCurrentView] = useState<QuizView>('home');
  const [questions] = useState<Question[]>(questionsData);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: new Array(questionsData.length).fill(null),
    isCompleted: false,
    startTime: 0,
  });
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('mcp-quiz-state');
    const savedView = localStorage.getItem('mcp-quiz-view');
    const savedResult = localStorage.getItem('mcp-quiz-result');
    
    if (savedState) {
      setQuizState(JSON.parse(savedState));
    }
    if (savedResult) {
      setQuizResult(JSON.parse(savedResult));
    }
    if (savedView && savedView !== 'home') {
      // Only restore results view if we have a saved result
      if (savedView === 'results' && !savedResult) {
        console.warn('Results view found in localStorage but no result data, redirecting to home');
        setCurrentView('home');
      } else {
        setCurrentView(savedView as QuizView);
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (currentView !== 'home') {
      localStorage.setItem('mcp-quiz-state', JSON.stringify(quizState));
      localStorage.setItem('mcp-quiz-view', currentView);
      if (quizResult) {
        localStorage.setItem('mcp-quiz-result', JSON.stringify(quizResult));
      }
    }
  }, [quizState, currentView, quizResult]);

  const startQuiz = () => {
    const newState: QuizState = {
      currentQuestion: 0,
      answers: new Array(questions.length).fill(null),
      isCompleted: false,
      startTime: Date.now(),
    };
    setQuizState(newState);
    setCurrentView('quiz');
  };

  const updateAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[questionIndex] = answerIndex;
    setQuizState(prev => ({
      ...prev,
      answers: newAnswers
    }));
  };

  const navigateToQuestion = (questionIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      currentQuestion: questionIndex
    }));
  };

  const finishQuiz = () => {
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - quizState.startTime) / 1000);
    
    // Calculate results
    let correctAnswers = 0;
    const categoryScores: Record<string, { correct: number; total: number }> = {};
    
    questions.forEach((question, index) => {
      const userAnswer = quizState.answers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      
      if (isCorrect) correctAnswers++;
      
      // Track category scores
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { correct: 0, total: 0 };
      }
      categoryScores[question.category].total++;
      if (isCorrect) {
        categoryScores[question.category].correct++;
      }
    });
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const passed = percentage >= PASSING_PERCENTAGE;
    
    const result: QuizResult = {
      score: correctAnswers,
      totalQuestions: questions.length,
      percentage,
      passed,
      timeTaken,
      categoryScores
    };
    
    setQuizResult(result);
    setQuizState(prev => ({
      ...prev,
      isCompleted: true,
      endTime
    }));
    setCurrentView('results');
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: new Array(questions.length).fill(null),
      isCompleted: false,
      startTime: 0,
    });
    setQuizResult(null);
    setCurrentView('home');
    localStorage.removeItem('mcp-quiz-state');
    localStorage.removeItem('mcp-quiz-view');
    localStorage.removeItem('mcp-quiz-result');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage 
            totalQuestions={questions.length}
            onStartQuiz={startQuiz}
            hasInProgress={quizState.startTime > 0 && !quizState.isCompleted}
            onContinueQuiz={() => setCurrentView('quiz')}
          />
        );
      case 'quiz':
        return (
          <QuizInterface
            questions={questions}
            quizState={quizState}
            onUpdateAnswer={updateAnswer}
            onNavigateToQuestion={navigateToQuestion}
            onFinishQuiz={finishQuiz}
            onBackToHome={() => setCurrentView('home')}
          />
        );
      case 'results':
        // Only render results if we have a valid result
        if (!quizResult) {
          console.warn('Results view requested but no quiz result available, redirecting to home');
          setCurrentView('home');
          return null;
        }
        return (
          <ResultsPage
            questions={questions}
            answers={quizState.answers}
            result={quizResult}
            onResetQuiz={resetQuiz}
            passingPercentage={PASSING_PERCENTAGE}
          />
        );
      default:
        return null;
    }
  };

  // Debug: Add a simple test render
  if (!questionsData || questionsData.length === 0) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error: No Questions Found</h1>
          <p className="text-red-500">Questions data is empty or not loaded properly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentView()}
    </div>
  );
}

export default App;
