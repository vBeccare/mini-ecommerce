import React from 'react';
import { getByText, render } from '@testing-library/react';
import ListarProdutos from './listar-produtos';


describe('Teste do componente de listagem de produtos', () => {

   it('deve exibir o nome dos produtos nos cards', () =>{
      const { getByTestId } = render(
      <ListarProdutos adicionarProduto={ () => false} exibirMensagem={ () => false}  />
      );
      expect(getByTestId('card1')).toHaveTextContent('Aprenda Java');
      expect(getByTestId('card2')).toHaveTextContent('React em 7 dias');
   });
   it('deve exibir as descricoes dos produtos nos cards', () => {
      const { getByTestId } = render(
         <ListarProdutos adicionarProduto={ () => false} exibirMensagem={ () => false}  />
      );
      expect(getByTestId('card1')).toHaveTextContent('Descrição do produto...');
      expect(getByTestId('card3')).toHaveTextContent('Descrição do produto...');
   });
   it('deve exibir os precos dos produtos nos botoes de comprar', () => {
      const { getByTestId } = render(
         <ListarProdutos adicionarProduto={ () => false} exibirMensagem={ () => false}  />
      );
      expect(getByTestId('card1')).toHaveTextContent('Comprar (R$ 59,90)');
      expect(getByTestId('card2')).toHaveTextContent('Comprar (R$ 19,90)');
   });
});