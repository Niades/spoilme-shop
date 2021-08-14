import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import Illustration from "../../assets/images/how-it-works/gift-delivered.jpg";

const Container = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Home = () => {
  return (
    <Container>
      <article>
        <h2>
          <FormattedMessage
            id="home.title"
            defaultMessage="Accept gifts from your fans"
          />
        </h2>
        <p>
          <FormattedMessage
            id="home.step1"
            defaultMessage="1. Create your wishlist"
          />
        </p>
        <p>
          <FormattedMessage
            id="home.step2"
            defaultMessage="2. Share the link to your wishlist"
          />
        </p>
        <p>
          <FormattedMessage
            id="home.step3"
            defaultMessage="3. Receive gifts!"
          />
        </p>
        <p style={{ textAlign: "center", }}>
          <img style={{ margin: "0 auto", width: "100%", maxWidth: "400px", }} src={Illustration} alt="pic" />
        </p>
        <p>
          <FormattedMessage
            id="home.invite-only-msg"
            defaultMessage="Registration is now invite-only. Enter your email below to be notified when it opens:"
          />
        </p>
        <form style={{ textAlign: "center", }}>
          <label htmlFor="email">E-mail </label>
          <input style={{ width: "100%", maxWidth: "250px", display: "inline-block", }} id="email" placeholder="email" />
        </form>
      </article>
    </Container>
  );
};

export default Home;