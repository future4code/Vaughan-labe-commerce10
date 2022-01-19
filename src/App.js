import React from 'react';
import './App.css';
import styled from 'styled-components';
import { CardProduto } from './components/CardProduto';

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
row-gap: 16px;
padding: 16px;
`

const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border: 1px solid black;
`

const CardTexto = styled.div`
display:flex;
flex-direction:column;
padding: 16px;
`

const ImgCard = styled.img`
width: 200px;
`




export default class App extends React.Component {
  state = {
    products: [
      {
        id: Date.now(),
        name: "Produto 1",
        value: 200,
        imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWQ0nC7fKyJESpS6acSjoZEP0u5xVBGMoDR9Ea_vaYdKjTRB-GIdhqgMCKUODCB6zezITC1SEDUtyWtjKOUacOXCpluTbjNN_zTq4TN4Q21F5jTK3ZgtPi&usqp=CAE",
      },
      {
        id: Date.now(),
        name: "Produto 2",
        value: 150,
        imageUrl: "https://picsum.photos/id/15/200/150"
      },
    ],

    cart: [],
    filter: {
      minValue: 0,
      maxValue: 1000000,
      name: ""
    }
  };

  CardProduto = () => {
  const listaDeProdutos = this.state.products.map((product) => {
    return (
      <CardProduto
        key={product.id}
        nome={product.name}
        preco={product.value}
        endereco={product.imageUrl}
      />
    )
  }); return listaDeProdutos
}

  render() {

    

    return (
      <div>
        <div>
          <h3> Filtros</h3>
        </div>
        <div>
          <input
            type="number"
            placeholder="Valor mínimo"
            value={this.state.filter.minValue}
            onChange={(e) => {
              this.setState({
                filter: {
                  ...this.state.filter,
                  minValue: e.target.value,
                },
              });
            }
            }
          />
          <input
            type="number"
            placeholder="Valor máximo"
            value={this.state.filter.maxValue}
            onChange={(e) => {
              this.setState({
                filter: {
                  ...this.state.filter,
                  maxValue: e.target.value,
                },
              });
            }
            }
          />
          <input
            type="text"
            placeholder="Nome do produto"
            value={this.state.filter.name}
            onChange={(e) => {
              this.setState({
                filter: {
                  ...this.state.filter,
                  name: e.target.value,
                },
              });
            }
            }
          />

        </div>

        <div>
          <div>
            <p>Quantidade de produtos:</p>
            <label>Ordenação</label>
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>

          </div>

          {CardProduto()}

          <CardContainer>
            <Card>
              <div>
                <ImgCard src={this.endereco} />
              </div>

              <CardTexto>
                <p>{this.nome}</p>
                <p>R$:{this.preco}</p>
                <button onClick={this.adicionarAoCarrinho()}>Adicionar ao carrinho</button>
              </CardTexto>
            </Card>
          </CardContainer>

        </div>

        <div>
          <h3>Carrinho</h3>
        </div>

      </div>

    );
  }
}

