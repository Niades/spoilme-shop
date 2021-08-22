import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
// import { loadScript } from "@paypal/paypal-js";
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

// const PP_CLIENT_ID = "AVDBY70eOdceECzQNSZGaZp53yOcF7hAwHubwTOoYKGgxBjsLkJKkIaZtQ0RN6dCs8NSXa9NxcXS8mP0";

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
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  padding: 1px 0;
`;

function calcTotalFromProducts(products: Product[]|undefined):api.ProductPrice|undefined {
  if(products === undefined || products.length === 0) {
    return undefined;
  } else {
    return products
      .map(product => product.price)
      .reduce((total, current) => ({ usd: total.usd + current.usd, rub: total.rub + current.rub}), {usd: 0, rub: 0,});
  }
};

const submitPaymentForm = (data: object) => {
  console.log({data});
};

const Checkout = () => {
  const [pm, setPm] = useState("paypal");
  const [products, setProducts] = useState<Product[]|undefined>(undefined)
  const [contacts, setContacts] = useState<ContactsValue>({ email: "", message: "", legalAgreed: false, sanityAgreed: false });
  const {username, productId} = useParams<OrderURLParams>();
  const total = calcTotalFromProducts(products);
  useEffect(() => {
    api.getProductInfo(productId).then((product) => setProducts([product]))
  }, [productId]);
  /* PayPal Buttons (now disabled)
  useEffect(() => {
    loadScript({'client-id': PP_CLIENT_ID})
      .then((paypal) => {
        if(paypal !== null) {
          // @ts-ignore
          paypal.Buttons({
            createOrder: (_, actions) => { 
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [{
                  amount: {
                    value: "100",
                  },
                }],
                application_context: {
                  shipping_preference: "NO_SHIPPING",
                },
              });
            }
          }).render("#pp-test");
        } else {
          console.error("failed to initialize paypal")
        }
      });
  }, []);
  */
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
        {false && <PaymentMethodSelect 
          onChange={(pm) => setPm(pm)}
          value={pm}
        />}
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
