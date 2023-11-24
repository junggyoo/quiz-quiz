import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AppPage from '../src/app/page';

describe('App Page', () => {
  it('App Page가 최초 렌더링 되면 <StartView /> 컴포넌트가 렌더링 되어야 한다. ', () => {
    render(<AppPage />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Quiz quiz',
    );
  });
});
