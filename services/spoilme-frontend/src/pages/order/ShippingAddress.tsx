import styled from "@emotion/styled";

interface ShippingAddressProps {
  verifiedBy: string,
};

const ShippingAddressContainer = styled.div`
  margin: 15px;
  font-size: 18px;
  font-weight: 500;
`;

const AddressLine = styled.div`
  margin-top: 15px;
  color: #529A78;
  font-weight: 400;
`;

const ShippingAddress = (props: ShippingAddressProps) => {
  const { verifiedBy } = props;
  return (
    <ShippingAddressContainer>
      Shipping Address
      <AddressLine>
        Verified by @{verifiedBy}
      </AddressLine>
    </ShippingAddressContainer>
  );
};

export {
  ShippingAddress,
};