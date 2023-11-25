import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import QuizView from '../quiz-view';

import { useQuizQuery } from '@/hooks/query/quiz';

import { renderWithQuery } from '@/utils/render-with-query';

import { server } from '@/mocks/api/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('@/hooks/query/quiz', () => ({
  __esModule: true,
  useQuizQuery: jest.fn(),
}));

describe('QuizView Component', () => {
  it('로딩 중일 때 <LoadingQuiz /> 컴포넌트가 렌더링 되어야 한다.', async () => {
    (useQuizQuery as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));

    renderWithQuery(<QuizView />);

    expect(screen.getByTestId('quiz-loading')).toBeInTheDocument();
  });
});
