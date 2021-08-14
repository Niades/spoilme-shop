import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { Separator } from "../../components/Separator";
import { BreadcrumbLink } from "../../components/BreadcrumbLink";
import * as api from "../../api";
import { ScrollToTop } from "../../components/ScrollToTop";
import { OrderProducts } from "./OrderProducts";
import { OrderTotal } from "./OrderTotal";
import { PaymentMethodSelect } from "./PaymentMethodSelect";
import { ShippingAddress } from "./ShippingAddress";
import { Contacts, ContactsValue } from "./Contacts";
import { Product } from "../../api";

interface OrderURLParams {
  username: string,
  productId: string,
};


const Container = styled.div`
  margin-top: 60px;
  padding: 0 10px;
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
      .map(product => product.price)
      .reduce((total, current) => total + current, 0);
  }
};

const submitPaymentForm = (data: object) => {
  console.log({data});
};

const Checkout = () => {
  const [pm, setPm] = useState("card");
  const [products, setProducts] = useState<Product[]|undefined>(undefined)
  const [contacts, setContacts] = useState<ContactsValue>({ email: "", message: "", legalAgreed: false, sanityAgreed: false });
  const {username, productId} = useParams<OrderURLParams>();
  const total = calcTotalFromProducts(products);
  useEffect(() => {
    api.getProductInfo(productId).then((product) => setProducts([product]))
  }, [productId]);
  return (
    <Container>
      <ScrollToTop /> 
      <BreadcrumbLink to={`/${username}`}>
        <FormattedMessage
          id="common.back-to-wishlist"
          values={{ username }}
          defaultMessage="Back to @{username}'s wishlist"
        />
      </BreadcrumbLink>
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
        <Contacts
          recipientUsername={username}
          value={contacts}
          onChange={(newContacts) => setContacts(newContacts)}
          onPay={() => submitPaymentForm({...contacts, username, productId, pm})}
        />
      </OrderForm>
    </Container>
  );
}

export default Checkout;
