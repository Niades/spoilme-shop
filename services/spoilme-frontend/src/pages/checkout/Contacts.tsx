import styled from "@emotion/styled";
import { FormattedMessage, useIntl } from "react-intl";
import { ReactComponent as LockIcon } from "../../assets/images/lock.svg";


export interface ContactsValue {
  email: string,
  legalAgreed: boolean,
  sanityAgreed: boolean,
  message: string|undefined,
};

interface ContactsProps {
  recipientUsername: string,
  value: ContactsValue,
  onChange: (newValue: ContactsValue) => void,
  onPay: () => void,
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
  margin-bottom: 5px;
`;

const RowField = styled.div`
  >input, >textarea {
    margin: 5px 0;
    max-width: 670px;
    font-family: inherit;
    display: block;
    border: 1px solid #000;
    border-radius: 9px;
    padding: 5px 10px;
    outline: none;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const PayButton = styled.button`
  cursor: pointer;
  margin-top: 15px; 
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  padding: 10px 0;
  background-color: #83B692;
  border-radius: 20px;
  width: 100%;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const validate = (value: ContactsValue) => {
  // validate email
  if(value.email === "") {
    return false;
  }
  // validate legal agreement
  if(!value.legalAgreed) {
    return false;
  }
  // validate sanity check
  if(!value.sanityAgreed) {
    return false;
  }
  return true;
};

const Contacts = (props: ContactsProps) => {
  const { recipientUsername, value, onChange, onPay } = props;
  const intl = useIntl();
  const canPay = validate(value);
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
      <ContactsForm onSubmit={(e) => {
        e.preventDefault();
        onPay();
      }}>
        <FormRow>
          <RowLabel>
            Email
          </RowLabel>
          <RowField>
            <input 
              placeholder="email@example.com"
              type="text"
              value={value.email}
              onChange={(e) => onChange({...value, email: e.target.value})}
            />
          </RowField>
        </FormRow>
        <FormRow>
          <RowLabel>
            <FormattedMessage
              id="checkout.message-title"
              defaultMessage="Message <span>(optional)</span>"
              values={{
                span: (chunks: any) => <span>{chunks}</span>
              }}
            />
          </RowLabel>
          <RowField>
            <textarea 
              placeholder={intl.formatMessage({ id: "checkout.message-placeholder" }, { username: recipientUsername })}
              value={value.message}
              onChange={(e) => onChange({...value, message: e.target.value})}
            />
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
          <input 
            id="tos-pp-agreement"
            type="checkbox"
            checked={value.legalAgreed}
            onChange={(e) => onChange({ ...value, legalAgreed: e.target.checked})}
          />
          <RowLabel htmlFor="tos-pp-agreement">
            <FormattedMessage
              id="checkout.tos-pp-agreement"
              defaultMessage="I have read and accept the Public Offer and Privacy Statement"
            />
          </RowLabel>
        </FormRow>
        <FormRow>
          <input
            id="gift-agreement"
            type="checkbox"
            checked={value.sanityAgreed}
            onChange={(e) => onChange({ ...value, sanityAgreed: e.target.checked})}
          />
          <RowLabel htmlFor="gift-agreement">
            <FormattedMessage
              id="checkout.gift-purchase-agreement"
              values={{ username: recipientUsername, }}
              defaultMessage="I understand that this is a gift purchase for the user @{username}"
            />
          </RowLabel>
        </FormRow>
        <PayButton disabled={!canPay}>
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