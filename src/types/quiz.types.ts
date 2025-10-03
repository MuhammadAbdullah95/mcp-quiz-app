export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  isCompleted: boolean;
  startTime: number;
  endTime?: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeTaken: number;
  categoryScores: Record<string, { correct: number; total: number }>;
}

export type QuizView = 'home' | 'quiz' | 'results';
