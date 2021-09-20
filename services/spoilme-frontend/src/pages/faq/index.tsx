import styled from "@emotion/styled";
import Collapsible from "react-collapsible";
import "./collapsible.css";
import { BreadcrumbLink } from "../../components/BreadcrumbLink";

const Wrapper = styled.div`
  padding: 20px 15px 0;

  a.contact {
    text-decoration: underline;
  }
`;

function Faq() {
  return (
    <Wrapper>
      <BreadcrumbLink to="/">
        На главную
      </BreadcrumbLink>
      <h2>Вопросы и ответы</h2>
      <Collapsible trigger="❓ Когда мой заказ будет отправлен?">
        <p>
        ❗ Мы отправляем заказ в течение 2-х рабочих дней с
        момента поступления средств на счёт компании.
        </p>
      </Collapsible>
      <Collapsible trigger="❓ Сколько занимает доставка?">
        <p>
        ❗ Доставка обычно занимает от 2 до 4 рабочих дней,
        однако возможно увеличение сроков доставки до 14 дней.
        </p>
      </Collapsible>
      <Collapsible trigger="❓ Как оформить возврат?">
        <p>
        ❗ В течение 24 часов с момента оформления заказа 
        Вы можете отказаться от покупки и вернуть себе потраченные
        средства за исключением комиссии платежных систем. 
        </p>
        <p>
          Для того чтобы оформить отмену заказа, напишите письмо на 📧<a href="mailto:hello@spoilme.shop" style={{textDecoration: 'underline'}}>hello@spoilme.shop</a> c 
          пометкой "Возврат". Мы ответим Вам в течение 1 рабочего дня.
        </p>
      </Collapsible>
    </Wrapper>
  );
};

export default Faq;