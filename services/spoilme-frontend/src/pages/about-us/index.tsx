import styled from "@emotion/styled";
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
        На главную
      </BreadcrumbLink>
      <h1>SpoilMe.shop</h1>
      <p>ИП Половинкин Даниил Алексеевич</p>
      <p>Юридический адрес: 302016, Россия, Орловская область, гор. Орёл, ш. Карачевское, д. 2, кв. 52</p>
      <p>☎️ <a className="contact" href="tel:+79534750586">+7(953)475-05-86</a></p>
      <p>📧 <a className="contact" href="mailto:hello@spoilme.shop">hello@spoilme.shop</a></p>
      <p>пн-пт c 09:00 до 17:00 MSK</p>
    </Wrapper>
  );
};

export default AboutUs;