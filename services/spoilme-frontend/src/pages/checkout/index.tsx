import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { Separator } from "../../components/Separator";
import { ReactComponent as ChevronLeftIcon } from "../../assets/images/chevron-left.svg";
import * as api from "../../api";
import { ScrollToTop } from "../../components/ScrollToTop";
import { OrderProducts } from "./OrderProducts";
import { OrderTotal } from "./OrderTotal";
import { PaymentMethodSelect } from "./PaymentMethodSelect";
import { ShippingAddress } from "./ShippingAddress";
import { Contacts } from "./Contacts";
import { Product } from "../../api";

interface OrderURLParams {
  username: string,
  productId: string,
};


const Container = styled.div`
  @media (min-width: 650px) {
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
  }
  padding: 0 10px;

  >a {
    display: grid;
    grid-template-columns: 20px 1fr;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    background-color: #ECEFFD;
    font-weight: 300;
    font-size: 14px;
    margin: 0 -10px;
    color: #000000 !important;
    text-decoration: none;
  }
`;

const OrderTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 30px 0 13px;
  text-align: center;
`;

const OrderForm = styled.div`
  background-color: #DEE2FF;
  border-radius: 20px;
  margin: 15px 0;
  padding: 1px 0;
`;

function calcTotalFromProducts(products: Product[]|undefined):number|undefined {
  if(products === undefined || products.length === 0) {
    return undefined;
  } else {
    return products
      .map(product => product.displayPrice)
      .reduce((total, current) => total + current, 0);
  }
};

const Checkout = () => {
  const [pm, setPm] = useState("card");
  const [products, setProducts] = useState<Product[]|undefined>(undefined)
  const {username, productId} = useParams<OrderURLParams>();
  const total = calcTotalFromProducts(products);
  useEffect(() => {
    api.getProductInfo(parseInt(productId)).then((product) => setProducts([product]))
  }, [productId]);
  return (
    <Container>
      <ScrollToTop />
      <Link to={`/${username}`}>
        <ChevronLeftIcon />
        <FormattedMessage
          id="common.back-to-wishlist"
          values={{ username }}
          defaultMessage="Back to @{username}'s wishlist"
        />
      </Link>
      <OrderTitle>
        <FormattedMessage
          id="checkout.your-order"
          defaultMessage="Your Order"
        />
      </OrderTitle>
      <Separator />
      <OrderProducts 
        products={products}
      />
      <Separator />
      <OrderTotal total={total}/>
      <Separator />
      <OrderForm>
        <ShippingAddress verifiedBy={username} />
        <Separator />
        <PaymentMethodSelect 
          onChange={(pm) => setPm(pm)}
          value={pm}
        />
        <Separator />
        <Contacts recipientUsername={username} />
      </OrderForm>
    </Container>
  );
}

export default Checkout;
