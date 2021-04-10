import React from "react";
import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { LanguageSwitch } from "../components/LanguageSwitch";
import LogoUrl from "../assets/images/logo.png";


interface ContainerProps {
  children: React.ReactNode,
};

interface DefaultLayoutProps {
  children: React.ReactNode,
};

const HeaderContainer = styled.div`
  padding: 0 10px;
  background-color: ${props => props.theme.color.header};
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 179px 1fr 51px;
  position: relative;
  z-index: 999;
  max-width: 689px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  position: relative;
  padding: 25px 0;
`;

const LogoImage = styled.img`
  position: absolute;
  max-width: 45px;
  z-index: 1;
  top: 9px;
`;

const LogoText = styled.div`
  position: relative;
  font-size: 24px;
  z-index: 2;
  padding-left: 24px;
`;

const FooterContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
`;

const FooterLink = styled.div`
  cursor: pointer;
  padding: 10px 0;
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - 78px);

  @media (min-width: 650px) {
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
  }
`;

// Layout container
const Container = (props: ContainerProps) => {
  return (<div>{props.children}</div>);
};

const Logo = React.memo(() => {
  return (
    <LogoContainer>
      <LogoImage 
        src={LogoUrl}
        alt="Logo"
      />
      <LogoText>
        SpoilMeShop
      </LogoText>
    </LogoContainer>
  );
});

// Header
const Header = React.memo(() => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo />
        <div />
        <LanguageSwitch />
      </Nav>
    </HeaderContainer>
  );
});

// Footer
const Footer = React.memo(() => {
  return (
    <FooterContainer>
      <FooterLink>
        <FormattedMessage
          id="footer.tos-link"
          defaultMessage="terms of service"
        />
      </FooterLink>
      <FooterLink>
        <FormattedMessage
          id="footer.pp-link"
          defaultMessage="privacy policy"
        />
      </FooterLink>
      <FooterLink>
        <FormattedMessage
          id="footer.contact-link"
          defaultMessage="contact us"
        />
      </FooterLink>
    </FooterContainer>
  );
});

// Default
const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <Container>
      <Header/>
      <ContentContainer>
        {props.children}
      </ContentContainer>
      <Footer />
    </Container>
  )
};

export {
  DefaultLayout,
};