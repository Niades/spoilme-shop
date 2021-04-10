import React from "react";
import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory, useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { UserShowcaseURLParams } from "../pages/user-showcase";
import { Product } from "../api";
import * as format from "../i18n/format";
import { getI18nizedField } from "../i18n/util";
import { prepareProductImageUrl } from "../util/urlHelper";


interface ProductBlockProps {
  product: Product,
};

interface ProductListProps {
  products: Product[] | undefined,
};

const ProductContainer = styled.div`
  display: grid;
  grid-template-areas: 
    'IMAGE SEP TITLE '
    'IMAGE SEP PRICE '
    'IMAGE SEP BUYBTN'
    'IMAGE SEP DTLBTN'
  ;
  grid-template-columns: 158px 10px 1fr;
  grid-template-rows: 1fr 0.6fr 50px 40px;
  margin: 15px auto;
  border-radius: 9px;
  background-color: #fff;
  padding: 10px;

  @media (min-width: 570px) {
    grid-template-columns: 10px 158px 10px 1fr 10px 0.4fr 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      'PADL IMAGE SEP TITLE PADR BUYBTN'
      'PADL IMAGE SEP PRICE PADR DTLBTN'
    ;
  }
`;

const ProductImage = styled.img`
  grid-area: IMAGE;
  padding: 5px 3px;
  background-color: #FFF;
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
  font-size: 18px;
  text-align: center;
`;

const ProductPrice = styled.div`
  text-align: center;
  margin: 5px 0;
  grid-area: PRICE;
  align-self: center;
  font-size: 20px;
  color: #000;
  @media (min-width: 570px) {
    align-self: start;
  }
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
  font-size: 18px;
  color: white;
  cursor: pointer;
  grid-area: BUYBTN;
  outline: none;
  font-weight: 600;
  justify-self: center;
  width: 80%;
  height: 45px;
  @media (min-width: 570px) {
    align-self: center;
    width: 100%;
  }
`;

const DetailsButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  grid-area: DTLBTN;
  outline: none;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-style: dotted;
  height: 40px;
`;

const ProductListContainer = styled.div`
  background-color: #ECEFFD;
  border-top: none;
  margin: -9px auto;
  padding: 10px 10px 5px 10px;
  width: 92%;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
`;

const ProductBlock = (props: ProductBlockProps) => {
  const { product } = props;
  const { username } = useParams<UserShowcaseURLParams>();
  const history = useHistory();
  const { locale } = useIntl();
  return (
    <ProductContainer>
      <ProductImage src={prepareProductImageUrl(product.image)}/>
      <ProductTitle>
        {getI18nizedField(product, "name", locale)}
      </ProductTitle>
      <ProductPrice>
        {format.price(product.displayPrice)}
      </ProductPrice>
      <BuyButton onClick={() => history.push(`/${username}/gift/${product.id}/checkout`)}>
        <FormattedMessage 
          id="common.buy-button"
          defaultMessage="Gift Now"
        />
      </BuyButton>
      <DetailsButton onClick={() => history.push(`/${username}/gift/${product.id}`)}>
        <FormattedMessage 
          id="showcase.details-button"
          defaultMessage="Details"
        />
      </DetailsButton>
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
  const { products } = props;
  if(products !== undefined) {
    return (
      <ProductListContainer>
        {
          products.map((product) => (
            <ProductBlock
              key={product.id.toString()}
              product={product} 
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