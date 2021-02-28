import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";


interface ContactsProps {
  recipientUsername: string,
}

const ContactsContainer = styled.div`
  margin: 15px;
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
const RowLabel = styled.div``;
const RowField = styled.div`
  >input {
    width: 100%;
    margin: 0;
    padding: 0;
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
      <ContactsForm>
        <FormRow>
          <RowLabel>
            Email*
          </RowLabel>
          <RowField>
            <input type="text" />
          </RowField>
        </FormRow>
        <FormRow>
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
          <input type="checkbox" />
          <FormattedMessage
            id="checkout.tos-pp-agreement"
            defaultMessage="I have read and agree to Terms of Service and Privacy Policy"
          />
        </FormRow>
        <FormRow>
          <input type="checkbox" />
          <FormattedMessage
            id="checkout.gift-purchase-agreement"
            values={{ username: recipientUsername, }}
            defaultMessage="I understand that this is a gift purchase for the user @{username}"
          />
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