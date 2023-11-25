import { renderHook, act } from '@testing-library/react';

import useStart from '@/hooks/hook/useStart';

import useAppStore from '@/store/app';

jest.mock('@/store/app', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    setCategory: jest.fn(),
    setView: jest.fn(),
  }),
}));

describe('useStart hook test', () => {
  it('handleCategoryChange 함수가 호출되었을 때, setCategory 함수가 전달된 인수와 함께 호출 되어야한다.', () => {
    const { result } = renderHook(() => useStart());
    act(() => {
      result.current.handleCategoryChange({
        target: { value: '2' },
      } as React.ChangeEvent<HTMLSelectElement>);
    });
    expect(useAppStore().setCategory).toHaveBeenCalledWith(2);
  });

  it('handleQuizStart 함수가 호출되었을 때, setView 함수가 전달된 인수와 함께 호출 되어야한다.', () => {
    const { result } = renderHook(() => useStart());
    act(() => {
      result.current.handleQuizStart();
    });
    expect(useAppStore().setView).toHaveBeenCalledWith('quiz');
  });
});
