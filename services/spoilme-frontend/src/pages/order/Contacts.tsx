import styled from "@emotion/styled";

const ContactsContainer = styled.div`
  margin: 15px;
`;
const ContactsTitle = styled.div`
  font-size: 18px;
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
  border: none;
  padding: 10px 0;
  background-color: #83B692;
  border-radius: 20px;
  width: 100%;
`;

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactsTitle>
        Contact Information
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
            Phone
          </RowLabel>
          <RowField>
            <input type="text" />
          </RowField>
        </FormRow>
        <FormRow>
          <input type="checkbox" />
          I have read and agree to Terms of Service and Privacy Policy
        </FormRow>
        <FormRow>
          <input type="checkbox" />
          I understand that this is a gift purchase for the user @mikuru
        </FormRow>
        <PayButton>
          Pay
        </PayButton>
      </ContactsForm>
    </ContactsContainer>
  );
};

export {
  Contacts,
};