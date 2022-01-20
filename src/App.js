import React from "react";
import "./App.css";
import { CardContainer, Card, CardTexto, ImgCard, Filtros, TemplateMain, ContainerCarrinho, CarrinhoTexto, TotalItens, BtnAdicionar, BtnRemover, BodyContainer, LogoLab, IconeTexto, InputBusca, Footer} from "./style";
import LogoAstro from "./img/LabSpace.jpg"
import insta from "./img/insta.svg"
import facebook from "./img/facebook.svg"




export default class App extends React.Component {
  state = {
    quantity: 0,
    adicionado: false,

    products: [
      {
        id: 1,
        name: "Camiseta Universo",
        value: 150,
        imageUrl:
          "https://image.shutterstock.com/image-vector/astronaut-holding-gun-illustration-t-600w-1898943952.jpg",
      },
      {
        id: 2,
        name: "Camiseta Astronauta",
        value: 150,
        imageUrl:
          "https://image.shutterstock.com/image-vector/astronaut-holding-gun-illustration-t-600w-1898943952.jpg",
      },
      {
        id: 3,
        name: "Camiseta Astronauta ",
        value: 250,
        imageUrl:
          "https://image.shutterstock.com/image-vector/outerspace-adventure-outdoor-vintage-vector-600w-1491399221.jpg",
      },
      {
        id: Date.now() + 3,
        name: "Camiseta Astronauta Skatista",
        value: 300,
        imageUrl:
          "https://image.shutterstock.com/image-vector/astronaut-ride-skateboard-vector-illustration-600w-1915910152.jpg",
      },
    ],

    cart: [],
    filter: {
      name: "",
    },
    queryName: "",
    minValue: "",
    maxValue: "",
  };



  addToCart = (product) => {
    const cart = this.state.cart
    const productExists = cart.find((p) => p.id === product.id);

    if (productExists) {
      productExists.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    this.setState({ cart });
  };

  totalValue = () => {
    const { cart } = this.state;
    return cart.reduce(
      (total, product) => total + product.value * product.quantity,
      0
    );
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


  updateMinValue = (event) => {
    this.setState({
      minValue: event.target.value
    })
  }

  updateMaxValue = (event) => {
    this.setState({
      maxValue: event.target.value
    })
  }

  updateQueryName = (event) => {
    this.setState({
      queryName: event.target.value
    })
  }

  render() {
    //const { products, filter } = this.state;
   /* const filteredProducts = products.filter((product) => {
      return (
        product.value >= filter.minValue &&
        product.value <= filter.maxValue &&
        product.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    });*/

    //const quantidadeItens = products.length

    return (
      <BodyContainer>
        <header>
          <IconeTexto>
          <LogoLab src={LogoAstro} />
            {/* <h2>LabSpace</h2> */}
          </IconeTexto>

          <Filtros>
            <div>

              <InputBusca

                type="number"
                placeholder="Preço mínimo"
                value={this.state.minValue}
                onChange={this.updateMinValue}
              />

              <InputBusca
                type="number"
                placeholder="Valor máximo"
                value={this.state.maxValue}
                onChange={this.updateMaxValue}

              />

              <InputBusca
                type="text"
                placeholder="Nome do produto"
                value={this.state.queryName}
                onChange={this.updateQueryName}    
            />

              <select
                onChange={(e) => {
                  if (e.target.value === "Crescente") {
                    this.setState({
                      products: this.showProductsAscendingPriceOrder(),
                    });
                  } else {
                    this.setState({
                      products: this.showProductsDescendingPriceOrder(),
                    });
                  }
                }}
              >
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
              </select>
            </div>
          </Filtros>

        </header>

        <TemplateMain>



          <TotalItens>
            

            <CardContainer>

              {this.state.products
                .filter(product => {
                  return product.name.toLowerCase().includes(this.state.queryName.toLowerCase())
                })
                .filter(product => {
                  return this.state.minValue === "" || product.value >= this.state.minValue
                })
                .filter(product => {
                  return this.state.maxValue === "" || product.value <= this.state.maxValue
                })
                .map(product => {
                  return <Card>
                    <div>
                      <ImgCard src={product.imageUrl} />
                    </div>
                    <CardTexto>
                      <p>{product.name}</p>
                      <p>R$ {product.value}</p>

                      <BtnAdicionar onClick={() => this.addToCart(product)}>
                        Adicionar ao carrinho
                      </BtnAdicionar>
                    </CardTexto>
                  </Card>
                })}
            </CardContainer>
          </TotalItens>

          <ContainerCarrinho>
            <h3> 🛒 Carrinho:</h3>

            {this.state.cart.map((product) => {
              return (
                <div>

                  <CarrinhoTexto>
                    <p>{product.quantity}x</p>
                    <p>{product.name}</p>

                    <p>R$ {product.value}</p>
                    <BtnRemover onClick={() => this.removeProductFromCart(product)}>
                      X
                    </BtnRemover>
                  </CarrinhoTexto>
                </div>
              );
            })}

            <p>Total: R$ {this.totalValue()}</p>

          </ContainerCarrinho>



        </TemplateMain>
        <Footer>
          <div className="institucional">
            <h4>Institucional</h4>
            <a href="#">Sobre nós</a>
          </div>
          <div className="contato">
            <h4>Contato</h4>
            <a href="#">Fale conosco</a>
            <a href="#">Dúvidas</a>
          </div>

          <div className="redes-sociais">
            <h4>Redes Sociais</h4>
            <a href="https://facebook.com">
              <img src={facebook} alt="facebook" />
            </a>

            <a href="https://instagram.com">
            <img src={insta} alt="instagram" />
            </a>
          </div>
        </Footer>
      </BodyContainer>
    );
  }
}
