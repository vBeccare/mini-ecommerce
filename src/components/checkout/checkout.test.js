import React from 'react';
import { render } from '@testing-library/react';
import Checkout from './checkout';


describe('Teste do componente checkout', () => {

   it('deve renderizar o componente sem erros', () =>{
      const { getAllByText } = render(
      <Checkout
         visivel={exibirCheckout}
         handleExibirProdutos={handleExibirProdutos}
         total={total}
         produtos={carrinho}
         handleLimparCarrinho={handleLimparCarrinho} />);
      const textos = getAllByText(/Finalizar compra/i);
      expect(textos[0]).toBeInTheDocument();
   });
});