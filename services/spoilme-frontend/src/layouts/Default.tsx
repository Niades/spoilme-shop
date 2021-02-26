import React from "react";
import styled from "@emotion/styled";
import LogoUrl from "../assets/images/logo.png";


interface ContainerProps {
  children: React.ReactNode,
};

interface DefaultLayoutProps {
  children: React.ReactNode,
};

const Nav = styled.nav`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  display: grid;
  padding: 0 15px;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.color.header};
  z-index: 999;
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
  font-family: 'sans';
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
    <Nav>
      <Logo />
    </Nav>
  );
});

// Footer
const Footer = React.memo(() => {
  return (
    <FooterContainer>
      <FooterLink>
        terms of service
      </FooterLink>
      <FooterLink>
        privacy policy
      </FooterLink>
      <FooterLink>
        contact us
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