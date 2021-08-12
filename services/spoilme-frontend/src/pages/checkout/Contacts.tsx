import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { ReactComponent as LockIcon } from "../../assets/images/lock.svg";


interface ContactsProps {
  recipientUsername: string,
}

const ContactsContainer = styled.div`
  margin: 15px;
  position: relative;
`;
const ContactsTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const ContactsForm = styled.form`
  margin: 15px 0;
`;
const FormRow = styled.div`
  margin: 7.5px 0;
`;
const PrivacyMsg = styled.div`
  margin-top: 4px;
  display: grid;
  grid-template-columns: 15px 1fr;
  color: #529A78;

  >svg {
    width: 15px;
    height: 20px;
    #lock {
      fill: #529A78;
    }
  }

  >span {
    font-size: 14px;
    align-self: center;
    padding-left: 5px;
  }
`;
const RowLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;
const RowField = styled.div`
  >input {
    display: block;
    border: none;
    border-radius: 9px;
    padding: 5px 5px;
    outline: none;
    font-size: 18px;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  }
`;

const PayButton = styled.button`
  margin-top: 15px; 
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  padding: 10px 0;
  background-color: #83B692;
  border-radius: 20px;
  width: 100%;
`;

const Contacts = (props: ContactsProps) => {
  const { recipientUsername } = props;
  return (
    <ContactsContainer>
      <ContactsTitle>
        <FormattedMessage
          id="checkout.contact-info"
          defaultMessage="Contact Information"
        />
      </ContactsTitle>
      <PrivacyMsg>
        <LockIcon />
        <span>
          <FormattedMessage
            id="checkout.contacts-privacy-msg"
            values={{ username: recipientUsername, }}
            defaultMessage={`Never shared with @${recipientUsername}`}
          />
        </span>
      </PrivacyMsg>
      <ContactsForm>
        <FormRow>
          <RowLabel>
            Email
          </RowLabel>
          <RowField>
            <input placeholder="email@example.com" type="text" />
          </RowField>
        </FormRow>
        <FormRow style={{ display: "none" }}>
          <RowLabel>
            <FormattedMessage
              id="checkout.contact-info-phone"
              defaultMessage="Phone"
            />
          </RowLabel>
          <RowField>
            <input type="text" />
          </RowField>
        </FormRow>
        <FormRow>
          <input id="tos-pp-agreement" type="checkbox" />
          <RowLabel htmlFor="tos-pp-agreement">
            <FormattedMessage
              id="checkout.tos-pp-agreement"
              defaultMessage="I have read and agree to Terms of Service and Privacy Policy"
            />
          </RowLabel>
        </FormRow>
        <FormRow>
          <input id="gift-agreement" type="checkbox" />
          <RowLabel htmlFor="gift-agreement">
            <FormattedMessage
              id="checkout.gift-purchase-agreement"
              values={{ username: recipientUsername, }}
              defaultMessage="I understand that this is a gift purchase for the user @{username}"
            />
          </RowLabel>
        </FormRow>
        <PayButton>
          <FormattedMessage
            id="checkout.pay-button"
            defaultMessage="Pay"
          />
        </PayButton>
      </ContactsForm>
    </ContactsContainer>
  );
};

export {
  Contacts,
};