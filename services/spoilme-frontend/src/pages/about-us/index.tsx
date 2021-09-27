import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { BreadcrumbLink } from "../../components/BreadcrumbLink";

const Wrapper = styled.div`
  padding: 20px 15px 0;

  a.contact {
    text-decoration: underline;
  }
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <BreadcrumbLink to="/">
        <FormattedMessage
          id="common.back-to-home"
        />
      </BreadcrumbLink>
      <h1>SpoilMe.shop</h1>
      <p>
        <FormattedMessage
          id="about.sole-proprietor"
        />
      </p>
      <p>
        <FormattedMessage
          id="about.address"
        />
      </p>
      <p>
        <FormattedMessage
          id="about.ogrnip"
        />
      </p>
      <p>☎️ <a className="contact" href="tel:+79534750586">+7(953)475-05-86</a></p>
      <p>📧 <a className="contact" href="mailto:hello@spoilme.shop">hello@spoilme.shop</a></p>
      <p>
        <FormattedMessage
          id="about.working-hours"
        />
      </p>
    </Wrapper>
  );
};

export default AboutUs;