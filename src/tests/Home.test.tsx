import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test('Pages Router', () => {
  render(<Home />);

  const main = screen.getByRole('main');

  expect(main).toBeInTheDocument();
});
