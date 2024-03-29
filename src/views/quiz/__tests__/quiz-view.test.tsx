import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import QuizView from '../quiz-view';

import { useQuizQuery } from '@/hooks/query/quiz';

import { renderWithQuery } from '@/utils/render-with-query';

import { server } from '@/mocks/api/server';
import { MOCK_QUIZ_DATA } from '@/mocks/data/quiz';
import NextButton from '../components/next-button';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('@/hooks/query/quiz', () => ({
  __esModule: true,
  useQuizQuery: jest.fn(),
}));

describe('QuizView Component', () => {
  it('로딩 중일 때 <LoadingQuiz /> 컴포넌트가 렌더링 되어야 한다.', () => {
    (useQuizQuery as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));

    renderWithQuery(<QuizView />);

    expect(screen.getByTestId('quiz-loading')).toBeInTheDocument();
  });

  it('에러가 발생했을 때 <ErrorQuiz /> 컴포넌트가 렌더링 되어야 한다.', () => {
    (useQuizQuery as jest.Mock).mockImplementation(() => ({
      isError: true,
    }));

    renderWithQuery(<QuizView />);

    expect(screen.getByTestId('quiz-error')).toBeInTheDocument();
  });

  it('로딩이 완료 되면 퀴즈가 렌더링 되어야 한다.', () => {
    (useQuizQuery as jest.Mock).mockImplementation(() => ({
      data: MOCK_QUIZ_DATA,
    }));

    renderWithQuery(<QuizView />);

    expect(screen.getByText('HTC')).toBeInTheDocument();
  });

  describe('CheckCorrectAnswer Component', () => {
    it('정답을 선택하면 <CheckCorrectAnswer /> 컴포넌트에 "정답입니다" 텍스트가 노출된다', () => {
      (useQuizQuery as jest.Mock).mockImplementation(() => ({
        data: MOCK_QUIZ_DATA,
      }));

      renderWithQuery(<QuizView />);

      fireEvent.click(screen.getByText('HTC'));

      expect(screen.getByText(/정답입니다./i)).toBeInTheDocument();
    });

    it('오답을 선택하면 <CheckCorrectAnswer /> 컴포넌트에 "오답입니다" 텍스트와 정답이 함께 노출된다.', () => {
      (useQuizQuery as jest.Mock).mockImplementation(() => ({
        data: MOCK_QUIZ_DATA,
      }));

      renderWithQuery(<QuizView />);

      fireEvent.click(screen.getByText('Google'));

      expect(screen.getByText(/오답입니다./i)).toBeInTheDocument();
      expect(screen.getByText(/정답: HTC/i)).toBeInTheDocument();
    });
  });

  describe('NextButton Component', () => {
    it('정답을 선택하면 <NextButton /> 컴포넌트가 노출된다.', () => {
      (useQuizQuery as jest.Mock).mockImplementation(() => ({
        data: MOCK_QUIZ_DATA,
      }));

      renderWithQuery(<QuizView />);

      fireEvent.click(screen.getByText('HTC'));

      expect(screen.getByTestId('next-button')).toBeInTheDocument();
    });

    it('답안을 선택하지 않으면 <NextButton /> 컴포넌트가 노출되지 않는다.', () => {
      (useQuizQuery as jest.Mock).mockImplementation(() => ({
        data: MOCK_QUIZ_DATA,
      }));

      renderWithQuery(<QuizView />);

      expect(
        screen.queryByTestId('next-button'),
      ).not.toBeInTheDocument();
    });

    it('다음 문제 버튼을 클릭하면 다음 문제가 노출된다.', () => {
      (useQuizQuery as jest.Mock).mockImplementation(() => ({
        data: MOCK_QUIZ_DATA,
      }));

      renderWithQuery(<QuizView />);

      fireEvent.click(screen.getByText('HTC'));
      fireEvent.click(
        screen.getByRole('button', { name: '다음 문제' }),
      );

      expect(screen.getByText('Lupus')).toBeInTheDocument();
    });

    it('마지막 문제면 "결과 보기" 버튼이 노출된다.', () => {
      render(<NextButton isLastQuestion onClick={jest.fn} />);

      expect(
        screen.getByRole('button', { name: '결과 보기' }),
      ).toBeInTheDocument();
    });
  });
});
