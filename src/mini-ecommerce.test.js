import React from 'react';
import { render } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';

describe('teste de componente mini-ecommerce', () => {
  
  it('deve renderizar o componente sem erros', () => {
    const { getByText } = render(<MiniEcommerce />);
    const linkElement = getByText(/Mini Ecommerce/i);
    expect(linkElement).toBeInTheDocument();
  });

});