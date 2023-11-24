import { create } from 'zustand';

import type { QuizQuestion } from '@/services/quiz/type';
import type { QuizHistory } from '@/types';

type State = {
  view: 'start' | 'quiz' | 'result';
  category: number;
  quizData: QuizQuestion[];
  quizHistory: QuizHistory[];
  timeTaken: number;
};

type Actions = {
  setView: (view: 'start' | 'quiz' | 'result') => void;
  setCategory: (category: number) => void;
  setQuizData: (quizData: QuizQuestion[]) => void;
  setQuizHistory: (quizHistory: QuizHistory) => void;
  setTimeTaken: (timeTaken: number) => void;
  resetQuizHistory: () => void;
};

const useAppStore = create<State & Actions>((set) => ({
  view: 'start',
  category: 0,
  quizData: [],
  quizHistory: [],
  timeTaken: 0,

  setCategory: (category) => set({ category }),
  setView: (view) => set({ view }),
  setQuizData: (quizData) => set({ quizData }),
  setQuizHistory: (quizHistory) =>
    set((state) => ({
      quizHistory: [...state.quizHistory, quizHistory],
    })),
  setTimeTaken: (timeTaken) => set({ timeTaken }),
  resetQuizHistory: () => set({ quizHistory: [] }),
}));

export default useAppStore;
