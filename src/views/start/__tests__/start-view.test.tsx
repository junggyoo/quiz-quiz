import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import StartView from '../start-view';

const mockHandleCategoryChange = jest.fn();
const mockHandleQuizStart = jest.fn();

jest.mock('@/hooks/hook/useStart', () => {
  return () => ({
    handleCategoryChange: mockHandleCategoryChange,
    handleQuizStart: mockHandleQuizStart,
  });
});

describe('StartView Component', () => {
  afterEach(() => {
    mockHandleCategoryChange.mockClear();
    mockHandleQuizStart.mockClear();
  });

  it('카테고리를 선택하면 handleCategoryChange 함수가 호출된다.', () => {
    const { getByRole } = render(<StartView />);

    fireEvent.click(
      getByRole('button', { name: /카테고리를 선택해주세요/ }),
    );

    const optionElement = getByRole('option', {
      name: /General Knowledge/,
    });

    fireEvent.click(optionElement);

    expect(mockHandleCategoryChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '9' }),
      }),
    );
  });

  it('퀴즈 풀기 버튼을 클릭하면 handleQuizStart 함수가 호출된다.', () => {
    const { getByText } = render(<StartView />);
    fireEvent.click(getByText('퀴즈 풀기'));
    expect(mockHandleQuizStart).toHaveBeenCalled();
  });
});
