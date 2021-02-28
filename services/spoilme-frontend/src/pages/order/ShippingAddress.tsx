import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";


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
      <FormattedMessage
        id="checkout.shipping-address"
        defaultMessage="Shipping Address"
      />
      <AddressLine>
        <FormattedMessage
          id="checkout.shipping-address-verified"
          values={{ username: verifiedBy, }}
          defaultMessage="Verified by @{username}"
        />
      </AddressLine>
    </ShippingAddressContainer>
  );
};

export {
  ShippingAddress,
};