import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";
import { FormattedMessage, useIntl } from "react-intl";
import { useParams, useHistory } from "react-router-dom";
import { getI18nizedField } from "../../i18n/util";
import * as format from "../../i18n/format";
import * as api from "../../api";
import { BreadcrumbLink } from "../../components/BreadcrumbLink";
import { Separator } from "../../components/Separator";
import { ScrollToTop } from "../../components/ScrollToTop";
import { prepareProductImageUrl } from "../../util/urlHelper";


interface ProductDetailsParams {
  username: string,
  productId: string,
};

interface DetailsProps {
  product: api.Product,
  onBuyClick: () => void,
};

const Container = styled.div`
`;

const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: center;

  >span.MuiSkeleton-root {
    justify-self: center;
  }
`;

const ProductImage = styled.div`
  justify-self: center;
  align-self: center;
  >img {
    padding: 5px 3px;
    max-width: 150px;
    border-radius: 9px;
    border: 4px solid #DEE2FF;
    border-radius: 9px;
  }
`;

const ProductName = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;

  >span.MuiSkeleton-root {
    justify-self: center;
  }
`;

const ProductPrice = styled.div`
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
  padding: 0 10px;
`;

const ProductButtons = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const BuyButton = styled.button`
  background-color: #FF8AC3;
  border: none;
  border-radius: 9px;
  color: white;
  cursor: pointer;
  grid-area: BUYBTN;
  outline: none;
  font-weight: 600;
  padding: 5px 20px;
  font-size: 18px;
`;

const ProductFeatures = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  margin: 10px 0;
  padding: 0 10px;
`;

const FeatureName = styled.div`
  color: #FF8AC3;
  font-weight: 600;
  padding-right: 20px;
`;

const FeatureValue = styled.div`
  align-self: center;
`;

const ProductDescription = styled.div`
  text-align: justify;
  margin: 10px 0;
  padding: 0 10px;
`;

const DetailsSkeleton = React.memo(() => {
  return (
    <div style={{ marginTop: "60px", }}>
      <ProductHeader>
        <Skeleton variant="rect" height="200px" width="180px" />
        <ProductName>
          <Skeleton variant="text" style={{ width: "80%", margin: "0 auto", }} />
          <Skeleton variant="text" style={{ width: "40%", margin: "0 auto", }} />
        </ProductName>
        <ProductPrice>
          <Skeleton variant="text" style={{ width: "30%", margin: "0 auto", }} />
        </ProductPrice>
      </ProductHeader>
      <Separator />
      <ProductFeatures>
        <Skeleton variant="text" style={{ width: "70%", margin: "0 auto", }} />
        <Skeleton variant="text" style={{ width: "70%", margin: "0 auto", }} />
      </ProductFeatures>
      <Separator />
      <ProductDescription>
        <Skeleton variant="text" style={{ margin: "0 10px" }} />
        <Skeleton variant="text" style={{ margin: "0 10px" }} />
        <Skeleton variant="text" style={{ margin: "0 10px" }} />
        <Skeleton variant="text" style={{ margin: "0 10px" }} />
      </ProductDescription>
    </div>
  );
});

const Details = (props: DetailsProps) => {
  const { product, onBuyClick } = props;
  const { locale } = useIntl();
  return (
    <div style={{ marginTop: "60px", }}>
      <ProductHeader>
        <ProductImage>
          <img 
            alt="Product"
            src={prepareProductImageUrl(product.image)}
          />
        </ProductImage>
        <ProductName>
          {getI18nizedField(product, "name", locale)}
        </ProductName>
        <ProductPrice>
          {format.price(product.displayPrice)}
        </ProductPrice>
      </ProductHeader>
      <ProductButtons>
        <BuyButton onClick={onBuyClick}>
          <FormattedMessage
            id="common.buy-button"
            defaultMessage="Buy Gift"
          />
        </BuyButton>
      </ProductButtons>
      <Separator />
      <ProductFeatures>
        <FeatureName>
          <FormattedMessage
            id="details.feature-name-manufacturer-country"
            defaultMessage="Manufacturer:"
          />
        </FeatureName>
        <FeatureValue>
          <FormattedMessage
            id="details.feature-value-manufacturer-country"
            defaultMessage="China"
          />
        </FeatureValue>
      </ProductFeatures>
      <Separator />
      <ProductDescription>
        {getI18nizedField(product, "description", locale)}
      </ProductDescription>
    </div>
  );
};

const ProductDetails = () => {
  const { username, productId } = useParams<ProductDetailsParams>();
  const [product, setProduct] = useState<api.Product|undefined>(undefined)
  const history = useHistory();
  useEffect(() => {
    api.getProductInfo(parseInt(productId)).then((product) => setProduct(product))
  }, [productId]);
  return (
    <Container>
      <ScrollToTop />
      <BreadcrumbLink to={`/${username}`}>
        <FormattedMessage
          values={{ username }}
          id="common.back-to-wishlist"
          defaultMessage="Back to @{username}'s wishlist"
        />
      </BreadcrumbLink>
      {product === undefined &&
        <DetailsSkeleton />
      }
      {product !== undefined &&
        <Details 
          product={product}
          onBuyClick={() => history.push(`/${username}/gift/${productId}/checkout`)}
        />
      }
    </Container>
  );
};

export default ProductDetails;