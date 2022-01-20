import styled from "styled-components";

export const HeaderLab = styled.div`
grid-column: 1/-1;
`

export const BodyContainer = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 200px;
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;
  column-gap: 1em;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  
  &:hover {
    box-shadow: 2px 2px 5px darkgrey;
}
`;

export const CardTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ImgCard = styled.img`
  width: 100%;
  border-radius: 10px;
  
`;
export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
 
  
`;
export const InputBusca = styled.input`
  margin-right: 3%;
` 

export const TemplateMain = styled.div`
display: grid;
grid-template-columns: 1fr 200px;
  
  padding: 16px;
  column-gap: 2em;
  flex-grow: 1;
  

`

export const ContainerCarrinho = styled.div`
display: flex;
flex-direction:column;
border-radius: 10px;
padding: 1em;
height: 80%;
background-color: #1E1E1E;
color: white;

`

export const CarrinhoTexto = styled.div`
display:flex;
justify-content: space-between;
align-items: center

`
export const LogoLab = styled.img`
 width: 100px;

`
export const IconeTexto = styled.div`
  display: flex;
  align-items: center;
  background-color: #1E1E1E;
  color: white;
  justify-content: center;

`

export const TotalItens = styled.div`
 display: flex;
  padding: 16px;
  flex-direction: column;
`



export const BtnAdicionar = styled.button `
background-color: #07a14c;
color: white;
border-radius: 8px;
padding: 10px;
border: none;
font-weight: 500;

&:hover {
  background-color: #087037;
}

`
 
export const BtnRemover = styled.button `
background-color: #c91800;
color: white;
border-radius: 8px;
padding: 5px;
border: none;
font-weight: 500;

&:hover {
  background-color: #b31c07;
}

`
export const Footer = styled.div`
grid-row-start: 3;
display:flex;
flex-direction: row;
grid-row-gap: 16px;
grid-column-gap: 2em;
grid-row-gap: 16px;
padding: 16px;
background-color: #1E1E1E;

a{
    text-decoration: none;
    color: white;
}

img{
    width: 40px;
}

h4{
    color: #70DFEF;
}

.contato{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 16px;
}

.redes-sociais{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 16px;
}

.institucional{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 16px;

p{
    color: rgb(255, 0, 208);
}
`
