'use client';

import StartView from '@/views/start/start-view';
import QuizView from '@/views/quiz/quiz-view';
import ResultView from '@/views/result/result-view';

import useAppStore from '@/store/app';

export default function AppPage() {
  const view = useAppStore((state) => state.view);

  return (
    <>
      {view === 'start' && <StartView />}
      {view === 'quiz' && <QuizView />}
      {view === 'result' && <ResultView />}
    </>
  );
}
