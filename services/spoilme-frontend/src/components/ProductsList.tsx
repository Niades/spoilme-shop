import React from "react";
import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";
import { FormattedMessage } from "react-intl";
import { Product } from "../api";
import * as format from "../i18n/format";
import { prepareProductImageUrl } from "../util/urlHelper";


interface ProductBlockProps {
  product: Product,
  onClick: (product: Product) => void,
};

interface ProductListProps {
  products: Product[] | undefined,
  onProductClick: (product: Product) => void,
};

const ProductContainer = styled.div`
  display: grid;
  grid-template-areas: 
    'PADL IMAGE SEP TITLE  PADR'
    'PADL IMAGE SEP PRICE  PADR'
    'PADL IMAGE SEP BUYBTN PADR'
  ;
  grid-template-columns: 10px 158px 10px 1fr 10px;
  grid-template-rows: 1fr 0.5fr 25px;
  margin: 15px auto;
`;

const ProductImage = styled.img`
  grid-area: IMAGE;
  width: 150px;
  justify-self: center;
  align-self: center;
  border: 4px solid #DEE2FF;
  border-radius: 9px;
`;

const ProductImageSkeleton = styled.div`
  grid-area: IMAGE;
  justify-self: start;
  align-self: center;
`;

const ProductTitle = styled.div`
  grid-area: TITLE;
  font-weight: 500;
`;

const ProductPrice = styled.div`
  grid-area: PRICE;
  font-size: 20px;

  justify-self: start;
`;

const ProductPriceSkeleton = styled.div`
  grid-area: PRICE;
  width: 70px;
  justify-self: start;
`;

const BuyButton = styled.button`
  background-color: #FF8AC3;
  border: none;
  border-radius: 9px;
  color: white;
  cursor: pointer;
  grid-area: BUYBTN;
  outline: none;
  font-weight: 500;
`;

const ProductListContainer = styled.div`
  background-color: #ECEFFD;
  border-top: none;
  margin: -9px auto;
  padding-top: 10px;
  padding-bottom: 5px;
  width: 95%;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
`;

const ProductBlock = (props: ProductBlockProps) => {
  const { product, onClick } = props;
  return (
    <ProductContainer>
      <ProductImage src={prepareProductImageUrl(product.image)}/>
      <ProductTitle> 
        {product.name}
      </ProductTitle>
      <ProductPrice>
        {format.price(product.price)}
      </ProductPrice>
      <BuyButton onClick={() => onClick(product)}>
        <FormattedMessage 
          id="showcase.buy-button"
          defaultMessage="Buy Gift"
        />
      </BuyButton>
    </ProductContainer>
  )
};

const ProductBlockSkeleton = React.memo(() => {
  return (
    <ProductContainer>
      <ProductImageSkeleton>
        <Skeleton variant="rect" width="150px" height="120px" />
      </ProductImageSkeleton>
      <ProductTitle> 
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </ProductTitle>
      <ProductPriceSkeleton>
        <Skeleton variant="text" />
      </ProductPriceSkeleton>
      <Skeleton style={{ gridArea: "BUYBTN" }} variant="rect" height="25px" />
    </ProductContainer>
  )
});

const ProductList = (props: ProductListProps) => {
  const { products, onProductClick } = props;
  if(products !== undefined) {
    return (
      <ProductListContainer>
        {
          products.map((product) => (
            <ProductBlock
              product={product} 
              onClick={onProductClick}
            />
          ))
        }
      </ProductListContainer>
    );
  } else {
    return (
      <ProductListContainer>
        <ProductBlockSkeleton key="1" />
        <ProductBlockSkeleton key="2" />
        <ProductBlockSkeleton key="3" />
      </ProductListContainer>
    );
  }
};

export {
  ProductList
};