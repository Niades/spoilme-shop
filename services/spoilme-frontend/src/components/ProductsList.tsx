import React from "react";
import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory, useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { GA_ENABLED } from "../constants";
import { UserShowcaseURLParams } from "../pages/user-showcase";
import { Product } from "../api";
import { useFormatPrice } from "../i18n/format";
import { getI18nizedField } from "../i18n/util";


interface ProductBlockProps {
  product: Product,
};

interface ProductListProps {
  products: Product[] | undefined,
};


const ProductListContainer = styled.div`
  border-top: none;
  margin: 0 auto;
  padding: 10px 10px 5px 10px;
  width: 92%;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  @media (min-width: 650px) {
    display: grid;
    width: 95%;
    box-sizing: border-box;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
  }
`;

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

  @media (min-width: 650px) {
    display: inline-grid;
    grid-template-columns: 200px;
    grid-template-rows: 200px 40px 50px 40px 20px;
    grid-template-areas: 
      'IMAGE'
      'TITLE'
      'PRICE'
      'BUYBTN'
      'DTLBTN'
    ;
    
  }
`;

const ProductImageContainer = styled.div`
  grid-area: IMAGE;
  background-color: #FFF;
  justify-self: center;
  align-self: center; 
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: 650px) {
    min-height: 200px;
  }

  > div {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const ProductImageSkeleton = styled.div`
  grid-area: IMAGE;
  justify-self: start;
  align-self: center;
`;

const ProductTitle = styled.div`
  grid-area: TITLE;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  align-self: left;

  @media (min-width: 650px) {
    text-align: center;
    align-self: center;
  }
`;

const ProductPrice = styled.div`
  text-align: left;
  margin: 5px 0;
  grid-area: PRICE;
  align-self: left;
  font-size: 20px;
  color: #604739;
  @media (min-width: 570px) {
    align-self: start;
    text-align: center;
  }
`;

const ProductPriceSkeleton = styled.div`
  grid-area: PRICE;
  width: 70px;
  justify-self: start;
`;

const BuyButton = styled.button`
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  background-color: #000000;
  border: none;
  border-radius: 9px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  grid-area: BUYBTN;
  outline: none;
  font-weight: 600;
  justify-self: center;
  width: 100%;
  height: 42px;
  text-transform: uppercase;
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

const ProductBlock = (props: ProductBlockProps) => {
  const formatPrice = useFormatPrice();
  const { product } = props;
  const { username } = useParams<UserShowcaseURLParams>();
  const history = useHistory();
  const { locale } = useIntl();
  return (
    <ProductContainer>
      <ProductImageContainer>
        <div style={{ backgroundImage: `url(${product.image})`, }} />
      </ProductImageContainer>
      <ProductTitle>
        {getI18nizedField(product, "name", locale)}
      </ProductTitle>
      <ProductPrice>
        {formatPrice(product.price)}
      </ProductPrice>
      <BuyButton onClick={() =>  {
        if(GA_ENABLED) {
          // @ts-ignore
          window.dataLayer.push({'event': 'click_buy_button', 'event_detail': 'list'});
        }
        history.push(`/${username}/gift/${product.id}/checkout`);
      }}>
        <FormattedMessage 
          id="common.buy-button"
          defaultMessage="Gift Now"
        />
      </BuyButton>
      <DetailsButton onClick={() => {
        if(GA_ENABLED) {
          // @ts-ignore
          window.dataLayer.push({'event': 'click_product_detail' });
        }
        history.push(`/${username}/gift/${product.id}`);
      }}>
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