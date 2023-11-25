import {
  renderHook,
  act,
  waitFor,
  RenderHookResult,
} from '@testing-library/react';

import { useQuiz } from '@/hooks/hook/useQuiz';

import useAppStore from '@/store/app';

import { MOCK_QUIZ_DATA } from '@/mocks/quiz';

type UseQuizHookResult = ReturnType<typeof useQuiz>;

jest.mock('@/store/app', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    setView: jest.fn(),
    setQuizHistory: jest.fn(),
    setTimeTaken: jest.fn(),
  }),
}));

describe('useQuiz hook test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('handleOptionChange 함수를 호출하면 userAnswer 값은 value로 되고, isAnswerChecked 값은 true가 된다. ', () => {
    const { result } = renderHook(() => useQuiz(MOCK_QUIZ_DATA));

    act(() => {
      result.current.handleOptionChange({
        target: { value: 'HTC' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.userAnswer).toBe('HTC');
    expect(result.current.isAnswerChecked).toBe(true);
  });

  it('handleNextQuestion 함수를 호출하면, setQuizHistory 함수가 전달된 인수와 함께 호출된다.', () => {
    const { result } = renderHook(() => useQuiz(MOCK_QUIZ_DATA));

    act(() => {
      result.current.handleOptionChange({
        target: { value: 'HTC' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleNextQuestion();
    });

    expect(useAppStore().setQuizHistory).toHaveBeenCalledWith({
      ...MOCK_QUIZ_DATA[0],
      userAnswer: 'HTC',
      isCorrect: true,
    });
  });

  it('handleNextQuestion 함수를 호출하면, questionNumber 값이 초기값 1에서 2로 증가한다', async () => {
    const { result } = renderHook(() => useQuiz(MOCK_QUIZ_DATA));

    expect(result.current.questionNumber).toBe(1);

    act(() => {
      result.current.handleOptionChange({
        target: { value: 'HTC' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleNextQuestion();
    });

    await waitFor(() => {
      expect(result.current.questionNumber).toBe(2);
    });
  });

  it('handleNextQuestion 함수를 호출하면, isAnswerChecked 값은 false로, userAnswer 값은 빈 문자열로 값이 초기화 된다.', () => {
    const { result } = renderHook(() => useQuiz(MOCK_QUIZ_DATA));

    act(() => {
      result.current.handleOptionChange({
        target: { value: 'HTC' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleNextQuestion();
    });

    expect(result.current.isAnswerChecked).toBe(false);
    expect(result.current.userAnswer).toBe('');
  });

  it('handleNextQuestion 함수를 호출하면, 마지막 문제일 때 setTimeTaken 함수가 호출된다.', () => {
    const { result } = renderHook(() => useQuiz(MOCK_QUIZ_DATA));
    const spyOnSetTimeTaken = jest.spyOn(
      useAppStore(),
      'setTimeTaken',
    );

    moveToLastQuestion(result, MOCK_QUIZ_DATA.length);

    act(() => {
      result.current.handleOptionChange({
        target: { value: 'HTC' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleNextQuestion();
    });

    expect(spyOnSetTimeTaken).toHaveBeenCalled();
  });
});

function moveToLastQuestion(
  result: { current: UseQuizHookResult },
  length: number,
) {
  for (let i = 0; i < length - 1; i++) {
    act(() => {
      result.current.handleOptionChange({
        target: { value: 'HTC' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleNextQuestion();
    });
  }
}
