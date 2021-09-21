import styled from "@emotion/styled";
import Collapsible from "react-collapsible";
import { FormattedMessage, useIntl } from "react-intl";
import "./collapsible.css";
import { BreadcrumbLink } from "../../components/BreadcrumbLink";

const Wrapper = styled.div`
  padding: 20px 15px 0;

  a.contact {
    text-decoration: underline;
  }
`;

const FAQS = [
  {
    questionIntlId: 'faq.q-shipping-time',
    answerIntlId: 'faq.a-shipping-time',
  },
  {
    questionIntlId: 'faq.q-shipping-when',
    answerIntlId: 'faq.a-shipping-when',
  },
  {
    questionIntlId: 'faq.q-refunds',
    answerIntlId: 'faq.a-refunds',
    values: {
      a: (chunks: any) => <a href="mailto:hello@spoilme.shop">{chunks}</a> 
    }
  }
];

function Faq() {
  const intl = useIntl();
  return (
    <Wrapper>
      <BreadcrumbLink to="/">
        <FormattedMessage
          id="common.back-to-home"
        />
      </BreadcrumbLink>
      <h2>
        <FormattedMessage
          id="faq.title"
        />
      </h2>
      {FAQS.map(q => 
        <Collapsible
          key={q.questionIntlId}
          trigger={'❓ ' + intl.formatMessage({ id: q.questionIntlId })}
        >
          <p>
            ❗ 
            <FormattedMessage id={q.answerIntlId} values={q.values} />
          </p>
        </Collapsible>
      )}
    </Wrapper>
  );
};

export default Faq;