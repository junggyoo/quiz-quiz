import { renderHook } from '@testing-library/react';

import useResult from '@/hooks/hook/useResult';

import useAppStore from '@/store/app';

const useAppStoreMock = useAppStore as jest.MockedFunction<
  typeof useAppStore
>;

jest.mock('@/store/app', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('canvas-confetti', () => {
  return jest.fn();
});

describe('useResult hook test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('useResult 훅이 렌더링 되면 정답 수와 오답 수가 계산 되어야 한다.', () => {
    const { result } = renderUseResult(4, 1);

    expect(result.current.correctAnswerCount).toBe(4);
    expect(result.current.wrongAnswerCount).toBe(1);
  });

  it('useResult 훅이 렌더링 되면 정답률이 계산 되어야 한다.', () => {
    const { result } = renderUseResult(4, 1);

    expect(result.current.correctAnswerRate).toBe(80);
  });

  it('handleRetry 함수를 호출하면 resetQuizHistory 함수가 호출되고 setView 함수가 "quiz" 인수와 함께 호출되어야 한다.', () => {
    const setViewMock = jest.fn();
    const resetQuizHistoryMock = jest.fn();

    useAppStoreMock.mockImplementation(() => ({
      quizHistory: [
        { isCorrect: true },
        { isCorrect: false },
        { isCorrect: true },
      ],
      setView: setViewMock,
      resetQuizHistory: resetQuizHistoryMock,
    }));

    const { result } = renderHook(() => useResult());

    result.current.handleRetry();

    expect(useAppStore().resetQuizHistory).toHaveBeenCalledTimes(1);
    expect(setViewMock).toHaveBeenCalledWith('quiz');
  });

  it('handleGoStart 함수를 호출하면 resetQuizHistory 함수가 호출되고 setView 함수가 "start" 인수와 함께 호출되어야 한다.', () => {
    const setViewMock = jest.fn();

    useAppStoreMock.mockImplementation(() => ({
      quizHistory: [
        { isCorrect: true },
        { isCorrect: false },
        { isCorrect: true },
      ],
      setView: setViewMock,
      resetQuizHistory: jest.fn(),
    }));

    const { result } = renderHook(() => useResult());

    result.current.handleGoStart();

    expect(setViewMock).toHaveBeenCalledWith('start');
  });
});

const createQuizHistory = (
  correctCount: number,
  wrongCount: number,
) => {
  return [
    ...Array(correctCount).fill({ isCorrect: true }),
    ...Array(wrongCount).fill({ isCorrect: false }),
  ];
};

const renderUseResult = (
  correctCount: number,
  wrongCount: number,
) => {
  useAppStoreMock.mockImplementation(() => ({
    quizHistory: createQuizHistory(correctCount, wrongCount),
    timeTaken: 100,
    setView: jest.fn(),
    resetQuizHistory: jest.fn(),
  }));

  return renderHook(() => useResult());
};
