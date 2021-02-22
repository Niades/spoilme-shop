import styled from "@emotion/styled";
import { Product } from "../api";


interface ProductBlockProps {
  product: Product,
};

interface ProductListProps {
  products: Product[] | undefined,
};

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

const ProductBlock = (props: ProductBlockProps) => {
  const { product } = props;
  return (
    <ProductContainer>
      <ProductImage src={product.image}/>
      <ProductTitle>
        {product.name}
      </ProductTitle>
      <ProductPrice>
        {product.price}
      </ProductPrice>
      <BuyButton>
        Buy Gift
      </BuyButton>
    </ProductContainer>
  )
};

const ProductList = (props: ProductListProps) => {
  const { products } = props;
  if(products !== undefined) {
    return (
      <ProductListContainer>
        {
          products.map((product) => <ProductBlock product={product} />)
        }
      </ProductListContainer>
    );
  } else {
    return (
      <ProductListContainer>
      </ProductListContainer>
    );
  }
};

export {
  ProductList
};