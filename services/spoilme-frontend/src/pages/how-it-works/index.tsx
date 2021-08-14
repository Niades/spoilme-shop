import styled from "@emotion/styled";
import GlobeUrl from "../../assets/images/how-it-works/globe.jpg";
import ProblemsUrl from "../../assets/images/how-it-works/problems.jpg";
import SolutionUrl from "../../assets/images/how-it-works/solution.jpg";
import GiftDeliveredUrl from "../../assets/images/how-it-works/gift-delivered.jpg";


const ArticleBody = styled.div`
  padding: 0 10px;
`;

const TextIllustration = styled.img`
  display: inline-block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 300px;
`;

const HowItWorks = () => {
  return (
    <ArticleBody>
      <h1>How it works?</h1>
      <h2>I want to buy someone a gift</h2>
      <p>Sometimes we want to buy presents for people that are far away. Then giving a gift becomes even more complicated than just choosing it.</p>
      <TextIllustration src={GlobeUrl} />
      <p>
        You are faced with a lot of questions:
        <ul>
          <li>How do I find the right local online store that has the thing I need in stock and will deliver it?</li>
          <li>How do I avoid getting scammed?</li>
          <li>How do I organize the delivery?</li>
          <li>How do I make sure the recipient likes the gift? And what if they want to keep their address private?</li>
          <li>And the list could go on and on.</li>
        </ul>
      </p>z
      <TextIllustration src={ProblemsUrl} />
      <p>
        Our service aims to make the gift-giving process as simple as it should be for both sides. You just need to follow these simple steps:
        <ol>
          <li>Open the recipient's wishlist. They added only the items that they want, so do not worry about getting a wrong one.</li>
          <li>Pick the item you prefer. You can add a signature or leave it anonymous.</li>
          <li>Choose the way you want to be notified about your order. E-mail or text? We got you.</li>
          <li>Complete the payment via PayPal or a bank card.</li>
        </ol>
      </p>
      <p>Done! No need to make things awkward and ask them for the address — we already have it!</p>
      <TextIllustration src={SolutionUrl} />
      <p>After receiving your payment, we will handle everything else and deliver the gift to the person you chose. Then you can take the credit for the gift (or leave them guessing...).</p>
      <TextIllustration src={GiftDeliveredUrl} />
      <p>If we fail to deliver the present for whatever reason, you will receive a full refund. We value our customers’ privacy and do not share your private information with the recipient or any third parties.</p>
    </ArticleBody>
  );
};

export default HowItWorks;