import { useState } from "react";
import styled from "@emotion/styled";
import { OrderProducts } from "./OrderProducts";
import { PaymentMethodSelect } from "./PaymentMethodSelect";
import { ShippingAddress } from "./ShippingAddress";
import { Contacts } from "./Contacts";

interface OrderURLParams {
  username: string,
  productId: string,
};

const OrderTitle = styled.div`
  font-size: 20px;
  margin: 13px 0;
  text-align: center;
`;

const Separator = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 3px;
  background-color: #FFEBF2;
`;

const OrderTotal = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'TITLE VALUE';
  margin: 15px 15px;

  > .title {
    grid-area: TITLE;
    align-self: center;
    font-size: 20px;
  }

  > .value {
    grid-area: VALUE;
    justify-self: end;
    font-size: 20px;
  }
`;

const OrderForm = styled.div`
  background-color: #DEE2FF;
  border-radius: 20px;
  margin: 15px;
  padding: 1px 0;
`;

function Order() {
  const [pm, setPm] = useState("card");
  return (
    <div>
      <OrderTitle>
        Your Order
      </OrderTitle>
      <Separator />
      <OrderProducts 
        products={[{ id: 1, name: "iPad 2000", description: "Hi", price: 99.99, image: "https://www.ixbt.com/img/n1/news/2018/8/2/iPad-Pro-12-9-2018-5K1-1068x580_large.jpg" }]}
      />
      <Separator />
      <OrderTotal>
        <span className="title" >Total</span>
        <span className="value">$99.99</span>
      </OrderTotal>
      <Separator />
      <OrderForm>
        <PaymentMethodSelect 
          onChange={(pm) => setPm(pm)}
          value={pm}
        />
        <Separator />
        <ShippingAddress />
        <Separator />
        <Contacts />
      </OrderForm>
    </div>
  );
}

export default Order;
