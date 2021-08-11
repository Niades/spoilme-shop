import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { ReactComponent as LockIcon } from "../../assets/images/lock.svg";


interface ShippingAddressProps {
  verifiedBy: string,
};

const ShippingAddressContainer = styled.div`
  margin: 15px;
  font-size: 18px;
  font-weight: 500;
`;

const AddressLine = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  margin-top: 15px;
  color: #529A78;
  font-weight: 400;

  >span {
    align-self: center;
    justify-self: start;
  }

  >svg {
    vertical-align: middle;
    width: 20px;
    align-self: center;
    justify-self: center;

    #lock {
      fill: #529A78;
    }
  }
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
        <LockIcon />
        <span>
          <FormattedMessage
            id="checkout.shipping-address-verified"
            values={{ username: verifiedBy, }}
            defaultMessage="@{username}'s verified address"
          />
        </span>
      </AddressLine>
    </ShippingAddressContainer>
  );
};

export {
  ShippingAddress,
};