import styled from "@emotion/styled";
import { Product } from "../../api";


interface ProductBlockProps {
  product: Product,
};

interface ProductListProps {
  products: Product[] | undefined,
};

const OrderLineContainer = styled.div`
  display: grid;
  grid-template-areas: 
    'IMAGE TITLE QTY PRICE'
    'IMAGE TITLE QTY PRICE'
  ;
  grid-template-columns: 100px 1fr 0.3fr 1fr;
  margin: 15px 0;
`;

const ProductImage = styled.img`
  overflow: hidden;
  grid-area: IMAGE;
  min-width: 100px;
  width: 100px;
  justify-self: center;
  align-self: center;
`;

const ProductTitle = styled.div`
  grid-area: TITLE;
  align-self: center;
  justify-self: center;
`;

const ProductPrice = styled.div`
  grid-area: PRICE;
  align-self: center;
  justify-self: end;
  font-size: 20px;
`;

const OrderProductsContainer = styled.div`
  margin: 10px 15px;
`;

const OrderLine = (props: ProductBlockProps) => {
  const { product } = props;
  return (
    <OrderLineContainer>
      <ProductImage src={product.image}/>
      <ProductTitle> 
        {product.name}
      </ProductTitle>
      <ProductPrice>
        ${product.price}
      </ProductPrice>
    </OrderLineContainer>
  )
};

const OrderProducts = (props: ProductListProps) => {
  const { products } = props;
  if(products !== undefined) {
    return (
      <OrderProductsContainer>
        {
          products.map((product) => (
            <OrderLine
              product={product} 
            />
          ))
        }
      </OrderProductsContainer>
    );
  } else {
    return (
      <OrderProductsContainer>
      </OrderProductsContainer>
    );
  }
};

export {
  OrderProducts
};