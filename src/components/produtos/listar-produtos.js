import React from 'react';
import placeholder from '../../images/fundo.jpg';
import {Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ListarProdutos(props){
   const produtos = [ 
      { nome: 'Aprenda Java', preco: 'R$ 59,90'},
      { nome: 'React em 7 dias', preco: 'R$ 19,90'},
      { nome: 'Aprenda CSS3', preco: 'R$ 39,90'},
      { nome: 'Aprenda HTML5', preco: 'R$ 29,90'},
      { nome: 'Aprenda React', preco: 'R$ 49,90'},
      { nome: 'Aprenda JS', preco: 'R$ 25,90'},
      { nome: 'Aprenda python', preco: 'R$ 79,90'},
      { nome: 'Aprenda GIT', preco: 'R$ 19,90'},
   ];

   function handleComprar(e, produto){
      e.preventDefault();
      props.adicionarProduto(produto);
      props.exibirMensagem(produto);
   
   }

   function render(){
      let key=1;
      const cards = produtos.map( produto =>
      <Card 
         key={key}
         data-testid={'card' + key++}
         style= {{ width: '18rem', margin: '10px', float: 'left' }}>
         <Card.Img variant='top' src={placeholder} />
         <Card.Body className='text-center'>
            <Card.Title  style= {{ height: '40px' }}>
               { produto.nome }
            </Card.Title>
            <Card.Text>
               Descrição do produto...
            </Card.Text>
            <Button
               variant='success'
               style={{ width: '100%'}}
               onClick={(e) => handleComprar(e,produto)}>
                  Comprar ({produto.preco})
               </Button>
         </Card.Body>
      </Card>
      );
      return cards;
   }
   return render();
}

ListarProdutos.propTypes = {
   adicionarProduto: PropTypes.func.isRequired,
   exibirMensagem: PropTypes.func.isRequired
}

export default ListarProdutos;