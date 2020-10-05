import React from 'react';
import { render } from '@testing-library/react';
import ItensCarrinho from './itens-carrinho';


describe('Teste do componente de itens do carrinho', () => {

   it('deve renderizar o carrinho vazio', () =>{
      const { getByTestId } = render(
      <ItensCarrinho 
          produtos={[]}
           />);
      expect(getByTestId('itens')).toHaveTextContent('Carrinho vazio...');
   });
   it('deve renderizar o carrinho com um produto', () =>{
      const produtos = [{ nome: 'Aprenda React', preco: 'R$ 59,90', quantidade: '1'}]
      const { getByTestId } = render(
      <ItensCarrinho 
          produtos={produtos}
           />);
      expect(getByTestId(produtos[0].nome)).toHaveTextContent('Aprenda React - 1 x R$ 59,90');
   });
   it('deve renderizar o carrinho com multiplos produto', () =>{
      const produtos = [
         { nome: 'Aprenda React', preco: 'R$ 59,90', quantidade: '1'},
         { nome: 'Aprenda React2', preco: 'R$ 69,90', quantidade: '2'}
      ]
      const { getByTestId } = render(
      <ItensCarrinho 
          produtos={produtos}
           />);
      expect(getByTestId(produtos[0].nome)).toHaveTextContent('Aprenda React - 1 x R$ 59,90');
      expect(getByTestId(produtos[1].nome)).toHaveTextContent('Aprenda React2 - 2 x R$ 69,90');
   });
});