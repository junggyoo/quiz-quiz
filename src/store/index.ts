import { QuizQuestion } from './../services/quiz/type';
import { create } from 'zustand';

import { QuizHistory } from '@/types';

type State = {
  quizQuestions: QuizQuestion[];
  quizHistory: QuizHistory[];
  currentQuestion: number;
  startTime: number;
  category: number;

  setQuizQuestions: (questions: QuizQuestion[]) => void;
  addQuizHistory: (history: QuizHistory) => void;
  setCurrentQuestion: (number: number) => void;
  setCategory: (number: number) => void;
};

const useStore = create<State>((set) => ({
  quizQuestions: [],
  quizHistory: [],
  currentQuestion: 0,
  startTime: Date.now(),
  category: 0,

  setQuizQuestions: (questions) => set({ quizQuestions: questions }),
  setCategory: (number) => set({ category: number }),
  addQuizHistory: (history) =>
    set((state) => ({ quizHistory: [...state.quizHistory, history] })),
  setCurrentQuestion: (number) => set({ currentQuestion: number }),
}));

export default useStore;
