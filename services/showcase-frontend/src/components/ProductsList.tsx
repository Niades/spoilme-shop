import styled from "@emotion/styled";
import iPad from "../assets/images/ipad.png";

const ProductContainer = styled.div`
  display: grid;
  grid-template-areas: 
    'IMAGE TITLE'
    'IMAGE PRICE'
    'IMAGE BUYBTN'
  ;
  grid-template-columns: 170px 1fr;
  margin: 15px 10px;
`;

const ProductImage = styled.img`
  grid-area: IMAGE;
  width: 150px;
  justify-self: center;
  align-self: center;
`;

const ProductTitle = styled.div`
  grid-area: TITLE;
`;

const ProductPrice = styled.div`
  grid-area: PRICE;
  font-size: 20px;
`;

const BuyButton = styled.button`
  background-color: #FF8AC3;
  border: none;
  border-radius: 9px;
  color: white;
  cursor: pointer;
  grid-area: BUYBTN;
  outline: none;
`;

const ProductListContainer = styled.div``;

const Product = () => {
  return (
    <ProductContainer>
      <ProductImage src={iPad}/>
      <ProductTitle>
        Apple iPad Pro Wi-Fi (2020), 11", 128 GB, grey
      </ProductTitle>
      <ProductPrice>
        $899.99
      </ProductPrice>
      <BuyButton>
        Buy Gift
      </BuyButton>
    </ProductContainer>
  )
};

const ProductList = () => {
  return (
    <ProductListContainer>
      <Product />
      <Product />
      <Product />
    </ProductListContainer>
  )
};

export {
  ProductList
};