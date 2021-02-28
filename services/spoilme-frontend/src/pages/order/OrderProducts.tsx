import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";
import { Product } from "../../api";
import * as format from "../../i18n/format";
import { prepareProductImageUrl } from "../../util/urlHelper";


interface ProductBlockProps {
  product: Product,
};

interface ProductListProps {
  products: Product[] | undefined,
};

const OrderLineContainer = styled.div`
  display: grid;
  grid-template-areas: 
    'IMAGE SEP TITLE QTY PRICE'
    'IMAGE SEP TITLE QTY PRICE'
  ;
  grid-template-columns: 100px 14px 1fr 0.3fr 0.3fr;
  margin: 15px 0;
`;

const OrderLineSkeletonContainer = styled(OrderLineContainer)`
  grid-template-rows: 100px;
`;

const ProductImage = styled.img`
  overflow: hidden;
  grid-area: IMAGE;
  min-width: 100px;
  width: 100px;
  justify-self: center;
  border: 4px solid #DEE2FF;
  border-radius: 9px;
  align-self: center;
`;

const ProductImageSkeleton = styled.div`
`;

const ProductTitle = styled.div`
  font-weight: 500;
  grid-area: TITLE;
  align-self: center;
  justify-self: center;
`;

const ProductTitleSkeleton = styled(ProductTitle)`
  width: 80%;
`;

const ProductPrice = styled.div`
  grid-area: PRICE;
  align-self: center;
  justify-self: end;
  font-size: 20px;
`;

const ProductPriceSkeleton = styled(ProductPrice)`
  width: 100%;
`;

const OrderProductsContainer = styled.div`
  margin: 10px 15px;
`;

const OrderLine = (props: ProductBlockProps) => {
  const { product } = props;
  return (
    <OrderLineContainer>
      <ProductImage src={prepareProductImageUrl(product.image)}/>
      <ProductTitle> 
        {product.name}
      </ProductTitle>
      <ProductPrice>
        {format.price(product.price)}
      </ProductPrice>
    </OrderLineContainer>
  )
};

const OrderLineSkeleton = () => {
  return (
    <OrderLineSkeletonContainer>
      <ProductImageSkeleton>
        <Skeleton variant="rect" height="100px" />
      </ProductImageSkeleton>
      <ProductTitleSkeleton> 
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </ProductTitleSkeleton>
      <ProductPriceSkeleton>
        <Skeleton variant="text" />
      </ProductPriceSkeleton>
    </OrderLineSkeletonContainer>
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
        <OrderLineSkeleton />
      </OrderProductsContainer>
    );
  }
};

export {
  OrderProducts
};