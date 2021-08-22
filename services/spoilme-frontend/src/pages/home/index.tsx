import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import PhoneImg from "../../assets/images/landing-phone-only.png";
import BraceletsImg from "../../assets/images/bracelets.png";
import SneakersImg from "../../assets/images/sneakers.png";
import LouieBagImg from "../../assets/images/louie-bag.png";


const Container = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  overflow-x: hidden;
`;

const PhoneWrapper = styled.div`
  position: relative;
  text-align: center;

  img.phone {
    position: relative;
    width: 245px;
    height: 474px;
    z-index: 3;
  }

  img.bracelets {
    position: absolute;
    width: 138px;
    height: 185px;
    left: 208px;
    top: 0px;
    z-index: 4;
  }

  img.sneakers {
    position: absolute;
    width: 168.3px;
    left: 200px;
    top: 200px;
    z-index: 2;
  }

  img.louie-bag {
    position: absolute;
    z-index: 4;
    top: 225px;
    left: -33px;
    width: 245px;
  }
`;

const Title = styled.h2`
  display: block;
  font-weight: 900;
  margin: 0 auto 10px;
  max-width: 187px;
  text-align: center;
`;

const StepsOL = styled.ol`
  list-style: none;

  li {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 28px;
  }
`;

const MarkerOL = styled.span`
  display: inline-block;
  text-align: center; 
  font-weight: 500;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  margin-right: 10px; 
  background-color: #000000;
  color: #FFFFFF;
`;

const EmailForm = styled.form`
  margin: 30px 0 30px;
  text-align: center;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.1);
`;

const EmailInput = styled.input`
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const SendBtn = styled.button`
  margin-top: 10px;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  min-height: 44px;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
  font-size: 18px;
`;

const Home = () => {
  return (
    <Container>
      <article>
        <Title>
          <FormattedMessage
            id="home.title"
            defaultMessage="Accept gifts from your fans"
          />
        </Title>
        <PhoneWrapper>
          <img className="phone" src={PhoneImg} />
          <img className="bracelets" src={BraceletsImg} />
          <img className="sneakers" src={SneakersImg} />
          <img className="louie-bag" src={LouieBagImg} />
        </PhoneWrapper>
        <StepsOL>
          <li>
            <MarkerOL>1</MarkerOL>
            <FormattedMessage
              id="home.step1"
              defaultMessage="Create your wishlist"
            />
          </li>
          <li>
            <MarkerOL>2</MarkerOL>
            <FormattedMessage
              id="home.step2"
              defaultMessage="Share the link to your wishlist"
            />
          </li>
          <li>
            <MarkerOL>3</MarkerOL>
            <FormattedMessage
              id="home.step3"
              defaultMessage="Receive gifts!"
            />
          </li>
        </StepsOL>
        <EmailForm>
          <p style={{ marginTop: 0, }}>
            <FormattedMessage
              id="home.invite-only-msg"
              defaultMessage="Registration is now invite-only. Enter your email below to be notified when it opens."
            />
          </p>
          <EmailInput id="email" type="email" placeholder="" />
          <SendBtn>
            <FormattedMessage
              id="home.send-btn"
              defaultMessage="Send"
            />
          </SendBtn>
        </EmailForm>
      </article>
    </Container>
  );
};

export default Home;