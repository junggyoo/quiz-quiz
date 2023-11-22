import { create } from 'zustand';

import { QuizHistory } from '@/types';

type State = {
  quizHistory: QuizHistory[];
  currentQuestion: number;
  startTime: number;
  category: number;

  addQuizHistory: (history: QuizHistory) => void;
  setCurrentQuestion: (number: number) => void;
  setCategory: (number: number) => void;
};

const useStore = create<State>((set) => ({
  quizHistory: [],
  currentQuestion: 0,
  startTime: Date.now(),
  category: 0,

  setCategory: (number) => set({ category: number }),
  addQuizHistory: (history) =>
    set((state) => ({ quizHistory: [...state.quizHistory, history] })),
  setCurrentQuestion: (number) => set({ currentQuestion: number }),
}));

export default useStore;
