import styled from "@emotion/styled";

const ShippingAddressContainer = styled.div`
  margin: 15px;
  font-size: 18px;
`;

const AddressLine = styled.div`
  margin-top: 15px;
  color: #529A78;
`;

const ShippingAddress = () => {
  return (
    <ShippingAddressContainer>
      Shipping Address
      <AddressLine>
        Verified by @mikuru
      </AddressLine>
    </ShippingAddressContainer>
  );
};

export {
  ShippingAddress,
};