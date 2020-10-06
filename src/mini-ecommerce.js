import React, {useState} from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/menu';
import Produtos from './components//produtos/produtos';
import Checkout from './components/checkout/checkout';


function MiniEcommerce() {

  const [carrinho, setCarrinho] = useState({produtos: []});
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

    function adicionarProduto(produto){
      // puxar o carrinho e adicionar novo obj
        const objCarrinho = Object.assign({}, carrinho);
        // atualizar a qtd
        let novoProduto = true;
        objCarrinho.produtos.forEach((prod, indice) => {
          if(prod.nome === produto.nome) {
            objCarrinho.produtos[indice].quantidade++;
            novoProduto = false;
          }
        });
        // adicionar novo produto
        if(novoProduto) {
          objCarrinho.produtos.push({
            nome: produto.nome, preco: produto.preco, quantidade: 1
          });
        }

        setCarrinho(objCarrinho);
    }
    function handleExibirProdutos(){
      setExibirCheckout(false);
      setExibirProdutos(true);
    }
    function handleExibirCheckout(total){
      setExibirCheckout(true);
      setExibirProdutos(false);
      setTotal(total);
    }
    function handleLimparCarrinho(){
      setCarrinho( {produtos: []});
    }

  return (
    <div>
      <Menu
      produtos={carrinho.produtos}
      handleExibirProdutos={handleExibirProdutos} 
      handleExibirCheckout={handleExibirCheckout} />
    <Produtos
      visivel={exibirProdutos}
      adicionarProduto={adicionarProduto} />
    <Checkout 
       visivel={exibirCheckout}
       handleExibirProdutos={handleExibirProdutos}
       total={total}
       produtos={carrinho}
       handleLimparCarrinho={handleLimparCarrinho} />
      
    </div>
  );
}

export default MiniEcommerce;
