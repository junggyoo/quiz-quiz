import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ResultView from '../result-view';

import useResult from '@/hooks/hook/useResult';

jest.mock('@/hooks/hook/useResult', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ResultView Component', () => {
  const useResultMock = useResult as jest.Mock;
  const handleRetryMock = jest.fn();
  const handleGoStartMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('퀴즈 결과 정보가 올바르게 렌더링되어야 한다.', () => {
    useResultMock.mockReturnValue({
      timeTaken: '59초',
      correctAnswerCount: 4,
      wrongAnswerCount: 1,
      correctAnswerRate: 80,
      handleRetry: handleRetryMock,
      handleGoStart: handleGoStartMock,
    });

    render(<ResultView />);

    expect(screen.getByText('59초')).toBeInTheDocument();
    expect(screen.getByText('4개')).toBeInTheDocument();
    expect(screen.getByText('1개')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
  });

  it('"다시풀기" 버튼을 클릭하면 handleRetry 함수가 호출되어야 한다.', () => {
    render(<ResultView />);

    fireEvent.click(screen.getByText('다시풀기'));

    expect(handleRetryMock).toHaveBeenCalledTimes(1);
  });

  it('"처음으로" 버튼을 클릭하면 handleGoStart 함수가 호출되어야 한다.', () => {
    render(<ResultView />);

    fireEvent.click(screen.getByText('처음으로'));

    expect(handleGoStartMock).toHaveBeenCalledTimes(1);
  });
});
