import React from 'react';
import './App.css';
import styled from 'styled-components';


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
const Filtros = styled.div`
display:flex;
flex-direction:column;
padding: 16px;
width: 200px;
`



export default class App extends React.Component {
  state = {

    quantity: 0,
    adicionado: false,

    products: [
      {
        id: Date.now(),
        name: "Produto 1",
        value: 200,
        imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWQ0nC7fKyJESpS6acSjoZEP0u5xVBGMoDR9Ea_vaYdKjTRB-GIdhqgMCKUODCB6zezITC1SEDUtyWtjKOUacOXCpluTbjNN_zTq4TN4Q21F5jTK3ZgtPi&usqp=CAE",
      },
      {
        id: Date.now() + 1,
        name: "Produto 2",
        value: 150,
        imageUrl: "https://image.shutterstock.com/image-vector/astronaut-holding-gun-illustration-t-600w-1898943952.jpg"
      },
      {
        id: Date.now() + 2,
        name: "Produto 3",
        value: 250,
        imageUrl: "https://image.shutterstock.com/image-vector/outerspace-adventure-outdoor-vintage-vector-600w-1491399221.jpg"
      },
      {
        id: Date.now() + 3,
        name: "Produto 4",
        value: 300,
        imageUrl: "https://image.shutterstock.com/image-vector/astronaut-ride-skateboard-vector-illustration-600w-1915910152.jpg"
      },
    ],

    cart: [],
    filter: {
      minValue: 0,
      maxValue: 1000,
      name: "",
    }

  };

  addToCart = (product) => {
    const { cart } = this.state;
    const productExists = cart.find(p => p.id === product.id);

    if (productExists) {
      productExists.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    this.setState({ cart });
  }


  totalValue = () => {
    const { cart } = this.state;
    return cart.reduce((total, product) => total + product.value * product.quantity, 0);
  
  };

  removeProductFromCart = (product) => {
    const { cart } = this.state;
    const newCart = [...cart];
    newCart.splice(newCart.indexOf(product), 1);
    this.setState({ cart: newCart });
  };

  showProductsAscendingPriceOrder = () => {
    const { products } = this.state;
    return products.sort((a, b) => a.value - b.value);
  };

  showProductsDescendingPriceOrder = () => {
    const { products } = this.state;
    return products.sort((a, b) => b.value - a.value);
  };




  render() {
    const { products, filter } = this.state;
    const filteredProducts = products.filter((product) => {
      return (
        product.value >= filter.minValue &&
        product.value <= filter.maxValue &&
        product.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    });

    return (
      <div>
        <div>
          <h3> Filtros</h3>
        </div>
        <Filtros>
          <h4>Valor mínimo</h4>
          <input
            type="number"
            placeholder="Valor mínimo"
            value={filter.minValue}
            onChange={(e) => {
              this.setState({
                filter: {
                  ...filter,
                  minValue: e.target.value,
                },
              });
            }}
          />
          <h4>Valor máximo</h4>
          <input
            type="number"
            placeholder="Valor máximo"
            value={filter.maxValue}
            onChange={(e) => {
              this.setState({
                filter: {
                  ...filter,
                  maxValue: e.target.value,
                },
              });
            }}
          />
          <h4>Nome do produto</h4>
          <input
            type="text"
            placeholder="Nome do produto"
            value={filter.name}
            onChange={(e) => {
              this.setState({
                filter: {
                  ...filter,
                  name: e.target.value,
                },
              });
            }}
          />
          <h4>Ordem de preço</h4>
          <select onChange={(e) => {
            if (e.target.value === "Crescente") {
              this.setState({ products: this.showProductsAscendingPriceOrder() });
            } else {
              this.setState({ products: this.showProductsDescendingPriceOrder() });
            }
          }}>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>

        </Filtros>
        <div>
          <CardContainer>
            {filteredProducts.map((product) => {
              return (
                <Card>
                  <div>
                  <ImgCard src={product.imageUrl}/>
                  </div>
                  <CardTexto>
                  <p>{product.name}</p>
                  <p>R$ {product.value}</p>

                  <button onClick={() => this.addToCart(product)}>Adicionar ao carrinho</button>
                  </CardTexto>
                </Card>
              );
            })}
          </CardContainer>
        </div>

        <div>
          <h3>Carrinho</h3>
        </div>
            
        <CardContainer>
            {this.state.cart.map((product) => {
              return (
                <Card>
                  <div>
                  {/* <ImgCard src={product.imageUrl}/> */}


        </div>
            
                  <CardTexto>
                  <p>{product.name}</p>
                  <p>Quantidade: {product.quantity}</p>
                  <p>R$ {product.value}</p>
                  <button onClick={() => this.removeProductFromCart(product)}>Remover do carrinho</button>
                  
                  </CardTexto>
                </Card>
    );
  })}
          </CardContainer>
          <p>Total: R$ {this.totalValue()}</p>

        </div>
      
    );

    

}
}