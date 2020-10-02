import React from 'react';
import { render } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';

test('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<MiniEcommerce />);
  const linkElement = getByText(/mini/i);
  expect(linkElement).toBeInTheDocument();
});
